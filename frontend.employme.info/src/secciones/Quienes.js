import React from "react";
import "./quienes.css";

class Quienes extends React.Component {
  render() {
    return (
      <div className="quienes-somos">
        <h2>Quienes somos</h2>
        <p>
          Employme es una plataforma de empleo que conecta a personas con oportunidades laborales. Nuestra misión es ayudar a las personas a encontrar el trabajo de sus sueños y a las empresas a encontrar los mejores candidatos.
        </p>
        <p>
          Somos una empresa comprometida con la igualdad de oportunidades y la diversidad. Creemos que todos merecen la oportunidad de alcanzar su máximo potencial, independientemente de su raza, género, origen étnico o cualquier otra condición.
        </p>
        <p>
          Nuestro equipo está formado por profesionales con una amplia experiencia en el sector del empleo. Estamos comprometidos a ofrecer a nuestros usuarios una experiencia de usuario excepcional y a ayudarles a encontrar el trabajo perfecto.
        </p>
        <p>
          Si está buscando un nuevo trabajo o si está buscando contratar a los mejores candidatos, le invitamos a visitar nuestra plataforma.
        </p>
      </div>
    );
  }
}

export default Quienes;