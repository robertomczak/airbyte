#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#

from datetime import datetime
from typing import MutableMapping

from airbyte_cdk.sources.file_based.stream.cursor import DefaultFileBasedCursor
from airbyte_cdk.sources.file_based.types import StreamState


class Cursor(DefaultFileBasedCursor):
    DATE_FORMAT = "%Y-%m-%d"

    def set_initial_state(self, value: StreamState) -> None:
        if self._is_legacy_history(value):
            value = self._convert_legacy_history(value)
        super().set_initial_state(value)

    @staticmethod
    def _is_legacy_history(value: StreamState) -> bool:
        if not value:
            return False
        item = list(value.keys())[0]
        try:
            datetime.strptime(item, Cursor.DATE_FORMAT)
        except ValueError:
            return False
        return True

    @staticmethod
    def _convert_legacy_history(legacy_history: MutableMapping[str, str]) -> MutableMapping[str, str]:
        """
        Transform the history from the old state message format to the new.

        e.g.
        {
            "2022-05-26": ["simple_test.csv.csv", "simple_test_2.csv"],
            "2022-05-27": ["simple_test_2.csv", "redshift_result.csv"],
            ...
        }
        =>
        {
            "simple_test.csv": "2022-05-26T00:00:00.000000Z",
            "simple_test_2.csv": "2022-05-27T00:00:00.000000Z",
            "redshift_result.csv": "2022-05-27T00:00:00.000000Z",
            ...
        }
        """
        history = {}

        for date_str, filenames in legacy_history.items():
            date_obj = datetime.strptime(date_str, Cursor.DATE_FORMAT)

            for filename in filenames:
                if filename in history:
                    if date_obj > datetime.strptime(history[filename], "%Y-%m-%dT%H:%M:%S.%fZ"):
                        history[filename] = date_obj.strftime("%Y-%m-%dT%H:%M:%S.%fZ")
                else:
                    history[filename] = date_obj.strftime("%Y-%m-%dT%H:%M:%S.%fZ")

        return history
