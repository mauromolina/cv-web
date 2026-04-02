import { ImageResponse } from "next/og";

export const revalidate = 60;
export const alt = "Devocional - Cristo Viviente";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const API_URL =
  process.env.API_URL || "https://api.staging.cristoviviente.com/api";

type Devotional = {
  title: string;
  bibleVerses?: { reference: string }[];
};

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  let title = "Devocional";
  let verse = "";

  try {
    const res = await fetch(`${API_URL}/devotionals/${id}`);
    if (res.ok) {
      const data: Devotional = await res.json();
      title = data.title || title;
      if (data.bibleVerses?.[0]?.reference) {
        verse = data.bibleVerses[0].reference;
      }
    }
  } catch {
    /* fallback to defaults */
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #043a40 0%, #064c53 100%)",
          color: "white",
          padding: "60px 80px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontWeight: 700,
            color: "#009dad",
            textTransform: "uppercase",
            letterSpacing: "6px",
            marginBottom: 40,
          }}
        >
          Iglesia Cristo Viviente
        </div>
        <div
          style={{
            fontSize: title.length > 60 ? 40 : 52,
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.3,
            maxWidth: 900,
          }}
        >
          {title.length > 100 ? title.slice(0, 100) + "..." : title}
        </div>
        {verse && (
          <div
            style={{
              fontSize: 24,
              color: "rgba(255, 255, 255, 0.5)",
              fontStyle: "italic",
              marginTop: 32,
            }}
          >
            {verse}
          </div>
        )}
      </div>
    ),
    { ...size },
  );
}
