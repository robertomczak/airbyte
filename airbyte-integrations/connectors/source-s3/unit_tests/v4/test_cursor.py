#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#

import pytest
from typing import MutableMapping, Any

from source_s3.v4.cursor import Cursor


@pytest.mark.parametrize(
    "input_history, expected_output",
    [
        pytest.param({}, {}, id="empty-history"),
        pytest.param(
            {"2023-08-01": ["file1.txt"]},
            {"file1.txt": "2023-08-01T00:00:00.000000Z"},
            id="single-date-single-file",
        ),
        pytest.param(
            {"2023-08-01": ["file1.txt", "file2.txt"]},
            {
                "file1.txt": "2023-08-01T00:00:00.000000Z",
                "file2.txt": "2023-08-01T00:00:00.000000Z",
            },
            id="single-date-multiple-files",
        ),
        pytest.param(
            {
                "2023-08-01": ["file1.txt", "file2.txt"],
                "2023-07-31": ["file1.txt", "file3.txt"],
                "2023-07-30": ["file3.txt"],
            },
            {
                "file1.txt": "2023-08-01T00:00:00.000000Z",
                "file2.txt": "2023-08-01T00:00:00.000000Z",
                "file3.txt": "2023-07-31T00:00:00.000000Z",
            },
            id="multiple-dates-multiple-files",
        ),
    ],
)
def test_convert_dates(input_history: MutableMapping[str, Any], expected_output: MutableMapping[str, Any]) -> None:
    assert Cursor._convert_legacy_history(input_history) == expected_output
