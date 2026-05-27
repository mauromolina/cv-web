import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const SITE_URL = "https://cristoviviente.com";

// ── Config ──────────────────────────────────────────────────────────
// Cambiar a true cuando las apps estén publicadas en las stores.
const APPS_PUBLISHED = false;

const STORE_URLS = {
  ios: "https://apps.apple.com/app/id6759294735",
  // TODO: reemplazar con el package ID real de Google Play
  android: "https://play.google.com/store/apps/details?id=com.cristoviviente.app",
};
// ────────────────────────────────────────────────────────────────────

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

function detectPlatform(ua: string): "ios" | "android" | "desktop" {
  const lower = ua.toLowerCase();
  if (/iphone|ipad|ipod/.test(lower)) return "ios";
  if (/android/.test(lower)) return "android";
  return "desktop";
}

export default async function AppPage() {
  // Cuando las apps están publicadas, redirigir dispositivos móviles
  if (APPS_PUBLISHED) {
    const headersList = await headers();
    const ua = headersList.get("user-agent") ?? "";
    const platform = detectPlatform(ua);

    if (platform === "ios") redirect(STORE_URLS.ios);
    if (platform === "android") redirect(STORE_URLS.android);

    // Desktop: mostrar landing con ambos badges activos
    return <PublishedLanding />;
  }

  // Apps no publicadas: mostrar landing "próximamente"
  return <ComingSoonLanding />;
}

// ── Landing cuando las apps están publicadas (desktop) ──────────────

function PublishedLanding() {
  return (
    <div style={styles.page}>
      <img
        src="/images/cv.png"
        alt="Cristo Viviente"
        style={styles.logo}
      />
      <h1 style={styles.title}>Iglesia Cristo Viviente</h1>
      <p style={styles.subtitle}>
        Accedé a devocionales, eventos, pedidos de oración y mucho más desde tu
        celular.
      </p>

      <div style={styles.badges}>
        <a href={STORE_URLS.ios} style={styles.badgeActive}>
          <AppleIcon />
          <span>
            <small style={styles.badgeSmall}>Descargar en</small>
            App Store
          </span>
        </a>

        <a href={STORE_URLS.android} style={styles.badgeActive}>
          <PlayStoreIcon />
          <span>
            <small style={styles.badgeSmall}>Descargar en</small>
            Google Play
          </span>
        </a>
      </div>

      <a href="/" style={styles.backLink}>
        Ir al sitio web
      </a>
    </div>
  );
}

// ── Landing "próximamente" ──────────────────────────────────────────

function ComingSoonLanding() {
  return (
    <div style={styles.page}>
      <img
        src="/images/cv.png"
        alt="Cristo Viviente"
        style={styles.logo}
      />
      <h1 style={styles.title}>Iglesia Cristo Viviente</h1>
      <p style={styles.subtitle}>
        Accedé a devocionales, eventos, pedidos de oración y mucho más desde tu
        celular.
      </p>

      <div style={styles.comingSoonBadge}>
        <span style={styles.dot} />
        Próximamente disponible
      </div>

      <div style={styles.badges}>
        <div style={styles.badgeDisabled} aria-disabled="true">
          <AppleIcon />
          <span>
            <small style={styles.badgeSmall}>Próximamente en</small>
            App Store
          </span>
        </div>

        <div style={styles.badgeDisabled} aria-disabled="true">
          <PlayStoreIcon />
          <span>
            <small style={styles.badgeSmall}>Próximamente en</small>
            Google Play
          </span>
        </div>
      </div>

      <a href="/" style={styles.backLink}>
        Ir al sitio web
      </a>
    </div>
  );
}

// ── Icons ───────────────────────────────────────────────────────────

function AppleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayStoreIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z" />
    </svg>
  );
}

// ── Styles ───────────────────────────────────────────────────────────

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 24px",
    background: "linear-gradient(135deg, #043a40, #064c53)",
    color: "white",
    textAlign: "center",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 24,
  },
  title: {
    fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
    fontWeight: 700,
    marginBottom: 16,
    maxWidth: 600,
  },
  subtitle: {
    fontSize: "1.1rem",
    color: "rgba(255,255,255,0.8)",
    maxWidth: 500,
    lineHeight: 1.7,
    marginBottom: 32,
  },
  comingSoonBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "10px 24px",
    background: "rgba(255,255,255,0.1)",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: 100,
    fontSize: "0.95rem",
    fontWeight: 500,
    marginBottom: 32,
    backdropFilter: "blur(10px)",
  },
  dot: {
    width: 8,
    height: 8,
    background: "#009dad",
    borderRadius: "50%",
    display: "inline-block",
  },
  badges: {
    display: "flex",
    flexDirection: "column" as const,
    gap: 12,
    marginBottom: 32,
  },
  badgeActive: {
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 28px",
    background: "rgba(255,255,255,0.15)",
    color: "white",
    borderRadius: 12,
    fontWeight: 600,
    fontSize: "1rem",
    textDecoration: "none",
    border: "1px solid rgba(255,255,255,0.25)",
    transition: "background 0.2s ease",
  },
  badgeDisabled: {
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    padding: "14px 28px",
    background: "rgba(255,255,255,0.1)",
    color: "rgba(255,255,255,0.5)",
    borderRadius: 12,
    fontWeight: 600,
    fontSize: "1rem",
    border: "1px solid rgba(255,255,255,0.15)",
    cursor: "default",
  },
  badgeSmall: {
    display: "block",
    fontSize: "0.75rem",
  },
  backLink: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "0.9rem",
    textDecoration: "underline",
  },
};
