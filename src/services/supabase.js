import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://rwgupphlhhfafhgivihc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3Z3VwcGhsaGhmYWZoZ2l2aWhjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMxNzAwOTQsImV4cCI6MjAxODc0NjA5NH0.1e-92oydQ5XqzB7EqTY8hXNIvrU8cPyOQk8Dkuo06qU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
