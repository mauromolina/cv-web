import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{
    title?: string;
    description?: string;
    image?: string;
  }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const { id } = await params;
  const { title, description, image } = await searchParams;

  const ogTitle = title || "Devocional - Cristo Viviente";
  const ogDescription =
    description || "Lee este devocional de Iglesia Cristo Viviente";
  const ogImage = image || "https://cristoviviente.com/images/og-default.jpg";

  return {
    title: ogTitle,
    description: ogDescription,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: `https://cristoviviente.com/devocional/${id}`,
      siteName: "Iglesia Cristo Viviente",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
      type: "article",
      locale: "es_AR",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
  };
}

export default async function DevocionalPage({ params, searchParams }: Props) {
  const { id } = await params;
  const { title, description } = await searchParams;

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
        {title || "Devocional"}
      </h1>
      {description && (
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.8)",
            maxWidth: 500,
            lineHeight: 1.7,
            marginBottom: 32,
          }}
        >
          {description}
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
        href={`cristoviviente://devocional/${id}`}
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
