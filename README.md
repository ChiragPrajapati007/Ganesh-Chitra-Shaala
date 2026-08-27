# Ganesh Chitra Shaala

Premium Ganpati idol e-commerce frontend — a hand-crafted studio storefront for ordering traditional, eco-friendly, and custom Ganesh idols.

---

## Project Overview

A production-ready React frontend for Ganesh Chitra Shaala, a Ganpati idol studio. The website features:

- Intro Ganapati animation on first visit
- Full product catalog with category filtering (POP / Eco-friendly / Custom)
- Product detail pages
- Cart & wishlist (browser localStorage)
- Custom idol inquiry form
- About, Craft, and Contact pages
- Responsive mobile layout
- Dark mode support

> **Note:** This is a frontend prototype. Cart, checkout, and contact form are UI-complete but not connected to a backend. The checkout and contact sections are clearly marked as integration-ready placeholders.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 7 |
| Language | TypeScript |
| Styling | Tailwind CSS v4 + custom CSS |
| Routing | wouter (client-side SPA) |
| Animations | Framer Motion |
| Icons | Lucide React |
| Package Manager | pnpm |

---

## Local Development

### Prerequisites

- Node.js 18+
- pnpm (`npm install -g pnpm`)

### Install & Run

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/ganesh-chitra-shaala.git
cd ganesh-chitra-shaala

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Build

```bash
# Create production build
pnpm build

# Preview the production build locally
pnpm preview
```

Production output is in `dist/public/`.

---

## Environment Variables

No environment variables are required for a basic deployment.

Optional variables (copy `.env.example` to `.env.local` to configure):

```bash
cp .env.example .env.local
```

| Variable | Purpose |
|---|---|
| `VITE_ANALYTICS_ENDPOINT` | Umami analytics server URL (optional) |
| `VITE_ANALYTICS_WEBSITE_ID` | Umami analytics website ID (optional) |

---

## Deployment

### Vercel (Recommended)

1. Push this repository to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the `ganesh-chitra-shaala` repository
4. Vercel auto-detects Vite — no configuration needed
5. Click **Deploy**

The `vercel.json` in this repo configures SPA routing so all routes (`/idols`, `/product/:slug`, etc.) work correctly.

### Manual (any static host)

Upload the contents of `dist/public/` after running `pnpm build`. Configure your server to serve `index.html` for all routes (SPA fallback).

---

## Project Structure

```
ganesh-chitra-shaala/
├── client/
│   ├── index.html              # HTML entry point
│   ├── public/
│   │   └── images/             # Static images (logo, hero, products)
│   └── src/
│       ├── components/         # Shared UI components
│       │   ├── IntroAnimation.tsx
│       │   ├── SiteHeader.tsx
│       │   ├── SiteFooter.tsx
│       │   ├── Overlays.tsx    # Cart drawer, search overlay
│       │   ├── ProductCard.tsx
│       │   └── ui/             # Radix UI primitives
│       ├── contexts/
│       │   ├── StoreContext.tsx # Cart, wishlist, search state
│       │   └── ThemeContext.tsx
│       ├── hooks/              # Custom React hooks
│       ├── lib/
│       │   └── data.ts         # ← All product data & site config
│       └── pages/
│           ├── Home.tsx
│           ├── Idols.tsx       # Product catalog + filtering
│           ├── ProductDetail.tsx
│           ├── Custom.tsx      # Custom idol inquiry
│           └── UtilityPages.tsx # Cart, Checkout, Wishlist, About, Contact
├── server/
│   └── index.ts               # Minimal Express server (SPA fallback)
├── shared/
│   └── const.ts
├── vercel.json                 # Vercel SPA routing config
├── vite.config.ts
├── pnpm.yaml
└── package.json
```

---

## How to Update Product Data

All product content is in one file: [`client/src/lib/data.ts`](./client/src/lib/data.ts)

### Update site info (brand, contact, tagline)

```ts
export const siteConfig = {
  brand: "Ganesh Chitra Shaala",
  tagline: "A form of joy, shaped by hand.",
  contact: {
    phone: "+91 XXXXX XXXXX",       // ← update here
    email: "studio@example.com",    // ← update here
    address: "Your Studio Address", // ← update here
    ...
  },
  ...
};
```

### Add or update a product

```ts
export const products: Product[] = [
  {
    id: "my-new-idol",
    slug: "my-new-idol",
    name: "New Idol Name",
    price: 9900,          // in paise (₹9,900)
    size: "18 in",
    material: "POP",
    category: "POP",      // "POP" | "Eco-friendly" | "Custom"
    style: "Traditional",
    availability: "Available", // "Available" | "Made to order" | "Limited"
    image: "/images/my-product.jpg",
    secondaryImage: "/images/my-product-2.jpg",
    description: "Product description here.",
    weight: "2.5 kg",
    finish: "Matte painted",
  },
  ...
];
```

### Add product images

Place images in `client/public/images/` — they will be served at `/images/filename.jpg`.

---

## How to Update Brand / Contact Information

Edit `siteConfig` in `client/src/lib/data.ts`. All contact details, social links, and brand copy are centralized there and referenced across all pages.

---

## Future Development Workflow

```
Edit in your editor
       ↓
Test locally (pnpm dev)
       ↓
Commit changes (git commit)
       ↓
Push to GitHub (git push)
       ↓
Vercel auto-deploys
       ↓
Client sees updated live site
```

For larger changes, create a branch and open a pull request — Vercel creates a preview deployment automatically.

---

## License

MIT
