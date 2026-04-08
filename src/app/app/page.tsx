import type { Metadata } from "next";

const SITE_URL = "https://cristoviviente.com";

export const metadata: Metadata = {
  title: "Descargá la App | Iglesia Cristo Viviente",
  description:
    "Descargá la app de Iglesia Cristo Viviente y accedé a devocionales, eventos, pedidos de oración y mucho más.",
  openGraph: {
    title: "Iglesia Cristo Viviente",
    description:
      "Descargá la app y accedé a devocionales, eventos, pedidos de oración y mucho más.",
    url: `${SITE_URL}/app`,
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
      "Descargá la app y accedé a devocionales, eventos, pedidos de oración y mucho más.",
    images: [`${SITE_URL}/images/og-default.jpg`],
  },
};

export default function AppPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 24px",
        background: "linear-gradient(135deg, #043a40, #064c53)",
        color: "white",
        textAlign: "center",
      }}
    >
      <img
        src="/images/cv.png"
        alt="Cristo Viviente"
        style={{ width: 80, height: 80, marginBottom: 24 }}
      />
      <h1
        style={{
          fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
          fontWeight: 700,
          marginBottom: 16,
          maxWidth: 600,
        }}
      >
        Iglesia Cristo Viviente
      </h1>
      <p
        style={{
          fontSize: "1.1rem",
          color: "rgba(255,255,255,0.8)",
          maxWidth: 500,
          lineHeight: 1.7,
          marginBottom: 32,
        }}
      >
        Accedé a devocionales, eventos, pedidos de oración y mucho más desde tu
        celular.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          marginBottom: 32,
        }}
      >
        {/* TODO: Reemplazar href con el link real de App Store */}
        <a
          href="#"
          aria-disabled="true"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "14px 28px",
            background: "rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.5)",
            borderRadius: 12,
            fontWeight: 600,
            fontSize: "1rem",
            textDecoration: "none",
            pointerEvents: "none",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          <span>
            <small style={{ display: "block", fontSize: "0.75rem" }}>
              Próximamente en
            </small>
            App Store
          </span>
        </a>

        {/* TODO: Reemplazar href con el link real de Google Play */}
        <a
          href="#"
          aria-disabled="true"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "14px 28px",
            background: "rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.5)",
            borderRadius: 12,
            fontWeight: 600,
            fontSize: "1rem",
            textDecoration: "none",
            pointerEvents: "none",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
          </svg>
          <span>
            <small style={{ display: "block", fontSize: "0.75rem" }}>
              Próximamente en
            </small>
            Google Play
          </span>
        </a>
      </div>

      <a
        href="/"
        style={{
          color: "rgba(255,255,255,0.6)",
          fontSize: "0.9rem",
          textDecoration: "underline",
        }}
      >
        Ir al sitio web
      </a>
    </div>
  );
}
