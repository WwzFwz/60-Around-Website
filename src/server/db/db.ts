// src/lib/db.ts
import postgres from 'postgres';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema';  // Mengimpor skema yang sudah Anda buat

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;

const sql = postgres(supabaseUrl, {
  transform: {
    undefined: null
  }
});

export const db = drizzle(sql, { schema });
