import { FieldPacket, RowDataPacket, ResultSetHeader } from "mysql2/promise";
import db from "../../lib/db";

export interface QueryResult {
  rows: RowDataPacket[] & ResultSetHeader;
  fields: FieldPacket[] | undefined;
}

/**
 * Low-level parameterised query executor.
 * Returns { rows, fields } on success; throws on error.
 */
export async function query(sql: string, params: unknown[] = []): Promise<QueryResult> {
  try {
    const [rows, fields] = await db.query(sql, params as unknown as []);
    return { rows: rows as QueryResult["rows"], fields: fields as FieldPacket[] };
  } catch (err) {
    console.error("[DB] Query error:", (err as Error).message);
    console.error("[DB] SQL:", sql);
    console.error("[DB] Params:", params);
    throw err;
  }
}
