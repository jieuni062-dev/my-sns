import { createClient } from '@supabase/supabase-js'

// 주소와 키는 .env.local 에서 읽는다
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
)
