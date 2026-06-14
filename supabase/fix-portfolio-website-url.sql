-- Production repair for admin portfolio website links.
-- Run this in the Supabase SQL Editor for the same project used by production.

alter table public.portfolio_projects
  add column if not exists website_url text;

-- Force PostgREST/Supabase API to refresh its schema cache immediately.
notify pgrst, 'reload schema';
