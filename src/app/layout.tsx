import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Inter para el texto e Inter Display para los titulares (Design System Cristo Viviente).
const inter = localFont({
  src: [
    { path: "./fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Inter-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const interDisplay = localFont({
  src: [
    { path: "./fonts/InterDisplay-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/InterDisplay-ExtraBold.woff2", weight: "800", style: "normal" },
    { path: "./fonts/InterDisplay-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-inter-display",
  display: "swap",
});

const SITE_URL = "https://cristoviviente.com";

export const metadata: Metadata = {
  title: "Iglesia Cristo Viviente | Quilmes Oeste",
  description:
    "Iglesia Cristo Viviente - Una comunidad de fe en Quilmes Oeste. Te esperamos los jueves y domingos.",
  keywords:
    "iglesia, cristo viviente, quilmes, quilmes oeste, comunidad cristiana",
  // Favicon: el logo de la iglesia (public/favicon/). favicon.ico queda en la raíz porque los navegadores lo piden ahí.
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/favicon/favicon-apple-180.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    title: "Iglesia Cristo Viviente",
    description:
      "Una comunidad de fe en Quilmes Oeste. Te esperamos los jueves y domingos.",
    url: SITE_URL,
    siteName: "Iglesia Cristo Viviente",
    images: [
      {
        url: `${SITE_URL}/images/og-default.jpg`,
        width: 1200,
        height: 800,
        alt: "Iglesia Cristo Viviente",
      },
    ],
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iglesia Cristo Viviente",
    description:
      "Una comunidad de fe en Quilmes Oeste. Te esperamos los jueves y domingos.",
    images: [`${SITE_URL}/images/og-default.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${interDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
