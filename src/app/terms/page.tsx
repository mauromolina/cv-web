import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones | Iglesia Cristo Viviente",
  description: "Términos y condiciones de uso de la aplicación de Iglesia Cristo Viviente.",
};

const sectionStyle = { marginBottom: 24 };
const headingStyle = { fontSize: 20, fontWeight: 600 as const, marginBottom: 12 };
const textStyle = { lineHeight: 1.6, color: "var(--text-secondary)" };
const listStyle = { lineHeight: 1.8, color: "var(--text-secondary)", paddingLeft: 24, marginTop: 8 };
const subHeadingStyle = { fontSize: 16, fontWeight: 600 as const, marginTop: 16, marginBottom: 8 };

export default function TermsPage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "40px 20px", fontFamily: "system-ui, sans-serif", color: "var(--text-primary)" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24, color: "var(--brand-primary)" }}>
        Términos y Condiciones de Uso
      </h1>

      <p style={{ color: "var(--text-secondary)", marginBottom: 4, lineHeight: 1.6 }}>
        <strong>Aplicación Cristo Viviente — Iglesia Cristo Viviente</strong>
      </p>
      <p style={{ color: "var(--text-secondary)", marginBottom: 32, lineHeight: 1.6 }}>
        <strong>Última actualización:</strong> Mayo 2026
      </p>

      {/* Sección 1 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>1. Aceptación de los Términos</h2>
        <p style={textStyle}>
          Al descargar, instalar o utilizar la aplicación Cristo Viviente (&quot;la Aplicación&quot;), usted acepta estos Términos y Condiciones en su totalidad. Si no está de acuerdo con alguno de estos términos, le solicitamos que no utilice la Aplicación.
        </p>
        <p style={{ ...textStyle, marginTop: 8 }}>
          Estos términos constituyen un acuerdo legal entre usted (&quot;el Usuario&quot;) y la Iglesia Cristo Viviente (&quot;la Iglesia&quot;), con domicilio en Triunvirato 2765, Quilmes, Buenos Aires, Argentina.
        </p>
      </section>

      {/* Sección 2 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>2. Descripción del Servicio</h2>
        <p style={textStyle}>
          La Aplicación es una herramienta de comunicación y comunidad para los miembros y asistentes de la Iglesia Cristo Viviente. Ofrece las siguientes funcionalidades:
        </p>
        <ul style={listStyle}>
          <li>Devocionales diarios</li>
          <li>Información sobre eventos de la iglesia</li>
          <li>Notas personales</li>
          <li>Pedidos de oración</li>
          <li>Notificaciones push sobre actividades y novedades</li>
          <li>Perfil de usuario con foto de perfil</li>
          <li>Reproducción de contenido multimedia (sermones, videos)</li>
        </ul>
        <p style={{ ...textStyle, marginTop: 8 }}>
          La Aplicación se ofrece de forma gratuita y no incluye compras dentro de la aplicación ni publicidad.
        </p>
      </section>

      {/* Sección 3 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>3. Registro y Cuenta de Usuario</h2>

        <h3 style={subHeadingStyle}>3.1 Creación de cuenta</h3>
        <p style={textStyle}>
          Para acceder a ciertas funcionalidades, el Usuario debe crear una cuenta proporcionando información veraz y actualizada, incluyendo nombre, apellido y correo electrónico. También es posible registrarse mediante los servicios de Google o Apple.
        </p>

        <h3 style={subHeadingStyle}>3.2 Responsabilidad de la cuenta</h3>
        <p style={textStyle}>
          El Usuario es responsable de mantener la confidencialidad de sus credenciales de acceso y de todas las actividades que ocurran bajo su cuenta.
        </p>

        <h3 style={subHeadingStyle}>3.3 Eliminación de cuenta</h3>
        <p style={textStyle}>
          El Usuario puede solicitar la eliminación de su cuenta en cualquier momento desde la sección de configuración de la Aplicación. Al eliminar la cuenta:
        </p>
        <ul style={listStyle}>
          <li>Se eliminarán sus datos personales (nombre, correo electrónico)</li>
          <li>Se eliminará su foto de perfil de nuestros servidores de almacenamiento</li>
          <li>Se eliminarán sus notas personales y pedidos de oración</li>
          <li>Los datos serán anonimizados de forma irreversible</li>
        </ul>
        <p style={{ ...textStyle, marginTop: 8 }}>
          Para consultas sobre la eliminación de datos, puede contactarnos a iglesia@cristoviviente.com.
        </p>
      </section>

      {/* Sección 4 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>4. Contenido Generado por el Usuario</h2>

        <h3 style={subHeadingStyle}>4.1 Notas personales</h3>
        <p style={textStyle}>
          La Aplicación permite al Usuario crear y guardar notas personales. Este contenido es privado y solo es accesible por el Usuario que lo creó.
        </p>

        <h3 style={subHeadingStyle}>4.2 Pedidos de oración</h3>
        <p style={textStyle}>
          El Usuario puede enviar pedidos de oración a través de la Aplicación. Al enviar un pedido de oración, el Usuario acepta que este contenido pueda ser compartido con los líderes de la iglesia para su propósito pastoral.
        </p>

        <h3 style={subHeadingStyle}>4.3 Foto de perfil</h3>
        <p style={textStyle}>
          El Usuario puede subir una foto de perfil. Esta imagen se almacena en servidores de terceros (Cloudflare) y puede ser visible para otros usuarios de la Aplicación. Al eliminar la cuenta, la foto de perfil se elimina de los servidores de almacenamiento.
        </p>

        <h3 style={subHeadingStyle}>4.4 Responsabilidad del contenido</h3>
        <p style={textStyle}>
          El Usuario es responsable del contenido que genera dentro de la Aplicación. Nos reservamos el derecho de eliminar contenido que consideremos inapropiado, ofensivo o que viole estos términos.
        </p>
      </section>

      {/* Sección 5 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>5. Uso Aceptable</h2>
        <p style={textStyle}>
          El Usuario se compromete a utilizar la Aplicación de manera responsable y conforme a la ley. Queda prohibido:
        </p>
        <ul style={listStyle}>
          <li>Utilizar la Aplicación para fines ilegales o no autorizados</li>
          <li>Publicar contenido ofensivo, difamatorio, obsceno o que incite al odio</li>
          <li>Intentar acceder a cuentas de otros usuarios</li>
          <li>Interferir con el funcionamiento de la Aplicación o sus servidores</li>
          <li>Utilizar la Aplicación para enviar spam o contenido no solicitado</li>
          <li>Realizar ingeniería inversa, descompilar o desensamblar la Aplicación</li>
        </ul>
        <p style={{ ...textStyle, marginTop: 8 }}>
          El incumplimiento de estas normas puede resultar en la suspensión o eliminación de la cuenta del Usuario.
        </p>
      </section>

      {/* Sección 6 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>6. Notificaciones Push</h2>
        <p style={textStyle}>
          La Aplicación puede enviar notificaciones push relacionadas con eventos de la iglesia, devocionales y actividades. El Usuario puede desactivar estas notificaciones en cualquier momento a través de la configuración de su dispositivo.
        </p>
      </section>

      {/* Sección 7 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>7. Propiedad Intelectual</h2>
        <p style={textStyle}>
          Todo el contenido de la Aplicación, incluyendo pero no limitado a textos, imágenes, logotipos, diseño, devocionales y material multimedia, es propiedad de la Iglesia Cristo Viviente o de sus respectivos autores, y está protegido por las leyes de propiedad intelectual aplicables.
        </p>
        <p style={{ ...textStyle, marginTop: 8 }}>
          El Usuario no puede reproducir, distribuir, modificar o crear obras derivadas del contenido de la Aplicación sin autorización previa por escrito.
        </p>
      </section>

      {/* Sección 8 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>8. Privacidad y Protección de Datos</h2>
        <p style={textStyle}>
          El uso de la Aplicación está sujeto a nuestra{" "}
          <a href="/privacy" style={{ color: "var(--brand-primary)" }}>Política de Privacidad</a>,
          que describe cómo recopilamos, utilizamos y protegemos la información personal del Usuario.
        </p>
        <p style={{ ...textStyle, marginTop: 8 }}>
          Al utilizar la Aplicación, el Usuario acepta las prácticas descritas en la Política de Privacidad.
        </p>
      </section>

      {/* Sección 9 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>9. Disponibilidad del Servicio</h2>
        <p style={textStyle}>
          La Iglesia se esfuerza por mantener la Aplicación disponible de forma continua, pero no garantiza que el servicio esté libre de interrupciones, errores o que funcione de manera ininterrumpida. Nos reservamos el derecho de suspender o discontinuar el servicio, temporal o permanentemente, con o sin previo aviso.
        </p>
      </section>

      {/* Sección 10 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>10. Limitación de Responsabilidad</h2>
        <p style={textStyle}>
          La Aplicación se proporciona &quot;tal cual&quot; y &quot;según disponibilidad&quot;, sin garantías de ningún tipo, ya sean expresas o implícitas.
        </p>
        <p style={{ ...textStyle, marginTop: 8 }}>
          La Iglesia Cristo Viviente no será responsable por:
        </p>
        <ul style={listStyle}>
          <li>Daños directos, indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso de la Aplicación</li>
          <li>Pérdida de datos del Usuario</li>
          <li>Interrupciones del servicio</li>
          <li>Acciones de terceros en relación con la Aplicación</li>
        </ul>
      </section>

      {/* Sección 11 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>11. Actualizaciones de la Aplicación</h2>
        <p style={textStyle}>
          La Aplicación puede recibir actualizaciones automáticas que pueden incluir correcciones de errores, mejoras de funcionalidad o cambios en las características disponibles. Al utilizar la Aplicación, el Usuario acepta recibir estas actualizaciones.
        </p>
      </section>

      {/* Sección 12 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>12. Modificaciones a estos Términos</h2>
        <p style={textStyle}>
          Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios entrarán en vigor desde su publicación en la Aplicación o en nuestro sitio web. El uso continuado de la Aplicación después de la publicación de los cambios constituye la aceptación de los términos modificados.
        </p>
        <p style={{ ...textStyle, marginTop: 8 }}>
          Se recomienda al Usuario revisar periódicamente estos términos.
        </p>
      </section>

      {/* Sección 13 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>13. Legislación Aplicable</h2>
        <p style={textStyle}>
          Estos Términos y Condiciones se rigen por las leyes de la República Argentina. Cualquier controversia derivada de estos términos será sometida a la jurisdicción de los tribunales ordinarios de Quilmes, Provincia de Buenos Aires, Argentina.
        </p>
      </section>

      {/* Sección 14 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>14. Contacto</h2>
        <p style={textStyle}>
          Si tiene preguntas o consultas sobre estos Términos y Condiciones, puede contactarnos a través de:
        </p>
        <ul style={listStyle}>
          <li><strong>Correo electrónico:</strong> iglesia@cristoviviente.com</li>
          <li><strong>Sección de soporte</strong> dentro de la Aplicación</li>
          <li><strong>Dirección:</strong> Triunvirato 2765, Quilmes, Buenos Aires, Argentina</li>
        </ul>
      </section>
    </main>
  );
}
