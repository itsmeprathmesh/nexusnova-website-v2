-- NexusNova Studio final production schema
create extension if not exists "uuid-ossp";

create table if not exists leads (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  email text not null,
  phone text not null,
  business_name text not null,
  service_needed text not null,
  budget text not null,
  timeline text not null,
  message text not null,
  status text not null default 'new' check (status in ('new','contacted','converted','lost')),
  admin_notes text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists blog_posts (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text unique not null,
  excerpt text not null,
  content text not null,
  cover_image text,
  status text not null default 'draft' check (status in ('draft','published')),
  seo_title text,
  seo_description text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists portfolio_projects (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  slug text unique not null,
  industry text not null,
  summary text not null,
  challenge text,
  solution text,
  results text,
  image_url text,
  website_url text,
  status text not null default 'draft' check (status in ('draft','published')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table if exists portfolio_projects add column if not exists website_url text;
notify pgrst, 'reload schema';

create table if not exists testimonials (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  role text,
  company text,
  quote text not null,
  rating int default 5 check (rating between 1 and 5),
  status text not null default 'draft' check (status in ('draft','published')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists pricing_plans (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  price int not null default 0,
  description text,
  features text[] default '{}',
  popular boolean default false,
  status text not null default 'active' check (status in ('active','hidden')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists newsletter_subscribers (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  created_at timestamptz default now()
);

create table if not exists site_settings (
  id uuid primary key default uuid_generate_v4(),
  key text unique not null,
  value text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

alter table leads enable row level security;
alter table blog_posts enable row level security;
alter table portfolio_projects enable row level security;
alter table testimonials enable row level security;
alter table pricing_plans enable row level security;
alter table newsletter_subscribers enable row level security;
alter table site_settings enable row level security;

-- Public read policies for published/active content only.
drop policy if exists "Public published blog" on blog_posts;
create policy "Public published blog" on blog_posts for select using (status = 'published');
drop policy if exists "Public published projects" on portfolio_projects;
create policy "Public published projects" on portfolio_projects for select using (status = 'published');
drop policy if exists "Public published testimonials" on testimonials;
create policy "Public published testimonials" on testimonials for select using (status = 'published');
drop policy if exists "Public active pricing" on pricing_plans;
create policy "Public active pricing" on pricing_plans for select using (status = 'active');

-- Admin operations are performed through the Supabase service role from secure Next.js API routes.

insert into blog_posts (title, slug, excerpt, content, status, seo_title, seo_description) values
('Why Every Local Business Needs a Premium Website in 2026','premium-website-local-business-2026','A practical guide for business owners who want more trust and better leads.','A premium website is not only about visuals. It improves trust, speed, clarity, and lead generation. Businesses that combine clear offers, fast pages, WhatsApp CTAs, and automation can convert more visitors into real inquiries.','published','Why Local Businesses Need Premium Websites','Premium website strategy for local businesses.')
on conflict (slug) do nothing;

insert into portfolio_projects (
  title,
  slug,
  industry,
  summary,
  challenge,
  solution,
  results,
  image_url,
  website_url,
  status
) values
(
  'Restaurant Growth Website',
  'restaurant-growth-website',
  'Restaurant',
  'A warm luxury website with menu highlights, WhatsApp ordering, gallery, local SEO, and lead tracking.',
  'The restaurant needed a more premium online presence that helped customers see the menu, trust the brand, and place inquiries quickly.',
  'Built a conversion-focused restaurant website structure with menu highlights, WhatsApp ordering paths, gallery content, local SEO foundations, and lead tracking.',
  '+35% estimated inquiry lift',
  '',
  '',
  'published'
),
(
  'Clinic Appointment Funnel',
  'clinic-appointment-funnel',
  'Healthcare',
  'Trust-first clinic website with doctor profile, services, appointment form, patient FAQs, and automated email alerts.',
  'The clinic needed a clearer way to explain services, build patient trust, and capture appointment requests without manual back-and-forth.',
  'Designed a healthcare landing flow with doctor credibility, service sections, appointment capture, patient FAQs, and automated email alerts.',
  'Faster appointment capture',
  '',
  '',
  'published'
),
(
  'Real Estate Lead Engine',
  'real-estate-lead-engine',
  'Real Estate',
  'Premium landing system for builders with project gallery, brochure CTA, amenities, location, and inquiry pipeline.',
  'The builder needed a project page that made properties feel premium and turned interest into qualified buyer inquiries.',
  'Created a real estate landing system with gallery sections, brochure calls to action, amenities, location details, and inquiry pipeline structure.',
  'Higher quality buyer leads',
  '',
  '',
  'published'
),
(
  'Salon Booking Experience',
  'salon-booking-experience',
  'Beauty',
  'Elegant booking-focused website with service menu, offers, Instagram-style gallery, and WhatsApp call-to-action.',
  'The salon needed a polished booking experience that showed services, offers, and visual proof while making WhatsApp contact easy.',
  'Built an elegant salon website flow with service menu, offer sections, gallery-led proof, and booking-focused WhatsApp actions.',
  'More service bookings',
  '',
  '',
  'published'
),
(
  'Coaching Institute Funnel',
  'coaching-institute-funnel',
  'Education',
  'Course landing pages with result proof, batches, fees, demo class CTA, and student inquiry tracking.',
  'The institute needed to explain courses, batches, fees, and outcomes clearly enough for students and parents to inquire.',
  'Structured course landing pages with results proof, batch details, fee clarity, demo class calls to action, and student inquiry tracking.',
  'Better admission inquiries',
  '',
  '',
  'published'
),
(
  'Local Business Automation',
  'local-business-automation',
  'Services',
  'Lead capture system with email alerts, CRM statuses, newsletter collection, and admin-managed site content.',
  'The business needed a cleaner way to capture inquiries, follow up faster, and manage website content without developer help.',
  'Implemented a lead capture and content management flow with email alerts, CRM statuses, newsletter collection, and admin-managed portfolio content.',
  'Cleaner follow-up workflow',
  '',
  '',
  'published'
)
on conflict (slug) do nothing;

insert into pricing_plans (name, price, description, features, popular, status) values
('Launch',14999,'Premium presence for small businesses.',array['5-page website','Mobile responsive','Contact form','Basic SEO'],false,'active'),
('Growth',29999,'Website plus lead backend and admin dashboard.',array['Everything in Launch','Supabase database','Admin dashboard','Email notifications'],true,'active'),
('Scale',0,'Custom automation and advanced systems.',array['AI automation','Dashboards','Integrations','Monthly support'],false,'active')
on conflict do nothing;

-- Public Supabase Storage bucket for admin-uploaded portfolio/blog images.
-- The admin upload API uses the service role key. Public website reads these images through public URLs.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('nexusnova-media', 'nexusnova-media', true, 5242880, array['image/jpeg','image/png','image/webp','image/gif'])
on conflict (id) do update set public = true, file_size_limit = 5242880, allowed_mime_types = array['image/jpeg','image/png','image/webp','image/gif'];

drop policy if exists "Public read NexusNova media" on storage.objects;
create policy "Public read NexusNova media" on storage.objects for select using (bucket_id = 'nexusnova-media');
