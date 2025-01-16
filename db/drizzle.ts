import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";


const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Create the drizzle database instance
export const db = drizzle(pool);
