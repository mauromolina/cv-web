/* eslint-disable @next/next/no-img-element -- iconos chicos */
import type { Metadata } from "next";
import Link from "next/link";
import "@/styles/landing.css";
import Movimiento from "@/components/landing/Movimiento";
import YouTubeEstado from "@/components/landing/YouTubeEstado";
import { Chevron, Mail, Pin, WhatsApp } from "@/components/landing/Iconos";
import { IG_IGLESIA, IG_JOVENES, MAIL, MAPS, WHATSAPP, YOUTUBE_VIVOS } from "@/components/landing/datos";

const SITE_URL = "https://cristoviviente.com";

export const metadata: Metadata = {
  title: "Links | Iglesia Cristo Viviente",
  description: "La app, WhatsApp, Instagram, Jóvenes CV, YouTube y cómo llegar a Iglesia Cristo Viviente, en Quilmes Oeste.",
  alternates: { canonical: `${SITE_URL}/links` },
  openGraph: {
    title: "Iglesia Cristo Viviente",
    description: "La app, WhatsApp, Instagram, Jóvenes CV, YouTube y cómo llegar.",
    url: `${SITE_URL}/links`,
    siteName: "Iglesia Cristo Viviente",
    images: [{ url: `${SITE_URL}/images/og-default.jpg`, width: 1200, height: 800, alt: "Iglesia Cristo Viviente" }],
    type: "website",
    locale: "es_AR",
  },
};

export const viewport = { themeColor: "#D6E0E0" };

export default function Links() {
  return (
    <div className="cvl" style={{ padding: 0, minHeight: "100svh", background: "#D6E0E0" }}>
      <Movimiento />
      <main className="lkx">
        <header className="lkx-cab">
          <img src="/landing/cv-logo.png" alt="Iglesia Cristo Viviente" width={104} height={104} />
          <h1>
            Iglesia
            <br />
            Cristo Viviente<span className="pt">.</span>
          </h1>
        </header>

        <div className="lkx-dest">
          <a className="lkx-tile lkx-tile--app" href="/app">
            <span className="lkx-ic">
              <img src="/landing/app-icon.png" alt="" width={48} height={48} />
            </span>
            <span>
              <b>Bajate la app</b>
              <small>Devocional diario, eventos y reuniones</small>
            </span>
          </a>
          <a className="lkx-tile lkx-tile--wa" href={WHATSAPP}>
            <span className="lkx-ic">
              <WhatsApp />
            </span>
            <span>
              <b>WhatsApp</b>
              <small>Preguntas y pedidos de oración</small>
            </span>
          </a>
        </div>

        <nav className="lkx-lista" aria-label="Links">
          <Link className="lk-fila" href="/">
            <span className="lk-ic">
              <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            </span>
            <span><b>Sitio web</b><small>cristoviviente.com</small></span>
            <Chevron />
          </Link>
          <a className="lk-fila" href={IG_IGLESIA}>
            <span className="lk-ic lk-ic--redondo" style={{ background: "#fff" }}>
              <img src="/landing/ig-iglesia.png" alt="" width={48} height={48} />
            </span>
            <span><b>Instagram</b><small>@iglesiacristoviviente</small></span>
            <Chevron />
          </a>
          <a className="lk-fila" href={IG_JOVENES}>
            <span className="lk-ic" style={{ background: "transparent", padding: 6 }}>
              <img src="/landing/jcv-logo.png" alt="" width={36} height={36} style={{ objectFit: "contain" }} />
            </span>
            <span><b>Jóvenes CV</b><small>@jovenes_cv</small></span>
            <Chevron />
          </a>
          <a className="lk-fila" href={YOUTUBE_VIVOS}>
            <span className="lk-ic">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
            </span>
            <span><b>YouTube</b><YouTubeEstado /></span>
            <Chevron />
          </a>
          <a className="lk-fila" href={MAPS}>
            <span className="lk-ic"><Pin className="" /></span>
            <span><b>Cómo llegar</b><small>Triunvirato 2765, Quilmes Oeste</small></span>
            <Chevron />
          </a>
          <a className="lk-fila" href={`mailto:${MAIL}`}>
            <span className="lk-ic"><Mail /></span>
            <span><b>Mail</b><small>{MAIL}</small></span>
            <Chevron />
          </a>
        </nav>
      </main>
    </div>
  );
}
