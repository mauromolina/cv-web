import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Iglesia Cristo Viviente",
  description: "Términos y condiciones de uso de la aplicación de Iglesia Cristo Viviente.",
};

export default function TermsPage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "40px 20px", fontFamily: "system-ui, sans-serif", color: "var(--text-primary)" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24, color: "var(--brand-primary)" }}>
        Términos y Condiciones
      </h1>

      <p style={{ color: "var(--text-secondary)", marginBottom: 16, lineHeight: 1.6 }}>
        Última actualización: Abril 2026
      </p>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>1. Aceptación de los términos</h2>
        <p style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
          Al descargar, instalar o utilizar la aplicación de Iglesia Cristo Viviente, usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo con estos términos, le pedimos que no utilice la aplicación.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>2. Descripción del servicio</h2>
        <p style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
          La aplicación de Iglesia Cristo Viviente es una herramienta diseñada para facilitar la comunicación y participación de los miembros de la iglesia. Incluye funcionalidades como devocionales, eventos, y notificaciones.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>3. Uso aceptable</h2>
        <p style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
          Usted se compromete a utilizar la aplicación de manera responsable y conforme a la ley. No está permitido utilizar la aplicación para actividades ilegales, difundir contenido ofensivo, o interferir con el funcionamiento del servicio.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>4. Propiedad intelectual</h2>
        <p style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
          Todo el contenido de la aplicación, incluyendo textos, imágenes, logotipos y diseño, es propiedad de Iglesia Cristo Viviente y está protegido por las leyes de propiedad intelectual.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>5. Modificaciones</h2>
        <p style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
          Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán en vigencia una vez publicadas en la aplicación. El uso continuado de la aplicación constituye la aceptación de los términos modificados.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>6. Contacto</h2>
        <p style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
          Si tiene preguntas sobre estos términos, puede contactarnos a través de los canales de comunicación disponibles en la aplicación.
        </p>
      </section>
    </main>
  );
}
