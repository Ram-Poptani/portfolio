# Ram Poptani — Portfolio

A modern, responsive developer portfolio built with **Next.js 16**, **TypeScript**, **Tailwind CSS v4**, **Three.js**, and **Framer Motion**.

🔗 **Live:** [ram-poptani.vercel.app](https://ram-poptani.vercel.app)

![Portfolio Preview](https://ram-poptani.vercel.app/opengraph-image)

---

## ✨ Features

- **Interactive 3D Skills Sphere** — Rotating globe with tech icons using Three.js + React Three Fiber
- **Animated Typing Effect** — Dynamic role titles in the hero section
- **Dark/Light Mode** — Persistent theme with FOSC (flash of unstyled content) prevention
- **Warm Amber Design** — Custom color palette with WCAG AA contrast compliance
- **Canvas Cursor Particles** — Ambient particle effects following mouse movement
- **Contact Form** — Email delivery via Resend API
- **SEO Optimized** — JSON-LD structured data, Open Graph, dynamic OG image, sitemap, robots.txt
- **Responsive** — Mobile-first design across all breakpoints
- **Accessible** — Skip-to-content, focus-visible styles, semantic HTML, error boundaries

## 🛠️ Tech Stack

| Category | Technologies |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **3D Graphics** | Three.js, React Three Fiber, Drei |
| **Animation** | Framer Motion |
| **Email** | Resend SDK |
| **Deployment** | Vercel |

## 📁 Project Structure

```
src/
├── app/
│   ├── api/contact/       # Resend email API route
│   ├── layout.tsx          # Root layout with SEO metadata & JSON-LD
│   ├── page.tsx            # Home page (server component)
│   ├── globals.css         # Tailwind config & custom properties
│   ├── icon.tsx            # Dynamic favicon
│   ├── apple-icon.tsx      # Apple touch icon
│   ├── opengraph-image.tsx # Dynamic OG image generation
│   ├── sitemap.ts          # XML sitemap
│   ├── robots.ts           # Robots.txt
│   └── not-found.tsx       # Custom 404 page
├── components/
│   ├── Navbar.tsx          # Navigation with active section tracking
│   ├── Hero.tsx            # Hero section with typing effect
│   ├── About.tsx           # About with animated stat counters
│   ├── Skills3D.tsx        # 3D skills sphere + proficiency bars
│   ├── Skills3DLoader.tsx  # Dynamic loader with error boundary
│   ├── Experience.tsx      # Work experience timeline
│   ├── Projects.tsx        # Project showcase cards
│   ├── Education.tsx       # Education timeline
│   ├── Contact.tsx         # Contact form with status states
│   ├── Footer.tsx          # Site footer
│   ├── CursorGlow.tsx      # Canvas particle cursor effect
│   └── ScrollToTop.tsx     # Scroll-to-top button
└── lib/
    └── data.ts             # Centralized data (skills, experience, etc.)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Installation

```bash
git clone https://github.com/Ram-Poptani/portfolio.git
cd portfolio
npm install --legacy-peer-deps
```

### Environment Variables

Copy the example env file and add your keys:

```bash
cp .env.example .env.local
```

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=your_email@example.com
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## 📬 Contact

- **Email:** [ram.poptani.work@gmail.com](mailto:ram.poptani.work@gmail.com)
- **LinkedIn:** [linkedin.com/in/ram-poptani-302](https://www.linkedin.com/in/ram-poptani-302/)
- **GitHub:** [github.com/Ram-Poptani](https://github.com/Ram-Poptani)
