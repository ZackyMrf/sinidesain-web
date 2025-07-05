import Head from 'next/head';
import LandingPageNew from './LandingPageNew';

export default function Home() {
  return (
    <>
      <Head>
        <title>SiniDesain | Desain Murah</title>
        <meta name="description" content="Jasa desain grafis profesional dengan harga terjangkau. Poster promosi mulai 20K, Banner, Menu restoran, PPT, dan berbagai kebutuhan desain bisnis Anda." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <LandingPageNew />
    </>
  );
}