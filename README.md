# ISA Connect Website

A modern, conversion-focused website for ISA Connect - an outbound call center serving U.S. real estate agents.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Content**: MDX for blog and portfolio
- **Deployment**: GitHub Pages (static export)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

Static files are generated in the `out/` directory.

## Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.js            # Homepage
│   │   ├── services/          # Services page
│   │   ├── blog/              # Blog listing + [slug]
│   │   ├── portfolio/         # Portfolio listing + [slug]
│   │   ├── contact/           # Contact page
│   │   ├── layout.js          # Root layout
│   │   ├── sitemap.js         # Dynamic sitemap
│   │   └── robots.js          # Robots.txt
│   ├── components/            # Reusable components
│   │   ├── Header.jsx         # Sticky navigation
│   │   ├── Footer.jsx         # Site footer
│   │   ├── CTAButton.jsx      # Gradient CTA button
│   │   ├── Section.jsx        # Section wrapper
│   │   ├── BookingForm.jsx    # Lead capture form
│   │   ├── BlogCard.jsx       # Blog post preview
│   │   ├── PortfolioCard.jsx  # Case study preview
│   │   └── CTABlock.jsx       # CTA section block
│   └── lib/
│       └── mdx.js             # MDX utilities
├── content/
│   ├── blog/                  # Blog posts (MDX)
│   └── portfolio/             # Case studies (MDX)
├── public/                    # Static assets
└── .github/
    └── workflows/
        └── deploy.yml         # GitHub Pages deployment
```

## Adding Content

### Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
excerpt: "Brief description for previews"
date: "2026-02-26"
author: "ISA Connect Team"
category: "Lead Conversion"
readTime: 5
---

Your content here...
```

### Case Studies

Create a new `.mdx` file in `content/portfolio/`:

```mdx
---
title: "Client Success Story"
client: "Client Name"
excerpt: "Brief description"
date: "2026-02-26"
problem: "The challenge they faced"
solution: "How ISA Connect helped"
result: "The outcome achieved"
metric: "3x"
responseTime: "< 5 min"
appointmentsBooked: "25/month"
---

Detailed case study content...
```

## Deployment to GitHub Pages

### Automatic Deployment

Push to `main` branch triggers automatic deployment via GitHub Actions.

### Manual Setup

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. Push to `main` branch

### Custom Domain

1. Add a `CNAME` file in `public/` with your domain:
   ```
   isaconnect.com
   ```

2. Configure DNS with your domain provider:
   - A record: `185.199.108.153`
   - A record: `185.199.109.153`
   - A record: `185.199.110.153`
   - A record: `185.199.111.153`

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Purple | `#6542C6` | Primary brand |
| Magenta | `#9D38A5` | Gradient middle |
| Pink | `#E02A7F` | Accent |
| Heading | `#090818` | Headlines |
| Body | `#4E4E58` | Body text |

## Contact

- **Email**: hello@isaconnect.com
- **Phone**: +1 (323) 577-7064

## License

Private - All rights reserved.
