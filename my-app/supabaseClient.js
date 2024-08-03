import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://dbhaguwbneuyubikdfbd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiaGFndXdibmV1eXViaWtkZmJkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3MTE2NzQsImV4cCI6MjAzODI4NzY3NH0.l4IjeNyE-DcVRqXlydpW8f043MAZ7Aa8L7F1ZtFTVCU';

export const supabase = createClient(supabaseUrl, supabaseKey);
