import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://postgresql0:E9qJdNxs031dvVnA@postgresql0:5432/db",
  },
});
