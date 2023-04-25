import { createClient } from "@supabase/supabase-js";


const supabaseUrl = 'https://faisymyiqxclwdmyttcl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhaXN5bXlpcXhjbHdkbXl0dGNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NDc5MDcsImV4cCI6MTk5NjIyMzkwN30.9mTJyzSNnsZdZv4l10Db2V-vKmYXt63XQxLNEX45NaA';

export const supabase = createClient(supabaseUrl, supabaseKey);

