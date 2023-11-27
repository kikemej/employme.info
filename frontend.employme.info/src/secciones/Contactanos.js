import React from "react";
import "./contactanos.css";

class Contactanos extends React.Component {
  render() {
    return (
      <div className="contacto-redes-sociales">
        <h2>Contacto y redes sociales</h2>
        <div className="contacto">
          <h3>Contacto</h3>
          <p>
            ¿Tienes alguna pregunta o comentario? Ponte en contacto con nosotros.
          </p>
          <form action="/contacto" method="post">
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              required
            />
            <textarea
              name="mensaje"
              placeholder="Tu mensaje"
              required
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="redes-sociales">
          <h3>Redes sociales</h3>
          <ul>
            <li>
              <a href="https://wa.me/573123456789" target="_blank" rel="noreferrer">
                <i class="fab fa-whatsapp"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/employme/" target="_blank" rel="noreferrer">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/employme/" target="_blank" rel="noreferrer">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/employme" target="_blank" rel="noreferrer">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contactanos;