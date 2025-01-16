import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();
console.log("Database URL : ", process.env.DATABASE_URL);

export default defineConfig({
  out: "./drizzle",
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!, // Use the DATABASE_URL environment variable
  },
});
