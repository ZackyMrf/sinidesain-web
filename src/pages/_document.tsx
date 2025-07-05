import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="id">
      <Head>
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/siniputih.png" />
        <link rel="apple-touch-icon" href="/siniputih.png" />
        <link rel="shortcut icon" href="/siniputih.png" />
        
        {/* Meta tags */}
        <meta name="description" content="SiniDesain - Jasa Desain Grafis Profesional. Poster, Banner, Menu, PPT, dan berbagai kebutuhan desain bisnis Anda dengan harga terjangkau." />
        <meta name="keywords" content="jasa desain grafis, poster, banner, menu, ppt, desain murah, SiniDesain" />
        <meta name="author" content="SiniDesain" />
        <meta name="theme-color" content="#ea580c" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SiniDesain | Desain Murah" />
        <meta property="og:description" content="Jasa desain grafis profesional dengan harga terjangkau. Poster, Banner, Menu, PPT, dan berbagai kebutuhan desain bisnis Anda." />
        <meta property="og:image" content="/siniputih.png" />
        <meta property="og:url" content="https://sinidesain.vercel.app" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="SiniDesain | Desain Murah" />
        <meta property="twitter:description" content="Jasa design grafis profesional dengan harga terjangkau. Poster, Banner, Menu, PPT, dan berbagai kebutuhan desain bisnis Anda." />
        <meta property="twitter:image" content="/siniputih.png" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
