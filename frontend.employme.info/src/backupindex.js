import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Importar el archivo index.css
import imghome from "./img/imghome.jpg";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <header>
          <h2 className="title">Employme</h2>    
          <nav>
            <a href="/inicio" rel="home">Home</a>
            <a href="/servicios">Servicios</a>
            <a href="/login">Login</a>
            <a href="/registro">Registro</a>
            <a href="/terminos-y-condiciones">Términos y Condiciones</a>
            <a href="/politicas-de-privacidad">Políticas de Privacidad</a>
            <a href="/contactanos">Contacto</a>
            <a href="/quienessomos">Quienes somos</a>
          </nav>
        </header>
        <main>
        <section>
         <div className="container">
          <div className="image-container">
            <img src={imghome} alt="Imagen de Home" style={{ width: "100%", height: "auto" }}/>
          </div>
         </div>
        </section>
        <section>
          <p>Employme.info es una plataforma innovadora, líder que conecta a reclutadores y candidatos en busca de oportunidades laborales excepcionales.
          Nuestra misión es simplificar el proceso de búsqueda de empleo y selección de personal, brindando a las empresas mejores candidatos y ayudando a los profesionales a encontrar trabajos que impulsen sus carreras.</p>
          <p>Nos enorgullece ser una fuente confiable tanto para empleadores como para personas que buscan empleo, estamos comprometidos en simplificar y mejorar el camino hacia el éxito profesional.
          Únete hoy y comienza a impulsar tu carrera o ayuda a tu empresa a encontrar el talento que necesita.</p>
        </section>
        </main>
        <footer>
         <div className="container">
            <p>&copy; 2023 Employme</p>
         </div>
        </footer>

      </div>
    );
  }
  
}

ReactDOM.render(<Home />, document.getElementById("root"));

// Resto del código...
