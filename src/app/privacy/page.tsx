import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Iglesia Cristo Viviente",
  description: "Política de privacidad de la aplicación de Iglesia Cristo Viviente.",
};

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "40px 20px", fontFamily: "system-ui, sans-serif", color: "var(--text-primary)" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24, color: "var(--brand-primary)" }}>
        Política de Privacidad
      </h1>

      <p style={{ color: "var(--text-secondary)", marginBottom: 16, lineHeight: 1.6 }}>
        Última actualización: Abril 2026
      </p>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>1. Información que recopilamos</h2>
        <p style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
          La aplicación de Iglesia Cristo Viviente puede recopilar información personal como nombre, correo electrónico y datos de perfil que usted proporcione voluntariamente al registrarse o utilizar el servicio.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>2. Uso de la información</h2>
        <p style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
          La información recopilada se utiliza para proporcionar y mejorar nuestros servicios, enviar notificaciones relevantes, y facilitar la comunicación dentro de la comunidad de la iglesia.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>3. Protección de datos</h2>
        <p style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
          Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>4. Compartir información</h2>
        <p style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
          No vendemos, comercializamos ni transferimos su información personal a terceros. La información puede ser compartida únicamente con proveedores de servicios que nos ayudan a operar la aplicación, siempre bajo estrictas obligaciones de confidencialidad.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>5. Notificaciones push</h2>
        <p style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
          La aplicación puede enviar notificaciones push para informarle sobre eventos, devocionales y otras actividades de la iglesia. Puede desactivar estas notificaciones en cualquier momento desde la configuración de su dispositivo.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>6. Sus derechos</h2>
        <p style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
          Usted tiene derecho a acceder, rectificar o eliminar su información personal en cualquier momento. Para ejercer estos derechos, puede contactarnos a través de los canales de comunicación disponibles en la aplicación.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>7. Cambios en esta política</h2>
        <p style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
          Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Le notificaremos sobre cambios significativos a través de la aplicación.
        </p>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>8. Contacto</h2>
        <p style={{ lineHeight: 1.6, color: "var(--text-secondary)" }}>
          Si tiene preguntas sobre esta política de privacidad, puede contactarnos a través de los canales de comunicación disponibles en la aplicación.
        </p>
      </section>
    </main>
  );
}
