# Ev1lofDestruKtion® 2.0 — Landing Page

Cinematic hero + pricing section for Ev1lofDestruKtion®, built with React, Vite, TypeScript, Tailwind CSS, and shadcn/ui conventions.

## Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3 (CSS-variable theme, shadcn/ui token set)
- `class-variance-authority` + `tailwind-merge` for the button component (shadcn pattern — no Radix needed for this build)

## Setup

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check + production build → dist/
npm run preview   # preview the production build locally
```

## Structure

```
src/
├── components/
│   ├── ui/button.tsx   # variants: default, glass · sizes: default, nav, hero, card
│   ├── Navbar.tsx       # floats over the hero video
│   ├── Hero.tsx         # fullscreen video + nav + centered copy + specs strip
│   └── Services.tsx    # Vanguard / Centurion / Apex pricing cards
├── lib/utils.ts        # cn() helper
├── index.css           # theme tokens, .liquid-glass, fade-rise keyframes
├── App.tsx
└── main.tsx
```

## A few calls I made

The brief was precise about almost everything. Here's what wasn't specified and how I filled it in, so you can redirect anything that isn't what you had in mind:

- **"Begin Journey" destination** — only the WhatsApp CTA had an explicit link in the brief. Both "Begin Journey" buttons (nav + hero) smooth-scroll to Services instead, and each pricing card got its own "Choose [Tier]" button that opens WhatsApp with a tier-specific pre-filled message. If you'd rather every CTA go straight to WhatsApp, that's a one-line change in `Hero.tsx` / `Navbar.tsx`.
- **WhatsApp message** — used the pre-filled version by default since it was listed as an option and qualifies the lead better.
- **Nav links** — Studio → scrolls to Services (the only other section in this build); About/Journal → `#` placeholders, since those pages weren't part of this brief; Reach Us → `mailto:` to your listed email.
- **`pt-32 pb-40 py-[90px]`** on the hero content wrapper — kept all three exactly as specified, but heads up: Tailwind generates `pt-*`/`pb-*` after `py-*`, so `pt-32`/`pb-40` win and `py-[90px]` ends up doing nothing. If 90px top/bottom was the actual intent, drop `pt-32 pb-40` or swap `py-[90px]` for `pt-[90px] pb-[90px]`.
- **Color tokens** — your 10 CSS variables are used exactly as given. I added the extra shadcn tokens it doesn't define (`--card`, `--ring`, `--destructive`, etc.) with dark-theme-consistent values so things won't break if you add more shadcn components later.

## Brand details in use

- Video: your CloudFront URL, autoplaying full-bleed behind everything, no overlay (per the "no gradients/overlays" rule)
- WhatsApp: +91 93290 13989
- Email: agrawalkrishna9999@gmail.com

Fonts load via `<link>` tags in `index.html` (faster than a CSS `@import`). The `.liquid-glass` effect, `fade-rise` timings, and all color values are implemented byte-for-byte from the spec.

I wasn't able to run `npm install` / a real build in this sandbox (no network access here), so give `npm run build` a run locally before you ship it — everything follows standard, well-worn patterns, but I'd rather you catch anything before I would.
