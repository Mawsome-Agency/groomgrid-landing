# GroomGrid Landing Page

MVP landing page for [GroomGrid](https://groomgrid.com) — AI-powered pet grooming business management platform.

## Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS** (custom teal/coral/sand palette)
- **Vercel** (deploy target)

## Sections

1. **Nav** — Fixed, scroll-aware with blur
2. **Hero** — AI angle headline, app dashboard mockup, social proof
3. **Pain Points** — Before/After grid with testimonial
4. **Features** — 6-feature grid (scheduling, CRM, AI breed, rebooking, photos, payments)
5. **Pricing** — 3-tier table ($29/$79/$149)
6. **Waitlist Form** — Email + business type, posts to `/api/waitlist`
7. **Footer** — Links, social, brand

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Waitlist API

`POST /api/waitlist` — accepts `{ email, businessType }`.

Currently uses in-memory store. Replace with Supabase:

```ts
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!)

await supabase.from('waitlist').insert({ email, business_type: businessType })
```

## Deploy to Vercel

```bash
vercel --prod
```

Set env vars in Vercel dashboard when integrating Supabase:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`

## SEO

- Full OpenGraph + Twitter card meta
- Structured data (JSON-LD SoftwareApplication + Offer schema)
- Canonical URL set to `https://groomgrid.com`
- Mobile-first, targets 95+ Lighthouse score
