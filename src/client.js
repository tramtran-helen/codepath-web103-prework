import { createClient } from '@supabase/supabase-js';
const URL = 'https://rmtpkkkvefnhwangzqse.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtdHBra2t2ZWZuaHdhbmd6cXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTYwMDYwNDUsImV4cCI6MjA3MTU4MjA0NX0.eePV2XpKxgFFDpGgMIrH8XZeYZ_uYs_kjtfSHS5HRZk';
export const supabase = createClient(URL, API_KEY);