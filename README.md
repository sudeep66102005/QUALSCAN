# Qualscan — Teleradiology & Diagnostic Reporting Website

A fast, mobile-first, single-page marketing site for **Qualscan**, a teleradiology and
medical diagnostic services group (founded 1999) that provides remote radiology reporting
to hospitals and diagnostic centers across the US, India, Africa and the Middle East.

The site has one job: convince a hospital / diagnostic-center decision-maker that Qualscan
is **fast, accurate and credible** enough to trust with their radiology reporting — and get
them to **call or email**.

## Stack

No build step, no dependencies. Pure static site:

- `index.html` — markup for all sections
- `styles.css` — design system (deep-navy "reading room" + chrome/silver + a single luminous scan-line accent)
- `script.js` — vanilla JS: scroll-reveal, animated counters, timeline progress, sticky header, mobile menu
- `assets/logo-mark.svg` — the MRI scanner emblem, recreated as a scalable SVG

Fonts (Space Grotesk + Inter) load from Google Fonts via CDN with system-font fallbacks.

## Sections

1. **Hero** — sub-60-minute turnaround claim + global reach, with call/email CTAs
2. **Trust bar** — founded year, 50+ years combined experience, 4 regions, 7 specialties
3. **Why Qualscan** — the four pillars (Vision, Expertise, Process, People)
4. **Specialties** — 7-modality grid
5. **Services** — the two-track split (time-sensitive Nighthawk vs volume-sensitive electives)
6. **How it works** — 5-step numbered flow
7. **Experience** — 1999 → 2025 timeline with scroll progress
8. **Values** — 4 values in priority order
9. **Contact / footer** — phone numbers, email, final CTA

## Run locally

It's a static site, so just open `index.html`, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

Works as-is on GitHub Pages (a `.nojekyll` file is included), Netlify, Vercel, or any static host —
just publish the repository root.

## Notes for the client

- **Email address:** the site currently uses `qualscan@gmail.com`. A branded domain email
  (e.g. `contact@qualscan.com`) reads as more credible for a diagnostic services company —
  confirm the final address and we'll swap it in `index.html`.
- All turnaround numbers and milestones come from the supplied content brief.
