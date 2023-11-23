import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wamxoygslhrofzdwditu.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndhbXhveWdzbGhyb2Z6ZHdkaXR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA1OTM2MjUsImV4cCI6MjAxNjE2OTYyNX0.2btOnNHOmFqCt8JNlUwyBC44U8geD-zmUFGqZIWts1U'

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
