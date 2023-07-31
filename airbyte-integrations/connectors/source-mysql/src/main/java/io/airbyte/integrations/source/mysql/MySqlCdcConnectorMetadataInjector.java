/*
 * Copyright (c) 2023 Airbyte, Inc., all rights reserved.
 */

package io.airbyte.integrations.source.mysql;

import static io.airbyte.integrations.source.mysql.MySqlSource.CDC_DEFAULT_CURSOR;
import static io.airbyte.integrations.source.mysql.MySqlSource.CDC_LOG_FILE;
import static io.airbyte.integrations.source.mysql.MySqlSource.CDC_LOG_POS;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import io.airbyte.integrations.debezium.CdcMetadataInjector;
import java.time.Instant;

public class MySqlCdcConnectorMetadataInjector implements CdcMetadataInjector {

  private final Instant emittedAt;

  public MySqlCdcConnectorMetadataInjector(final Instant emittedAt) {
    this.emittedAt = emittedAt;
  }

  @Override
  public void addMetaData(final ObjectNode event, final JsonNode source) {
    final String cdcDefaultCursor =
        String.format("%s_%s_%s", emittedAt.toString(), source.get("file").asText(), source.get("pos").asText());
    event.put(CDC_LOG_FILE, source.get("file").asText());
    event.put(CDC_LOG_POS, source.get("pos").asLong());
    event.put(CDC_DEFAULT_CURSOR, cdcDefaultCursor);
  }

  @Override
  public String namespace(final JsonNode source) {
    return source.get("db").asText();
  }

}
