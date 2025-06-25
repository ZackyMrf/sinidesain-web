# 🎨 SiniDesain - Landing Page

Sebuah landing page profesional untuk jasa desain grafis **SiniDesain** yang dibangun dengan Next.js, TypeScript, dan Tailwind CSS.

![SiniDesain Preview](https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=SiniDesain+Landing+Page)

## ✨ Fitur Utama

- 🎯 **Responsive Design** - Optimized untuk mobile, tablet, dan desktop
- ⚡ **Fast Loading** - Built with Next.js untuk performa optimal
- 🎭 **Smooth Animations** - Menggunakan Framer Motion
- 📱 **Mobile-First** - Navbar toggle responsif
- 🎨 **Modern UI** - Clean design dengan Tailwind CSS
- 🖼️ **Image Optimization** - Next.js Image component
- 💼 **Professional Sections**:
  - Hero dengan gradient text
  - About dengan feature highlights
  - Services showcase
  - Portfolio gallery
  - Customer testimonials
  - Pricing plans
  - Contact footer

## 🚀 Tech Stack

- **Framework**: Next.js 15.3.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Turbopack
- **Package Manager**: NPM

## 📦 Instalasi

1. Clone repository
```bash
git clone https://github.com/your-username/sinidesain-web.git
cd sinidesain-web
```

2. Install dependencies
```bash
npm install
```

3. Jalankan development server
```bash
npm run dev
```

4. Buka [http://localhost:3000/LandingPage](http://localhost:3000/LandingPage)

## 🏗️ Scripts Available

```bash
npm run dev          # Jalankan development server
npm run build        # Build untuk production
npm run start        # Jalankan production server
npm run lint         # Run ESLint
```

## 📁 Struktur Project

```
sinidesain-web/
├── public/
│   ├── sinifixxx.png      # Logo utama
│   ├── siniputih.png      # Logo putih untuk dark background
│   └── ...
├── src/
│   ├── components/
│   │   ├── ui/            # Reusable UI components
│   │   └── Logo.tsx       # Logo component
│   ├── lib/
│   │   └── utils.ts       # Utility functions
│   ├── pages/
│   │   └── LandingPage.tsx # Main landing page
│   └── styles/
│       └── globals.css    # Global styles
└── ...
```

## 🎨 Customization

### Logo
Ganti file logo di folder `public/`:
- `sinifixxx.png` - Logo utama
- `siniputih.png` - Logo untuk background gelap

### Kontak
Update nomor WhatsApp di file `LandingPage.tsx`:
```typescript
// Ganti nomor ini dengan nomor WA Anda
href="https://wa.me/628813701497"
```

### Warna Brand
Sesuaikan warna di `tailwind.config.js` atau langsung di components.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push ke GitHub
2. Connect repository di [Vercel](https://vercel.com)
3. Deploy otomatis

### Netlify
1. Build project: `npm run build`
2. Upload folder `out/` ke Netlify

### Manual
```bash
npm run build
npm run start
```

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

Dibuat untuk **SiniDesain** - Jasa desain grafis profesional untuk UMKM, kreator, dan bisnis online.

---

⭐ **Star this repo** jika bermanfaat!

📞 **Butuh jasa desain?** Hubungi [SiniDesain via WhatsApp](https://wa.me/628813701497)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
