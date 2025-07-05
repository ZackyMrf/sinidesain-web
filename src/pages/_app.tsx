import "@/styles/globals.css";
import type { AppProps } from "next/app";

// Force redeploy - July 5, 2025
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
