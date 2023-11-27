import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; 

class Servicios extends React.Component {
  render() {
    return (
      <div className="servicios">
        <header>
          <h1>Servicios</h1>
        </header>
        <main>
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
        </main>
        <footer>
          <p>&copy; 2023 Bolsa de Empleo</p>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<Servicios />, document.getElementById("root"));
