import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad | Iglesia Cristo Viviente",
  description: "Política de privacidad de la aplicación de Iglesia Cristo Viviente.",
};

const sectionStyle = { marginBottom: 24 };
const headingStyle = { fontSize: 20, fontWeight: 600 as const, marginBottom: 12 };
const textStyle = { lineHeight: 1.6, color: "var(--text-secondary)" };
const listStyle = { lineHeight: 1.8, color: "var(--text-secondary)", paddingLeft: 24, marginTop: 8 };
const subHeadingStyle = { fontSize: 16, fontWeight: 600 as const, marginTop: 16, marginBottom: 8 };

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "40px 20px", fontFamily: "system-ui, sans-serif", color: "var(--text-primary)" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24, color: "var(--brand-primary)" }}>
        Política de Privacidad — Cristo Viviente
      </h1>

      <p style={{ color: "var(--text-secondary)", marginBottom: 16, lineHeight: 1.6 }}>
        <strong>Última actualización:</strong> Mayo 2026
      </p>

      <p style={{ ...textStyle, marginBottom: 24 }}>
        Iglesia Cristo Viviente (&quot;nosotros&quot;, &quot;nuestro&quot;) opera la aplicación móvil <strong>Cristo Viviente</strong> (la &quot;App&quot;) disponible para dispositivos iOS y Android. Esta Política de Privacidad describe qué información recopilamos, cómo la usamos, con quién la compartimos y los derechos que tenés sobre tus datos.
      </p>

      <p style={{ ...textStyle, marginBottom: 32 }}>
        Al utilizar la App, aceptás las prácticas descritas en esta política. Si no estás de acuerdo, por favor no utilices la App.
      </p>

      {/* Sección 1 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>1. Información que recopilamos</h2>

        <h3 style={subHeadingStyle}>1.1 Información que proporcionás voluntariamente</h3>
        <ul style={listStyle}>
          <li><strong>Datos de registro:</strong> nombre, apellido, correo electrónico y contraseña.</li>
          <li><strong>Datos de perfil (opcionales):</strong> número de teléfono, fecha de nacimiento, apodo y foto de perfil.</li>
          <li><strong>Contenido generado:</strong> notas personales, pedidos de oración y reportes de soporte.</li>
          <li><strong>Preferencias:</strong> configuración de notificaciones, horarios de recordatorios, tamaño de fuente e idioma.</li>
        </ul>

        <h3 style={subHeadingStyle}>1.2 Información de autenticación de terceros</h3>
        <p style={textStyle}>
          Si elegís iniciar sesión con <strong>Apple</strong> o <strong>Google</strong>, recibimos tu nombre y correo electrónico según lo que autorices en el proceso de inicio de sesión. No accedemos a tu contraseña de Apple ni de Google.
        </p>

        <h3 style={subHeadingStyle}>1.3 Información recopilada automáticamente</h3>
        <ul style={listStyle}>
          <li><strong>Datos del dispositivo:</strong> modelo, sistema operativo, versión de la App e identificador de notificaciones push.</li>
          <li><strong>Datos de uso:</strong> visualizaciones de devocionales, eventos y anuncios; historial de lectura; logros y rachas de actividad.</li>
          <li><strong>Datos de errores y rendimiento:</strong> informes de fallos, trazas de rendimiento y reproducciones de sesión anonimizadas, recopilados mediante Sentry (ver Sección 4).</li>
        </ul>

        <h3 style={subHeadingStyle}>1.4 Información que NO recopilamos</h3>
        <ul style={listStyle}>
          <li>No recopilamos datos de ubicación.</li>
          <li>No recopilamos datos financieros ni de pago. La App es completamente gratuita.</li>
          <li>No recopilamos datos de contactos del dispositivo.</li>
          <li>No recopilamos datos de salud ni biométricos.</li>
        </ul>
      </section>

      {/* Sección 2 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>2. Cómo usamos la información</h2>
        <p style={textStyle}>Utilizamos la información recopilada para:</p>
        <ul style={listStyle}>
          <li>Crear y administrar tu cuenta.</li>
          <li>Personalizar tu experiencia en la App (devocionales, eventos, reuniones).</li>
          <li>Enviar notificaciones push sobre devocionales, eventos, anuncios y reuniones (según tus preferencias).</li>
          <li>Guardar tus notas personales, devocionales guardados y palabras proféticas destacadas.</li>
          <li>Procesar tus pedidos de oración y reportes de soporte.</li>
          <li>Detectar y corregir errores técnicos y mejorar el rendimiento de la App.</li>
          <li>Mantener la seguridad de la plataforma.</li>
        </ul>
      </section>

      {/* Sección 3 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>3. Base legal para el tratamiento de datos</h2>
        <p style={textStyle}>Procesamos tus datos en base a:</p>
        <ul style={listStyle}>
          <li><strong>Tu consentimiento</strong>, otorgado al registrarte y usar la App.</li>
          <li><strong>Ejecución del servicio</strong>, para proporcionarte las funcionalidades de la App.</li>
          <li><strong>Interés legítimo</strong>, para mejorar la seguridad y el rendimiento de la App.</li>
        </ul>
      </section>

      {/* Sección 4 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>4. Servicios de terceros</h2>
        <p style={{ ...textStyle, marginBottom: 16 }}>
          La App utiliza los siguientes servicios de terceros que pueden procesar datos según sus propias políticas de privacidad:
        </p>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, lineHeight: 1.6 }}>
            <thead>
              <tr style={{ borderBottom: "2px solid var(--text-secondary)", textAlign: "left" }}>
                <th style={{ padding: "8px 12px" }}>Servicio</th>
                <th style={{ padding: "8px 12px" }}>Propósito</th>
                <th style={{ padding: "8px 12px" }}>Datos procesados</th>
              </tr>
            </thead>
            <tbody style={{ color: "var(--text-secondary)" }}>
              <tr style={{ borderBottom: "1px solid var(--text-secondary)", opacity: 0.7 }}>
                <td style={{ padding: "8px 12px" }}><a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer"><strong>Sentry</strong></a></td>
                <td style={{ padding: "8px 12px" }}>Monitoreo de errores y rendimiento</td>
                <td style={{ padding: "8px 12px" }}>Datos de fallos, trazas de rendimiento, reproducciones de sesión anonimizadas</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--text-secondary)", opacity: 0.7 }}>
                <td style={{ padding: "8px 12px" }}><a href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer"><strong>Expo</strong></a></td>
                <td style={{ padding: "8px 12px" }}>Notificaciones push y actualizaciones de la App</td>
                <td style={{ padding: "8px 12px" }}>Token de notificación del dispositivo</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--text-secondary)", opacity: 0.7 }}>
                <td style={{ padding: "8px 12px" }}><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer"><strong>Firebase Cloud Messaging</strong></a></td>
                <td style={{ padding: "8px 12px" }}>Entrega de notificaciones push</td>
                <td style={{ padding: "8px 12px" }}>Token de notificación del dispositivo</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--text-secondary)", opacity: 0.7 }}>
                <td style={{ padding: "8px 12px" }}><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer"><strong>Apple Sign-In</strong></a></td>
                <td style={{ padding: "8px 12px" }}>Autenticación</td>
                <td style={{ padding: "8px 12px" }}>Nombre y correo electrónico (según lo autorizado por el usuario)</td>
              </tr>
              <tr style={{ borderBottom: "1px solid var(--text-secondary)", opacity: 0.7 }}>
                <td style={{ padding: "8px 12px" }}><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"><strong>Google Sign-In</strong></a></td>
                <td style={{ padding: "8px 12px" }}>Autenticación</td>
                <td style={{ padding: "8px 12px" }}>Nombre y correo electrónico</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ ...textStyle, marginTop: 16 }}>
          No vendemos, alquilamos ni comercializamos tu información personal a terceros. Solo compartimos datos con los proveedores listados arriba, exclusivamente para los fines descritos y bajo obligaciones de confidencialidad.
        </p>
      </section>

      {/* Sección 5 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>5. Notificaciones push</h2>
        <p style={textStyle}>
          Podés recibir notificaciones sobre devocionales, eventos, anuncios y reuniones en vivo. Las notificaciones son configurables de forma individual:
        </p>
        <ul style={listStyle}>
          <li>Podés activar o desactivar cada tipo de notificación desde la configuración de la App.</li>
          <li>Podés establecer horarios específicos para recordatorios.</li>
          <li>Podés desactivar todas las notificaciones desde la configuración de tu dispositivo en cualquier momento.</li>
        </ul>
        <p style={{ ...textStyle, marginTop: 8 }}>
          Para enviar notificaciones utilizamos un token de dispositivo anónimo. Este token no está vinculado a tu identidad personal fuera de la App.
        </p>
      </section>

      {/* Sección 6 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>6. Almacenamiento y seguridad de datos</h2>
        <ul style={listStyle}>
          <li>Tu información se almacena en servidores seguros con acceso restringido.</li>
          <li>Las comunicaciones entre la App y nuestros servidores se realizan mediante HTTPS (cifrado en tránsito).</li>
          <li>Los tokens de autenticación se almacenan localmente en tu dispositivo.</li>
          <li>Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra acceso no autorizado, alteración o destrucción.</li>
        </ul>
        <p style={{ ...textStyle, marginTop: 8 }}>
          Ningún método de transmisión o almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por proteger tu información, no podemos garantizar seguridad absoluta.
        </p>
      </section>

      {/* Sección 7 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>7. Retención de datos</h2>
        <ul style={listStyle}>
          <li>Conservamos tus datos personales mientras tu cuenta esté activa.</li>
          <li>Si eliminás tu cuenta, tus datos personales serán eliminados de nuestros servidores dentro de los 30 días posteriores a la solicitud.</li>
          <li>Los datos anonimizados de uso y rendimiento pueden conservarse con fines estadísticos.</li>
          <li>Los informes de errores en Sentry se retienen según su política de retención estándar (90 días).</li>
        </ul>
      </section>

      {/* Sección 8 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>8. Tus derechos</h2>
        <p style={textStyle}>Tenés derecho a:</p>
        <ul style={listStyle}>
          <li><strong>Acceder</strong> a tu información personal desde la sección de perfil de la App.</li>
          <li><strong>Rectificar</strong> tus datos desde la pantalla de edición de perfil.</li>
          <li><strong>Eliminar tu cuenta</strong> y todos los datos asociados desde Más &gt; Ayuda &gt; Eliminar mi cuenta.</li>
          <li><strong>Retirar el consentimiento</strong> para notificaciones push en cualquier momento.</li>
          <li><strong>Solicitar una copia</strong> de tus datos personales contactándonos.</li>
        </ul>
        <p style={{ ...textStyle, marginTop: 8 }}>
          Para ejercer cualquiera de estos derechos, podés usar las opciones dentro de la App o contactarnos directamente (ver Sección 12).
        </p>
      </section>

      {/* Sección 9 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>9. Eliminación de cuenta</h2>
        <p style={textStyle}>
          Podés solicitar la eliminación de tu cuenta en cualquier momento desde la App, en la sección <strong>Configuración &gt; Eliminar cuenta</strong>. Al eliminar tu cuenta:
        </p>
        <ul style={listStyle}>
          <li>Se eliminarán tus datos de perfil, notas, devocionales guardados y preferencias.</li>
          <li>Se revocarán tus tokens de autenticación.</li>
          <li>Se eliminará tu token de notificaciones push.</li>
          <li>El proceso es irreversible.</li>
        </ul>
      </section>

      {/* Sección 10 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>10. Privacidad de menores</h2>
        <p style={textStyle}>
          La App no está dirigida a menores de 13 años. No recopilamos intencionalmente información de menores de 13 años. Si tomamos conocimiento de que hemos recopilado datos de un menor de 13 años sin el consentimiento de un padre o tutor, eliminaremos dicha información de nuestros servidores.
        </p>
        <p style={{ ...textStyle, marginTop: 8 }}>
          Si sos padre o tutor y creés que tu hijo/a nos proporcionó información personal, contactanos para que podamos tomar las medidas necesarias.
        </p>
      </section>

      {/* Sección 11 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>11. Cambios a esta política</h2>
        <p style={textStyle}>
          Podemos actualizar esta Política de Privacidad periódicamente. Cuando realicemos cambios significativos:
        </p>
        <ul style={listStyle}>
          <li>Actualizaremos la fecha de &quot;Última actualización&quot; en la parte superior.</li>
          <li>Notificaremos a los usuarios a través de la App.</li>
          <li>El uso continuado de la App después de los cambios constituye la aceptación de la política actualizada.</li>
        </ul>
      </section>

      {/* Sección 12 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>12. Contacto</h2>
        <p style={textStyle}>
          Si tenés preguntas, inquietudes o solicitudes sobre esta Política de Privacidad o el tratamiento de tus datos personales, podés contactarnos a través de:
        </p>
        <ul style={listStyle}>
          <li><strong>Correo electrónico:</strong> iglesia@cristoviviente.com</li>
          <li><strong>WhatsApp:</strong> +54 11 6519-3053</li>
          <li><strong>Formulario de soporte</strong> dentro de la App (sección Más &gt; Soporte)</li>
        </ul>
      </section>

      {/* Sección 13 */}
      <section style={sectionStyle}>
        <h2 style={headingStyle}>13. Legislación aplicable</h2>
        <p style={textStyle}>
          Esta Política de Privacidad se rige por las leyes de la República Argentina, incluyendo la Ley N° 25.326 de Protección de los Datos Personales y sus normas complementarias.
        </p>
      </section>
    </main>
  );
}
