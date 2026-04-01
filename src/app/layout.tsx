import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iglesia Cristo Viviente | Quilmes Oeste",
  description:
    "Iglesia Cristo Viviente - Una comunidad de fe en Quilmes Oeste. Únete a nosotros los jueves y domingos.",
  keywords:
    "iglesia, cristo viviente, quilmes, quilmes oeste, comunidad cristiana",
  icons: {
    icon: "/images/cv.png",
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
