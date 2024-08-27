import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './src/server/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql', // PostgreSQL
  dbCredentials: {
    host: 'aws-0-ap-southeast-1.pooler.supabase.com', // Host dari DATABASE_URL
    port: 6543, // Port dari DATABASE_URL
    user: 'postgres.cbcbfvvlzsalhunyonzv', // User dari DATABASE_URL
    password: '4378yrhfuinel;mklfn3', // Password dari DATABASE_URL
    database: 'postgres', // Database dari DATABASE_URL
    ssl: false, // Menggunakan SSL untuk koneksi
  },
});

