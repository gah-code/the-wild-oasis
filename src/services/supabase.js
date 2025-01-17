import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://xdpfjawgammyratyeyyb.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhkcGZqYXdnYW1teXJhdHlleXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ5ODg0ODgsImV4cCI6MjA1MDU2NDQ4OH0.8ci6Qyj3cb8UpQZNfFxHmrdfuiwXdB6Yzx3ynqhRNQs';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
