import React from "react";
import "./terminos.css";

class Terminos extends React.Component {
  render() {
    return (
      <div className="terminos-y-condiciones">
        <h2>Términos y condiciones</h2>
        <p>
          Aquí se establecen los términos y condiciones de uso de la plataforma Employme.
        </p>
        <ul>
          <li>
            <strong>1. Objeto</strong>
          </li>
          <li>
            <strong>2. Condiciones de uso</strong>
          </li>
          <li>
            <strong>3. Propiedad intelectual</strong>
          </li>
          <li>
            <strong>4. Privacidad</strong>
          </li>
          <li>
            <strong>5. Modificaciones</strong>
          </li>
          <li>
            <strong>6. Jurisdicción</strong>
          </li>
        </ul>
      </div>
    );
  }
}

export default Terminos;