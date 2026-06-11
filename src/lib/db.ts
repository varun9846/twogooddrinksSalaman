import { Pool, type QueryResultRow } from "pg";

const globalForPg = globalThis as unknown as {
  pgPool?: Pool;
};

function createPool() {
  return new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl:
      process.env.PGSSL === "true"
        ? {
            rejectUnauthorized: false,
          }
        : undefined,
  });
}

export const pool = globalForPg.pgPool ?? createPool();

if (process.env.NODE_ENV !== "production") {
  globalForPg.pgPool = pool;
}

export async function query<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params: unknown[] = [],
) {
  return pool.query<T>(text, params);
}
