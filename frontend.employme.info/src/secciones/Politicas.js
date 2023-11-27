import React from "react";
import "./politicas.css";

class PoliticaDePrivacidad extends React.Component {
  render() {
    return (
      <div className="politica-de-privacidad">
        <h2>Política de privacidad</h2>
        <p>
          En Employme, nos comprometemos a proteger su privacidad. Esta política de privacidad explica cómo recopilamos, usamos y compartimos su información personal.
        </p>
        <ul>
          <li>
            <strong>1. Información que recopilamos</strong>
            <p>
              Recopilamos información personal de usted cuando crea una cuenta en nuestra plataforma, cuando usa nuestros servicios o cuando nos contacta. La información personal que recopilamos puede incluir:
              <ul>
                <li>Su nombre</li>
                <li>Su correo electrónico</li>
                <li>Su número de teléfono</li>
                <li>Su dirección</li>
                <li>Su información de empleo</li>
                <li>Su información de pago</li>
                <li>Su historial de navegación</li>
              </ul>
            </p>
          </li>
          <li>
            <strong>2. Cómo usamos su información</strong>
            <p>
              Usamos su información personal para proporcionarle nuestros servicios, para comunicarnos con usted y para mejorar nuestros servicios. En particular, podemos usar su información personal para:
              <ul>
                <li>Crear y gestionar su cuenta</li>
                <li>Proporcionarle servicios de empleo</li>
                <li>Enviarle notificaciones y actualizaciones</li>
                <li>Personalizar su experiencia en la plataforma</li>
                <li>Mejorar nuestros servicios</li>
              </ul>
            </p>
          </li>
          <li>
            <strong>3. Cómo compartimos su información</strong>
            <p>
              Podemos compartir su información personal con terceros para proporcionarle nuestros servicios, para cumplir con las leyes o para proteger nuestros derechos. En particular, podemos compartir su información personal con:
              <ul>
                <li>Nuestros proveedores de servicios</li>
                <li>Las autoridades gubernamentales</li>
                <li>Los terceros con los que usted nos autoriza a compartir su información</li>
              </ul>
            </p>
          </li>
          <li>
            <strong>4. Sus derechos</strong>
            <p>
              Usted tiene ciertos derechos sobre su información personal, incluyendo el derecho a acceder a su información, a corregirla, a eliminarla y a oponerse a su uso. Puede ejercer estos derechos poniéndose en contacto con nosotros.
            </p>
          </li>
          <li>
            <strong>5. Cambios en esta política de privacidad</strong>
            <p>
              Podemos cambiar esta política de privacidad de vez en cuando. Si hacemos cambios importantes, le notificaremos por correo electrónico o mediante un aviso en nuestro sitio web.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default PoliticaDePrivacidad;