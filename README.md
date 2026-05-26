# NexusNova Studio — Final Production Website

A polished agency website and backend for NexusNova Studio using Next.js, Tailwind, Framer Motion, Clerk, Supabase, Resend, and Vercel.

## Included

- Premium dark frontend with animated hero, glass cards, industry sections, website audit section, services, comparison table, case studies, tech stack, pricing, FAQ, contact, and WhatsApp CTA
- Public pages: Home, Contact, Thank You, Portfolio, Portfolio Detail, Blog, Blog Detail
- Full admin dashboard CRUD for leads, blog posts, portfolio projects, testimonials, pricing plans, newsletter subscribers, and site settings
- Admin image upload for portfolio and blog cover images using Supabase Storage bucket `nexusnova-media`
- Stronger admin security using Clerk + `ADMIN_EMAIL` allowlist
- Supabase PostgreSQL schema with RLS policies and Storage bucket setup
- Public lead form saves to Supabase
- Resend email notification to admin and confirmation email to client
- SEO: metadata, sitemap, robots, OpenGraph image route
- Vercel-ready environment setup

## Run Locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open: `http://localhost:3000`

## Supabase Setup

1. Create a Supabase project.
2. Go to SQL Editor.
3. Paste and run `supabase/schema.sql`.
4. Copy Supabase URL, anon key, and service role key into `.env.local`.
5. The SQL creates a public Storage bucket named `nexusnova-media` for admin-uploaded images.

## Clerk Setup

1. Create a Clerk project.
2. Add `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` to `.env.local`.
3. Set `ADMIN_EMAIL` to your Gmail/admin email.
4. Only emails in `ADMIN_EMAIL` can access `/admin` and admin API routes.

Multiple admins:

```env
ADMIN_EMAIL=you@gmail.com,team@gmail.com
```

## Resend Setup

1. Create a Resend account.
2. Add `RESEND_API_KEY`.
3. Set `RESEND_FROM`. For production, verify your own domain in Resend.
4. Set `LEAD_NOTIFY_EMAIL` to receive lead notifications.

## Deploy on Vercel

1. Push project to GitHub.
2. Import in Vercel.
3. Add all environment variables.
4. Deploy.

## Production Checklist

- [ ] Replace placeholder demo case studies with real work when you get clients
- [ ] Verify Resend sending domain
- [ ] Confirm Clerk production keys
- [ ] Confirm Supabase service role key is only in Vercel environment variables, never GitHub
- [ ] Run `supabase/schema.sql` before using admin image upload
- [ ] Test lead form, admin notification email, and client confirmation email
- [ ] Test admin CRUD after signing in with `ADMIN_EMAIL`
- [ ] Upload portfolio/blog images from admin panel

## Security Notes

- Never expose `SUPABASE_SERVICE_ROLE_KEY` in frontend code.
- Do not commit `.env.local`.
- Admin API routes require Clerk authentication and admin email allowlist.
- Public website only reads published/active content.
