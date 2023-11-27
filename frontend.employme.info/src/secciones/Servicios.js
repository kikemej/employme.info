import React from "react";
import "./servicios.css";

class Servicios extends React.Component {
  render() {
    return (
      <div className="servicios">
          <section>
            <h2>Reclutamiento</h2>
            <p>
              Nuestro servicio de reclutamiento te ayuda a encontrar los mejores candidatos para tus vacantes.
              Contamos con un equipo de expertos que se encargarán de encontrar los perfiles que mejor se adapten a tus necesidades.
            </p>
          </section>
          <section>
            <h2>Empleo</h2>
            <p>
              Encuentra las mejores ofertas de empleo en nuestro portal. Tenemos una amplia variedad de vacantes para que puedas encontrar el trabajo que estás buscando.
            </p>
          </section>
      </div>
    );
  }
}

export default Servicios;
