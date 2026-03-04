# rupanprasai.com

Production-ready personal website for **RUPAN PRASAI**, built with Astro and optimized for SEO on the custom domain **https://rupanprasai.com**.

## Tech stack
- Astro (static output)
- Markdown content collection for blog posts
- Simple CSS (minimal JavaScript)
- Cloudflare Pages deployment target

## Local development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open the local URL shown in terminal (usually `http://localhost:4321`).

## Build for production
```bash
npm run build
```

Build output is generated to `dist/`.

## Cloudflare Pages deployment
1. Push this repository to GitHub.
2. In Cloudflare Dashboard, go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select your repo and configure:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: use a common LTS (recommended `20.x`).
4. Save and deploy.

## Custom domain setup (apex + www)
1. In your Pages project, go to **Custom domains**.
2. Add `rupanprasai.com` (apex/root).
3. Add `www.rupanprasai.com`.
4. In DNS, point records to Cloudflare as instructed by Pages.
5. Set `https://rupanprasai.com` as canonical in site content (already configured in `src/site.config.ts` + `astro.config.mjs`).

## Where to edit content
- Global site/profile details (name, tagline, email, location, projects): `src/site.config.ts`
- Home page content: `src/pages/index.astro`
- About page content: `src/pages/about.astro`
- Projects page structure: `src/pages/projects.astro`
- Blog posts: `src/content/blog/*.md`
- Blog index and post routes: `src/pages/blog/index.astro`, `src/pages/blog/[slug].astro`
- Contact details/page: `src/pages/contact.astro`
- Shared SEO layout: `src/layouts/BaseLayout.astro`
- Robots policy: `public/robots.txt`

## SEO features included
- Unique title + description per page
- Canonical URL tags on every route
- OpenGraph + Twitter card metadata on every route
- Homepage Person JSON-LD structured data
- `robots.txt` allowing indexing
- Automatic sitemap generation via `@astrojs/sitemap`

## Notes
Replace `YOUR_EMAIL`, `YOUR_CITY_STATE`, and `YOUR_TAGLINE` in `src/site.config.ts` with your real details.
