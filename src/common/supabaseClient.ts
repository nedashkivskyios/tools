import { createClient } from "@supabase/supabase-js";

import { Database } from "../../types/supabase";

const supabaseClient = createClient<Database>(
  process.env.REACT_APP_SUPABASE_URL,
  process.env.REACT_APP_SUPABASE_ANON_KEY
);

export default supabaseClient;
