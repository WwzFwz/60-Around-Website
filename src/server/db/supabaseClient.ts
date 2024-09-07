// import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = 'https://cbcbfvvlzsalhunyonzv.supabase.co';
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiY2JmdnZsenNhbGh1bnlvbnp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxMTc5MDYsImV4cCI6MjAzOTY5MzkwNn0.8OhqMxqEEpkRnNK-oggtvSiZ3Zy6-T0ZX8w7sujEz-I'

// export const supabase = createClient(supabaseUrl, supabaseKey);

import { createClient } from '@supabase/supabase-js';
import type { SupabaseClient } from '@supabase/supabase-js'; // Explicitly import type

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabaseClient: SupabaseClient = createClient(supabaseUrl, supabaseKey);