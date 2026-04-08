import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://cristoviviente.com";

export const metadata: Metadata = {
  title: "Iglesia Cristo Viviente | Quilmes Oeste",
  description:
    "Iglesia Cristo Viviente - Una comunidad de fe en Quilmes Oeste. Únete a nosotros los jueves y domingos.",
  keywords:
    "iglesia, cristo viviente, quilmes, quilmes oeste, comunidad cristiana",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Iglesia Cristo Viviente",
    description:
      "Una comunidad de fe en Quilmes Oeste. Únete a nosotros los jueves y domingos.",
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
      "Una comunidad de fe en Quilmes Oeste. Únete a nosotros los jueves y domingos.",
    images: [`${SITE_URL}/images/og-default.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
