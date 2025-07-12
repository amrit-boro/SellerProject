import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://gwapiwzfmrxxdvfysqbo.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd3YXBpd3pmbXJ4eGR2ZnlzcWJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzNjk0MjksImV4cCI6MjA2NDk0NTQyOX0.Eg6OzC5i1CJ8J8G2DkZVo9MigWw38oDLMwDre-jDpEY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
