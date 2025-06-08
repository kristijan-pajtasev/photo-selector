import type { Database } from '@/types_db'; // Assuming you might generate types later
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_URL");
}

if (!supabaseAnonKey) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY");
}

// Note: The Database generic type can be generated from your Supabase schema
// For now, we'll use a more generic type or 'any' if you haven't set up types_db.ts
// You can generate types using: npx supabase gen types typescript --project-id your-project-id > src/types_db.ts
// If you don't have types_db.ts yet, you can use `any` for the Database generic:
// export const supabase = createClient<any>(supabaseUrl, supabaseAnonKey);
// Or, if you prefer to wait to generate types, remove the generic for now:
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// If you have generated your types into 'src/types_db.ts':
// export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
