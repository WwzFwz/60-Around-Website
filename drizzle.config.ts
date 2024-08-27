// import { defineConfig } from 'drizzle-kit';

// export default defineConfig({
//   schema: './src/server/db/schema.ts',
//   out: './drizzle',
//   dialect: 'postgresql', // PostgreSQL
//   dbCredentials: {
//     host: 'aws-0-ap-southeast-1.pooler.supabase.com', // Host dari DATABASE_URL
//     port: 6543, // Port dari DATABASE_URL
//     user: 'postgres.cbcbfvvlzsalhunyonzv', // User dari DATABASE_URL
//     password: '4378yrhfuinel;mklfn3', // Password dari DATABASE_URL
//     database: 'postgres', // Database dari DATABASE_URL
//     ssl: false, // Menggunakan SSL untuk koneksi
//   },
// });


import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  schema: './src/server/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: process.env.DB_HOST ?? '', // Pastikan selalu string
    port: Number(process.env.DB_PORT) || 5432, // Port default ke 5432 jika tidak terdefinisi
    user: process.env.DB_USER ?? '', // Pastikan selalu string
    password: process.env.DB_PASSWORD ?? '', // Pastikan selalu string
    database: process.env.DB_DATABASE ?? '', // Pastikan selalu string
    ssl: process.env.DB_SSL === 'true', // SSL bisa true atau false
  },
});

