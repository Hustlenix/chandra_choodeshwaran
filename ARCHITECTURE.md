# Architecture Document: Chandrachoodeshwaran M — Premium Portfolio

> **Design Philosophy:** This is a SaaS product page applied to a personal brand. Narrative-driven, immersive scrolling, editorial spacing, conversion-focused. Every pixel must communicate "premium" before the user reads a single word.

---

## Table of Contents

1. [Project Structure](#1-project-structure)
2. [Component Tree & Hierarchy](#2-component-tree--hierarchy)
3. [Data Flow: Sanity → Next.js → Components](#3-data-flow)
4. [Route Design (App Router)](#4-route-design)
5. [Animation Strategy](#5-animation-strategy)
6. [Design Token System](#6-design-token-system)
7. [Sanity Schemas](#7-sanity-schemas)
8. [Deployment Configuration](#8-deployment-configuration)

---

## 1. Project Structure

```
chandra_choodeshwaran/
├── .env.local                              # Sanity credentials (local only)
├── .gitignore
├── ARCHITECTURE.md                         # ← This file
├── next.config.ts                          # Next.js config (images, headers)
├── package.json                            # Dependencies & scripts
├── postcss.config.js                       # PostCSS with Tailwind
├── sanity.cli.ts                           # Sanity CLI config
├── sanity.config.ts                        # Sanity Studio config
├── tailwind.config.ts                      # Design tokens
├── tsconfig.json                           # Strict TS, path aliases
│
├── public/                                 # Static assets (old Flask site)
│
├── src/                                    # ALL application code
│   ├── app/                                # Next.js 15 App Router
│   │   ├── globals.css                     # Global styles, Tailwind layers
│   │   ├── providers.tsx                   # React Context providers
│   │   ├── layout.tsx                      # Root layout (fonts, meta, nav, footer)
│   │   ├── page.tsx                        # Home page (all sections composed)
│   │   ├── not-found.tsx                   # 404 page
│   │   ├── loading.tsx                     # Root loading state
│   │   ├── error.tsx                       # Root error boundary
│   │   │
│   │   └── api/
│   │       └── contact/
│   │           └── route.ts                # POST /api/contact → Sanity write
│   │
│   ├── components/
│   │   ├── layout/                         # Persistent chrome
│   │   │   ├── Navbar.tsx                  # Fixed top nav, scroll-aware
│   │   │   ├── MobileNav.tsx               # Fullscreen overlay nav
│   │   │   ├── Footer.tsx                  # Site footer with social
│   │   │   └── BackToTop.tsx               # Floating scroll-to-top
│   │   │
│   │   ├── sections/                       # Page sections (scroll-based)
│   │   │   ├── Hero/                       # Section 1: Giant typography
│   │   │   │   ├── Hero.tsx                # Orchestrator
│   │   │   │   ├── HeroTitle.tsx           # Word-reveal headline
│   │   │   │   ├── HeroCTA.tsx             # Dual CTA buttons
│   │   │   │   └── MeshBackground.tsx      # Animated gradient mesh
│   │   │   │
│   │   │   ├── HumanOS/                    # Section 2: 5 interactive pillars
│   │   │   │   ├── HumanOS.tsx             # Orchestrator + mobile accordion
│   │   │   │   ├── PillarCard.tsx          # Expandable desktop card
│   │   │   │   └── PillarIcon.tsx          # GSAP-animated SVG icon
│   │   │   │
│   │   │   ├── Impact/                     # Section 3: 4 immersive blocks
│   │   │   │   ├── Impact.tsx              # Orchestrator iterating blocks
│   │   │   │   ├── ImpactBlock.tsx         # 4 variants (split, full, diagonal, grid)
│   │   │   │   └── ImpactVisual.tsx        # Block-specific visuals (rings, waves, etc.)
│   │   │   │
│   │   │   ├── Timeline/                   # Section 4: Recognition timeline
│   │   │   │   ├── Timeline.tsx            # SSR shell, dynamic imports GSAP
│   │   │   │   ├── TimelineTrack.tsx       # GSAP ScrollTrigger horizontal scroll
│   │   │   │   └── TimelineItem.tsx        # Single milestone card
│   │   │   │
│   │   │   ├── Podcast/                    # Section 5: Streaming hub
│   │   │   │   ├── Podcast.tsx             # Stateful orchestrator
│   │   │   │   ├── FeaturedEpisode.tsx     # Large featured card
│   │   │   │   ├── EpisodeList.tsx         # Sidebar episode list
│   │   │   │   └── TopicCluster.tsx        # Filterable topic tags
│   │   │   │
│   │   │   ├── Testimonials/              # Section 6: Social proof
│   │   │   │   ├── Testimonials.tsx        # Orchestrator
│   │   │   │   ├── QuoteWall.tsx           # Masonry + parallax mouse effect
│   │   │   │   └── QuoteCard.tsx           # Single testimonial card
│   │   │   │
│   │   │   └── CTA/                        # Section 7: Final conversion
│   │   │       └── CTA.tsx                 # Minimal, one headline, one button
│   │   │
│   │   └── ui/                             # Shared primitives (shadcn-style)
│   │       ├── Button.tsx                  # CVA-based button system
│   │       ├── Container.tsx               # Max-width wrapper
│   │       ├── SectionHeading.tsx          # Badge + title + subtitle
│   │       └── SocialLinks.tsx             # Icon row with hover effects
│   │
│   ├── hooks/                              # Custom React hooks
│   │   ├── useActiveSection.ts             # IntersectionObserver for nav
│   │   ├── useMediaQuery.ts                # Responsive breakpoints
│   │   ├── useScrollDirection.ts           # Scroll direction detection
│   │   └── useScrollProgress.ts            # 0-1 scroll progress
│   │
│   ├── lib/                                # Utilities & constants
│   │   ├── animations.ts                   # Framer Motion variant presets
│   │   ├── constants.ts                    # Static content, nav items, pillars
│   │   ├── utils.ts                        # cn(), formatDate(), formatDuration()
│   │   └── fonts.ts                        # next/font configuration
│   │
│   ├── sanity/                             # Sanity CMS integration
│   │   ├── client.ts                       # Read/write Sanity clients
│   │   ├── image.ts                        # URL builder for Sanity images
│   │   ├── queries.ts                      # GROQ queries
│   │   └── schemas/                        # Sanity document schemas
│   │       ├── index.ts                    # Schema registry
│   │       ├── person.ts                   # Site person config
│   │       ├── service.ts                  # Services / pillars
│   │       ├── testimonial.ts              # Testimonials
│   │       ├── podcastEpisode.ts           # Podcast episodes
│   │       ├── award.ts                    # Awards
│   │       ├── experience.ts               # Timeline milestones
│   │       ├── contactMessage.ts           # Contact form submissions
│   │       └── settings.ts                 # ★ NEW: Global site settings
│   │
│   └── types/                              # TypeScript interfaces
│       └── index.ts                        # All shared types
│
├── app/                                    # (Legacy Flask backend — to be removed)
└── instance/                               # (Legacy Flask instance)
```

**Key structural decisions:**

| Decision | Rationale |
|----------|-----------|
| All sections in `src/components/sections/` as directories | Each section is self-contained with its own sub-components; avoids flat component sprawl |
| Sanity schemas in `src/sanity/schemas/` | Co-located with client, queries, image utils for single-responsibility |
| `use client` only where needed | SSR by default, GSAP sections (`TimelineTrack`) are dynamically imported with `ssr: false` |
| Legacy `/app` (Flask) kept separate | No risk of Next.js App Router collision since it's at root, not in `src/` |

---

## 2. Component Tree & Hierarchy

```
<html>
└── <body>
    └── Providers (NavContext)
        └── RootLayout
            ├── Navbar
            │   ├── Desktop nav links
            │   ├── Desktop CTA button
            │   ├── Mobile hamburger
            │   └── Scroll progress bar
            │
            ├── MobileNav (AnimatePresence overlay)
            │
            └── <main>
                │
                ├── Hero [#hero]
                │   ├── MeshBackground
                │   ├── HeroTitle ("MASTERING HUMAN POTENTIAL")
                │   ├── Subtitle + HeroCTA
                │   └── Scroll indicator
                │
                ├── HumanOS [#philosophy]
                │   ├── SectionHeading (badge="Philosophy")
                │   ├── Desktop: PillarCard × 5 (horizontal expandable row)
                │   │   └── Each: PillarIcon + Title + ExpandableDescription
                │   └── Mobile: PillarCardMobile × 5 (vertical accordion)
                │
                ├── Impact [#impact]
                │   ├── ImpactBlock (Emotional Intelligence — split layout)
                │   │   ├── Text side (headline, body, metrics ×3, CTA)
                │   │   └── ImpactVisual (concentric rings)
                │   ├── ImpactBlock (Communication — full-width center)
                │   │   ├── Text + stat quote
                │   │   └── ImpactVisual (wave SVG)
                │   ├── ImpactBlock (Leadership — diagonal split)
                │   │   ├── ImpactVisual (geometric diamond)
                │   │   └── Text side (headline, body, benefits list, CTA)
                │   └── ImpactBlock (Counselling — ⅔+⅓ grid)
                │       ├── Text side (headline, body, services grid, CTA)
                │       └── ImpactVisual (branching paths)
                │
                ├── Timeline [#journey]
                │   ├── SectionHeading (badge="Recognition")
                │   └── TimelineTrack (dynamic, ssr:false)
                │       ├── Connecting line (GSAP drawn)
                │       ├── TimelineItem × 4 (year, title, org, description)
                │       └── "The journey continues…" sentinel
                │
                ├── Podcast [#podcast]
                │   ├── SectionHeading (badge="Podcast")
                │   ├── FeaturedEpisode (cover art, info, play button)
                │   ├── TopicCluster (filter chip bar)
                │   └── EpisodeList (recent episode links)
                │
                ├── Testimonials [#stories]
                │   ├── SectionHeading (badge="Stories")
                │   └── QuoteWall (masonry grid)
                │       └── QuoteCard × N (quote, author, source badge)
                │
                ├── CTA [#contact]
                │   ├── Glow background
                │   ├── Eyebrow "Begin Your Journey"
                │   ├── Headline "Ready to master your human potential?"
                │   └── Button "Book a Free Discovery Call"
                │
                └── Footer
                    ├── Brand + positioning
                    ├── SocialLinks row
                    └── BackToTop
```

**Data flow direction:** Top-down (page → sections → sub-components). State is lifted to the minimum common ancestor — for example, `activeIndex` in `HumanOS` is local state within that section, not in a global store.

---

## 3. Data Flow

### 3.1 Sanity → Next.js → Components

```
Sanity CMS
    │
    ├── Document: person ─────> personQuery ──┐
    ├── Document: service ────> servicesQuery ─┤
    ├── Document: testimonial ─> testimonialsQuery ─┤
    ├── Document: podcastEpisode ─> podcastQuery ───┤
    ├── Document: award ──────> awardsQuery ───┤
    ├── Document: experience ─> experiencesQuery ─┤
    └── Document: settings ───> settingsQuery ─┘
                                               │
                                        ┌──────┴──────┐
                                        │  Sanity Client │
                                        │  (src/sanity/  │
                                        │   client.ts)  │
                                        └──────┬──────┘
                                               │
                                        ┌──────┴──────┐
                                        │  Page/Layout  │
                                        │  (Server Component)
                                        └──────┬──────┘
                                               │ props
                                               ▼
                                    ┌─────────────────────┐
                                    │  Section Components  │
                                    │  (Client or Server)  │
                                    └─────────────────────┘
```

### 3.2 Fetching Strategy

```typescript
// src/app/page.tsx — Server Component
import { client } from '@/sanity/client'
import { personQuery, servicesQuery, /* ...etc */ } from '@/sanity/queries'

export default async function HomePage() {
  // Parallel data fetching — all at once, no waterfall
  const [person, services, testimonials, episodes, awards, experiences] =
    await Promise.all([
      client.fetch(personQuery),
      client.fetch(servicesQuery),
      client.fetch(testimonialsQuery),
      client.fetch(podcastEpisodesQuery),
      client.fetch(awardsQuery),
      client.fetch(experiencesQuery),
    ])

  return (
    <>
      <Hero person={person} />
      <HumanOS services={services} />
      <Impact />
      <Timeline awards={awards} experiences={experiences} />
      <Podcast episodes={episodes} />
      <Testimonials testimonials={testimonials} />
      <CTA />
    </>
  )
}
```

### 3.3 Caching & ISR

```typescript
// next.config.ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'cdn.sanity.io' }],
  },
  // ISR: revalidate every 60 seconds after build
  // Sanity webhook can trigger on-demand revalidation
}

// OR per-page ISR in page.tsx:
export const revalidate = 60  // seconds
```

### 3.4 Fallback Strategy

Each section component that receives Sanity data implements a **fallback chain**:

1. If Sanity data exists → render with live data
2. If Sanity data is empty/undefined → render with hardcoded `constants.ts` fallback
3. If error occurs → error boundary catches and shows section-level fallback

This is already implemented in `Podcast.tsx` and `Testimonials.tsx`.

### 3.5 Contact Form Flow

```
User fills form
    │
    ▼
POST /api/contact (Next.js Route Handler)
    │
    ├── Validate with Zod
    ├── Write to Sanity (writeClient.create)
    └── Return { success: true }
```

---

## 4. Route Design (App Router)

| Route | File | Type | Purpose |
|-------|------|------|---------|
| `/` | `src/app/page.tsx` | Server Component RSC | Single-page portfolio (all sections) |
| `/api/contact` | `src/app/api/contact/route.ts` | Route Handler | Contact form submission |
| `/studio` | `sanity.config.ts` | Sanity Studio | Content management |
| `/*` | `src/app/not-found.tsx` | Client Component | Custom 404 |
| `/loading` | `src/app/loading.tsx` | Server Component | Root loading UI |

**Single-page navigation:** The page is a single route (`/`). Navigation is internal anchor scrolling using `scrollIntoView` with offsets. All sections are stacked vertically.

**Why no /podcast, /about, /services sub-routes?**
- The brief explicitly calls for a **single-page, scroll-based** experience
- Sub-routes would dilute the premium SaaS narrative flow
- Podcast episodes can link externally to YouTube/Spotify

---

## 5. Animation Strategy

### 5.1 Division of Responsibility

| Library | Used For | Why |
|---------|----------|-----|
| **Framer Motion** | Entry animations, layout animations, micro-interactions, hover effects, page transitions | Declarative API, works with React state, excellent for mount/unmount animations, no DOM size overhead |
| **GSAP + ScrollTrigger** | Scroll-driven timeline scrubbing, pinning, path drawing, continuous parallax | ScrollTrigger's `scrub` and `pin` capabilities are unmatched; GSAP handles timeline-based sequencing natively |

### 5.2 Exact Animation Map

| Component | Animation Type | Engine | Trigger |
|-----------|---------------|--------|---------|
| **Navbar** | Hide/show on scroll direction | Framer Motion `animate={{ y }}` | `useScrollDirection` |
| **Navbar progress bar** | ScaleX on scroll progress | Framer Motion `style={{ scaleX }}` | `useScrollProgress` |
| **MobileNav** | Clip-path circle reveal | Framer Motion `AnimatePresence` | Toggle state |
| **Hero headline** | Word reveal (rotateX + y) | Framer Motion `wordReveal` variant | `animate` on mount |
| **Hero subtitle / CTA** | Fade in staggered | Framer Motion | `animate` on mount |
| **Mesh background** | Mouse-reactive radial gradient | CSS custom properties + `mousemove` | Pointer movement |
| **PillarCard** | Expand/collapse width + description | Framer Motion `layout` + `animate={{ height }}` | `onMouseEnter` |
| **PillarIcon** | SVG stroke/fill color morphing | GSAP `gsap.to(paths, { stroke, fill })` | `isActive` state change |
| **Impact blocks** | Scroll-triggered stagger | Framer Motion `whileInView` | Viewport intersection |
| **Impact visuals** | Path drawing, scale, rotate | Framer Motion `initial` / `whileInView` | Viewport intersection |
| **Timeline** | Horizontal scroll scrubbing | GSAP ScrollTrigger `scrub: 1.5` + `pin` | Scroll progress |
| **Timeline line** | ScaleX path drawing | GSAP `fromTo` with ScrollTrigger | Scroll progress |
| **Timeline items** | Fade-up stagger on enter | Framer Motion `whileInView` | Viewport intersection |
| **Featured episode** | Fade up, hover scale | Framer Motion | `whileInView` / `whileHover` |
| **QuoteWall** | 3D tilt on mouse move | CSS `transform: perspective() rotateX/Y()` | `onMouseMove` |
| **QuoteCard** | Fade-up stagger, hover lift | Framer Motion | `whileInView` / `whileHover` |
| **CTA** | Staggered fade-in chain | Framer Motion | `whileInView` |
| **BackToTop** | Scale + fade on scroll threshold | Framer Motion `AnimatePresence` | `useScrollProgress` |
| Page transitions | Crossfade on route change | Framer Motion `<AnimatePresence>` | Route change |

### 5.3 Performance Rules

1. **GSAP sections must be dynamically imported with `ssr: false`** (already done for `TimelineTrack`)
2. **Mouse event listeners must check `prefers-reduced-motion`** (already done in `MeshBackground` and `QuoteWall`)
3. **Framer Motion `whileInView` must use `viewport={{ once: true }}`** to avoid re-triggering
4. **Avoid animating `width`, `height`, `top`, `left`** on layout-heavy elements — use `transform` and `opacity` only
5. **GSAP ScrollTrigger instances must be cleaned up** via `ctx.revert()` in useEffect return

---

## 6. Design Token System

### 6.1 Colors

```
Brand Foundation:
  navy-900:  #0A0F1E    ← Primary background (deep obsidian)
  navy-800:  #0D1325    ← Section alt background
  navy-700:  #111A2E    ← Card/surface background
  navy-600:  #1A2540    ← Border/elevated surface
  
Accent:
  gold-400:  #E8C54A    ← Hover/active accent
  gold-500:  #D4AF37    ← Primary accent (buttons, highlights)
  gold-600:  #B8962E    ← Active/pressed state

Text:
  white:     #FFFFFF    ← Primary text
  off-white: #F5F5F0    ← Secondary text (warm)
  muted:     #8B8FA3    ← Muted/tertiary text
  
Semantic (source badges):
  google:    #22C55E    ← Google Reviews badge
  linkedin:  #3B82F6    ← LinkedIn badge
```

### 6.2 Typography

| Token | Value | Usage |
|-------|-------|-------|
| `font-serif` | `DM Serif Display`, Georgia, serif | Headlines, hero, pull quotes |
| `font-sans` | `Figtree`, Inter, system-ui | Body text, buttons, nav |
| `font-mono` | `JetBrains Mono`, Fira Code | Badges, labels, stats |
| `tracking-[0.3em]` | Section eyebrow labels | All section badges |
| `tracking-[0.2em]` | Nav items | Navigation, uppercase labels |
| `tracking-[0.15em]` | Sub-labels | Timeline organization, meta |

### 6.3 Spacing Scale

```
Custom tokens (tailwind.config.ts):
  spacing.section:     '8rem'     ← Standard section padding
  spacing.section-lg:  '12rem'    ← Hero + CTA section padding

Standard Tailwind scale used throughout:
  px-6, px-8, px-12               ← Container padding (responsive)
  gap-4, gap-6, gap-8, gap-12     ← Grid/flex gaps
  py-8, py-12, py-24              ← Element padding
  mt-6, mt-8, mt-10, mt-12, mt-16 ← Vertical rhythm
  mb-4, mb-6, mb-16, mb-20        ← Section heading spacing
```

### 6.4 Component Design Tokens

```css
/* Buttons — CVA-driven */
.button-primary:
  bg-gold-500 / text-navy-900
  hover:bg-gold-400 / hover:shadow-lg / hover:shadow-gold-500/25
  active:bg-gold-600

.button-secondary:
  border border-gold-500/50 / text-gold-400
  hover:bg-gold-500/10 / hover:border-gold-400

.button-ghost:
  text-muted / hover:text-white / hover:bg-white/5

/* Section Heading */
.badge:    font-mono / text-xs / tracking-[0.3em] / text-gold-500 / mb-4
.title:    font-serif / text-4xl-6xl / leading-tight / text-white
.subtitle: text-lg-xl / text-muted / mt-6

/* Cards & Surfaces */
.card-default:    bg-white/[0.02] / border border-white/5
.card-hover:      bg-white/[0.04] / border-gold-500/20
.card-elevated:   bg-navy-700 / border-white/10
.glass:           bg-white/5 / backdrop-blur-xl
```

---

## 7. Sanity Schemas

### 7.1 `person` — Singleton site configuration

```typescript
defineType({
  name: 'person',
  title: 'Person',
  type: 'document',
  __experimental_actions: ['update', 'publish'],  // Singleton — no create/delete

  fields: [
    { name: 'name',          title: 'Name',                  type: 'string', required },
    { name: 'tagline',       title: 'Tagline',               type: 'string',
      description: 'e.g. "Emotional Intelligence Coach & Trainer"' },
    { name: 'positioning',   title: 'Positioning Statement',  type: 'string',
      description: 'Core one-liner' },
    { name: 'bio',           title: 'Bio',                    type: 'blockContent' },
    { name: 'photo',         title: 'Photo',                  type: 'image', hotspot: true },
    { name: 'location',      title: 'Location',               type: 'string' },
    { name: 'specialties',   title: 'Specialties',            type: 'array', of: [{ type: 'string' }] },
    { name: 'socialLinks',   title: 'Social Links',           type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'platform',  title: 'Platform', type: 'string' },
        { name: 'url',       title: 'URL',      type: 'url' },
      ]}]},
    { name: 'ctaText',       title: 'CTA Button Text',        type: 'string' },
    { name: 'ctaLink',       title: 'CTA Button Link',        type: 'string' },
  ],
})
```

### 7.2 `service` — Human OS pillars / services

```typescript
defineType({
  name: 'service',
  title: 'Service',
  type: 'document',

  fields: [
    { name: 'title',             title: 'Title',             type: 'string', required },
    { name: 'shortDescription',  title: 'Short Description',  type: 'text', rows: 3 },
    { name: 'longDescription',   title: 'Long Description',    type: 'blockContent' },
    { name: 'pillarCategory',    title: 'Pillar Category',    type: 'string',
      options: { list: [
        { title: 'Self Awareness',         value: 'self-awareness' },
        { title: 'Communication',          value: 'communication' },
        { title: 'Emotional Intelligence', value: 'emotional-intelligence' },
        { title: 'Leadership',             value: 'leadership' },
        { title: 'Growth',                 value: 'growth' },
      ]}, required },
    { name: 'icon',              title: 'Icon Name',          type: 'string' },
    { name: 'image',             title: 'Image',              type: 'image', hotspot: true },
    { name: 'order',             title: 'Order',              type: 'number' },
    { name: 'ctaText',           title: 'CTA Text',           type: 'string' },
  ],
})
```

### 7.3 `testimonial` — Social proof quotes

```typescript
defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',

  fields: [
    { name: 'name',         title: 'Name',         type: 'string', required },
    { name: 'role',         title: 'Role',         type: 'string' },
    { name: 'organization', title: 'Organization',  type: 'string' },
    { name: 'quote',        title: 'Quote',        type: 'text', rows: 5, required },
    { name: 'photo',        title: 'Photo',        type: 'image', hotspot: true },
    { name: 'source',       title: 'Source',       type: 'string',
      options: { list: [
        { title: 'Google Reviews', value: 'Google Reviews' },
        { title: 'LinkedIn',       value: 'LinkedIn' },
        { title: 'Direct',         value: 'Direct' },
      ]}},
    { name: 'featured',     title: 'Featured',     type: 'boolean', initialValue: false },
    { name: 'order',        title: 'Order',        type: 'number' },
  ],
})
```

### 7.4 `podcastEpisode` — Podcast content

```typescript
defineType({
  name: 'podcastEpisode',
  title: 'Podcast Episode',
  type: 'document',

  fields: [
    { name: 'title',         title: 'Title',          type: 'string', required },
    { name: 'slug',          title: 'Slug',           type: 'slug', options: { source: 'title' } },
    { name: 'description',   title: 'Description',     type: 'text', rows: 4 },
    { name: 'episodeNumber', title: 'Episode Number',  type: 'number' },
    { name: 'audioUrl',      title: 'Audio URL',       type: 'url' },
    { name: 'youtubeUrl',    title: 'YouTube URL',     type: 'url' },
    { name: 'coverArt',      title: 'Cover Art',       type: 'image', hotspot: true },
    { name: 'duration',      title: 'Duration (min)',   type: 'number' },
    { name: 'topics',        title: 'Topics',           type: 'array', of: [{ type: 'string' }] },
    { name: 'publishDate',   title: 'Publish Date',     type: 'datetime' },
    { name: 'isFeatured',    title: 'Featured Episode', type: 'boolean', initialValue: false },
  ],
})
```

### 7.5 `award` — Recognition items

```typescript
defineType({
  name: 'award',
  title: 'Award',
  type: 'document',

  fields: [
    { name: 'title',        title: 'Title',        type: 'string', required },
    { name: 'year',         title: 'Year',         type: 'number' },
    { name: 'organization', title: 'Organization',  type: 'string' },
    { name: 'description',  title: 'Description',   type: 'text', rows: 3 },
    { name: 'icon',         title: 'Icon Name',     type: 'string' },
    { name: 'image',        title: 'Image',        type: 'image', hotspot: true },
    { name: 'order',        title: 'Order',        type: 'number' },
  ],
})
```

### 7.6 `experience` — Timeline milestones

```typescript
defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',

  fields: [
    { name: 'title',         title: 'Title',          type: 'string', required },
    { name: 'year',          title: 'Year',           type: 'number' },
    { name: 'organization',  title: 'Organization',    type: 'string' },
    { name: 'description',   title: 'Description',     type: 'text', rows: 3 },
    { name: 'icon',          title: 'Icon Name',       type: 'string' },
    { name: 'milestoneType', title: 'Milestone Type',  type: 'string',
      options: { list: [
        { title: 'Career',    value: 'career' },
        { title: 'Award',     value: 'award' },
        { title: 'Education', value: 'education' },
      ]}},
    { name: 'image',         title: 'Image',          type: 'image', hotspot: true },
    { name: 'order',         title: 'Order',          type: 'number' },
  ],
})
```

### 7.7 `contactMessage` — Form submissions (write-only)

```typescript
defineType({
  name: 'contactMessage',
  title: 'Contact Message',
  type: 'document',
  __experimental_actions: ['create', 'read'],  // Read-only in studio

  fields: [
    { name: 'name',      title: 'Name',      type: 'string', readOnly: true },
    { name: 'email',     title: 'Email',     type: 'string', readOnly: true },
    { name: 'subject',   title: 'Subject',   type: 'string', readOnly: true },
    { name: 'message',   title: 'Message',   type: 'text',   readOnly: true },
    { name: 'createdAt', title: 'Created At', type: 'datetime', readOnly: true,
      initialValue: () => new Date().toISOString() },
  ],
})
```

### 7.8 `settings` — ★ NEW: Global site settings

```typescript
// src/sanity/schemas/settings.ts — RECOMMENDED NEW SCHEMA
defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  __experimental_actions: ['update', 'publish'],

  fields: [
    { name: 'siteTitle',        title: 'Site Title',        type: 'string' },
    { name: 'siteDescription',  title: 'Site Description',   type: 'text', rows: 2 },
    { name: 'ogImage',          title: 'Open Graph Image',   type: 'image' },
    { name: 'favicon',           title: 'Favicon',           type: 'image' },
    { name: 'navItems',          title: 'Navigation Items',  type: 'array',
      of: [{ type: 'object', fields: [
        { name: 'label', title: 'Label', type: 'string' },
        { name: 'href',  title: 'Anchor', type: 'string' },
      ]}]},
    { name: 'footerText',       title: 'Footer Text',       type: 'string' },
    { name: 'analyticsId',      title: 'Analytics ID',       type: 'string' },
  ],
})
```

### 7.9 Schema Registration

```typescript
// src/sanity/schemas/index.ts
export const schemaTypes: SchemaTypeDefinition[] = [
  personSchema,
  serviceSchema,
  testimonialSchema,
  podcastEpisodeSchema,
  awardSchema,
  experienceSchema,
  contactMessageSchema,
  settingsSchema,   // ★ Add when created
]
```

---

## 8. Deployment Configuration

### 8.1 Vercel Configuration (`vercel.json`)

```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "env": {
    "NEXT_PUBLIC_SANITY_PROJECT_ID": "@sanity_project_id",
    "NEXT_PUBLIC_SANITY_DATASET": "@sanity_dataset",
    "SANITY_API_TOKEN": "@sanity_api_token"
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" }
      ]
    },
    {
      "source": "/images/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ],
  "redirects": [
    { "source": "/old-about", "destination": "/", "permanent": true }
  ]
}
```

### 8.2 Environment Variables

```bash
# .env.local (local development)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_write_token

# Vercel (via dashboard or CLI):
# Add the above 3 as "Secret Environment Variables"
```

### 8.3 Sanity Setup

1. Create project at [sanity.io](https://sanity.io)
2. Run `npx sanity init --project <id>` to link
3. Deploy Studio: `npx sanity deploy` (hosted on `.sanity.studio`)
4. OR embed Studio at `/studio` route (already configured in `sanity.config.ts`)

### 8.4 Performance Budget

| Asset | Target | Notes |
|-------|--------|-------|
| Initial HTML (RSC) | < 100 KB | Minimal server payload |
| First Load JS | < 200 KB | Framer Motion + React + next/font |
| LCP | < 2.5s | Hero section loads first |
| CLS | 0 | No layout shift — all sizes explicit |
| Sanity CDN images | WebP, auto-format | `@sanity/image-url` with `auto=format` |

### 8.5 Build & Deploy Scripts

```json
{
  "scripts": {
    "dev": "next dev --turbo",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "sanity:deploy": "npx sanity deploy",
    "sanity:dev": "npx sanity dev",
    "typecheck": "tsc --noEmit"
  }
}
```

### 8.6 ISR & Revalidation Strategy

```typescript
// src/app/page.tsx — Incremental Static Regeneration
export const revalidate = 60  // Revalidate every 60 seconds

// For on-demand revalidation (Sanity webhook → Vercel):
// POST /api/revalidate
import { revalidatePath } from 'next/cache'
export async function POST(request: Request) {
  const secret = request.headers.get('x-sanity-secret')
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) return Response.json({ revalidated: false })
  revalidatePath('/')
  return Response.json({ revalidated: true })
}
```

---

## Implementation Roadmap

### Phase 1 — Foundation (Day 1)
1. Create `src/app/layout.tsx` with fonts, metadata, providers, Navbar + Footer
2. Create `src/app/page.tsx` composing all sections
3. Verify SSR, client components, dynamic imports work

### Phase 2 — Data Layer (Day 1-2)
4. Add `settings` schema to Sanity
5. Wire GROQ queries in `page.tsx` server component
6. Add fallback handling for each section
7. Create `api/contact/route.ts` with Zod validation

### Phase 3 — Polish (Day 2-3)
8. Refine GSAP timeline scrub feel
9. Add page transitions with `<AnimatePresence>`
10. Performance audit (Lighthouse target: 95+)
11. Responsive QA (360px → 1920px)
12. Accessibility pass (keyboard nav, screen readers, reduced motion)

---

## Risk Register

| Risk | Impact | Mitigation | Status |
|------|--------|------------|--------|
| GSAP + React re-render conflicts | High (janky timeline) | Use `gsap.context()` + `ctx.revert()` in useEffect cleanup | ✅ Mitigated |
| Sanity CDN latency on first visit | Medium (slow LCP) | ISR + `useCdn: true` + `stega` disabled; fallback content | ✅ Mitigated |
| Framer Motion bundle size | Medium (145 KB gzip) | Dynamic imports for heavy sections, tree-shaking | ✅ Monitored |
| ScrollTrigger breakage on mobile | Medium (wrong pinning) | `matchMedia()` in GSAP to disable pin on small screens | ⚠️ To implement |
| Legacy Flask app collision | Low | Flask lives at `/app` root, Next.js at `/src/app` | ✅ No collision |
| No `layout.tsx` / `page.tsx` | Critical (app won't render) | Missing entry points — must be created | ⚠️ Action required |
| GSAP sections cause CLS | Medium | Dynamic import with `ssr: false` + placeholder skeleton | ✅ Mitigated |

---

## Key Action Items (Missing Files to Create)

1. **`src/app/layout.tsx`** — Root layout with:
   - `<html lang="ta" />` (or `en`)
   - `next/font` configuration for DM Serif Display + Figtree
   - Metadata export
   - `<Providers>` wrapper
   - `<Navbar />` + `<Footer />` composition
   - Viewport meta for mobile

2. **`src/app/page.tsx`** — Home page server component:
   - Parallel Sanity data fetching
   - Compose all 7 sections

3. **`src/app/not-found.tsx`** — Custom 404

4. **`src/app/loading.tsx`** — Loading skeleton

5. **`src/app/error.tsx`** — Error boundary

6. **`src/lib/fonts.ts`** — `next/font` configuration

7. **`src/app/api/contact/route.ts`** — Contact form endpoint

8. **`src/sanity/schemas/settings.ts`** — Global settings schema

9. Remove Flask legacy files once Next.js is fully deployed:
   - `app/` directory (root)
   - `instance/` directory
   - `requirements.txt`
   - `run.py`
