import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

// Create a PostgreSQL connection pool
const pool = new Pool({
  connectionString: "postgresql://postgresql0:E9qJdNxs031dvVnA@postgresql0:5432/postgresql0",
});

// Create the drizzle database instance
export const db = drizzle(pool);
