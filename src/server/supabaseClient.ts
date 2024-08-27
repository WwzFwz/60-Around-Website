import { createClient } from '@supabase/supabase-js';
import type { SupabaseClient } from '@supabase/supabase-js'; // Explicitly import type

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabaseClient: SupabaseClient = createClient(supabaseUrl, supabaseKey);
