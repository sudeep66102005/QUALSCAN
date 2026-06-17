# QUALSCAN - Teleradiology Services Website

> "Every Interaction Counts"

A premium multi-page website for **Qualscan**, a leading medical diagnostic and teleradiology services group providing high-quality radiology reporting solutions for hospitals and diagnostic centers worldwide.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Static export (compatible with GitHub Pages, Vercel, Netlify)

## Features

- Multi-page architecture with SEO optimization
- Dark navy blue & white professional healthcare design
- Fully responsive (mobile, tablet, desktop)
- Sticky navigation with mobile hamburger menu
- Premium glassmorphism cards and modern UI
- Fast-loading with static export
- Reusable React components
- Contact form with validation

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, statistics, global presence |
| About | `/about` | Vision, expertise, timeline |
| Services | `/services` | Emergency & elective services |
| Specialties | `/specialties` | Radiology subspecialties |
| Why Qualscan | `/why-qualscan` | Key advantages |
| Our Process | `/process` | 5-step workflow |
| Values | `/values` | Core company values |
| Contact | `/contact` | Contact form & info |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── process/page.tsx
│   ├── services/page.tsx
│   ├── specialties/page.tsx
│   ├── values/page.tsx
│   ├── why-qualscan/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/
│       ├── FeatureCard.tsx
│       ├── SectionHeader.tsx
│       └── StatCard.tsx
└── public/
    └── logo-mark.svg
```

## Deployment

This project is configured for static export (`output: "export"` in `next.config.js`), making it deployable to:

- GitHub Pages
- Vercel
- Netlify
- AWS S3/CloudFront
- Any static hosting provider

## Contact

- **US:** +1 (239) 691-9529
- **India:** +91 9902944847
- **Email:** qualscan@gmail.com

---

&copy; 2025 Qualscan. All rights reserved.
