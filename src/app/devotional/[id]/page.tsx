import type { Metadata } from "next";

const API_URL = process.env.API_URL || "https://api.staging.cristoviviente.com/api";
const SITE_URL = "https://cristoviviente.com";

type Devotional = {
  id: string;
  title: string;
  content: string;
  coverImage: string | null;
  bibleVerses: { reference: string; text: string }[];
  bulletin?: {
    coverImage: string | null;
  };
};

async function getDevotional(id: string): Promise<Devotional | null> {
  try {
    const res = await fetch(`${API_URL}/devotionals/${id}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

function stripHtml(html: string): string {
  return html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + "...";
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const devotional = await getDevotional(id);

  const ogTitle = devotional?.title || "Devocional - Cristo Viviente";
  const ogDescription = devotional
    ? truncate(stripHtml(devotional.content), 160)
    : "Lee este devocional de Iglesia Cristo Viviente";
  return {
    title: ogTitle,
    description: ogDescription,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: `${SITE_URL}/devotional/${id}`,
      siteName: "Iglesia Cristo Viviente",
      type: "article",
      locale: "es_AR",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
    },
  };
}

export default async function DevotionalPage({ params }: Props) {
  const { id } = await params;
  const devotional = await getDevotional(id);

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
        fontFamily: "var(--font-body)",
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
        {devotional?.title || "Devocional"}
      </h1>
      {devotional && (
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.8)",
            maxWidth: 500,
            lineHeight: 1.7,
            marginBottom: 12,
          }}
        >
          {truncate(stripHtml(devotional.content), 200)}
        </p>
      )}
      {devotional?.bibleVerses?.[0] && (
        <p
          style={{
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.5)",
            fontStyle: "italic",
            marginBottom: 32,
          }}
        >
          {devotional.bibleVerses[0].reference}
        </p>
      )}
      <p
        style={{
          fontSize: "1rem",
          color: "rgba(255,255,255,0.6)",
          marginBottom: 32,
        }}
      >
        Abrí este devocional en la app de Cristo Viviente
      </p>
      <a
        href={`cristoviviente://devotional/${id}`}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "16px 32px",
          background: "#009dad",
          color: "white",
          borderRadius: 100,
          fontWeight: 600,
          fontSize: "1rem",
          textDecoration: "none",
          marginBottom: 16,
        }}
      >
        Abrir en la app
      </a>
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
