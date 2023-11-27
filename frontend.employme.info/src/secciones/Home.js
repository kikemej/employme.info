import React from "react";
import imghome from "../img/imghome.jpg";
import "./home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <main>   
        <section>
         <div className="container">
           <div className="image-container">
            <img src={imghome} alt="Imagen de Home" style={{ width: "100%", height: "auto" }}/>
           </div>
          </div>
          <p>Employme.info es una plataforma innovadora, líder que conecta a reclutadores y candidatos en busca de oportunidades laborales excepcionales.
          Nuestra misión es simplificar el proceso de búsqueda de empleo y selección de personal, brindando a las empresas mejores candidatos y ayudando a los profesionales a encontrar trabajos que impulsen sus carreras.</p>
          <p>Nos enorgullece ser una fuente confiable tanto para empleadores como para personas que buscan empleo, estamos comprometidos en simplificar y mejorar el camino hacia el éxito profesional.
          Únete hoy y comienza a impulsar tu carrera o ayuda a tu empresa a encontrar el talento que necesita.</p>
        </section>
        </main>   
      </div>
    );
  }
}

export default Home;
