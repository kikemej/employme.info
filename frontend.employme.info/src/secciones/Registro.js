import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import ContenidoRegistro from "../Contents/contenidoRegistro";


class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registroConCorreo: false, // Inicializa el estado
      //registroConGoogle: false,
    };
  }

  handleRegistroConCorreoClick = () => {
    this.setState({ registroConCorreo: true });
  };



  render() {
    return (
      <div>
        <Navbar />
        <div className="registro">
          <Button
            text="Registrarse con correo"
            onClick={this.handleRegistroConCorreoClick}
          />
          <Button
            text="Registrarse con Google"
            
          />
          {this.state.registroConCorreo && <ContenidoRegistro />}

          {this.state.error && <p>Error al iniciar sesión con Google</p>}
        </div>
      </div>
    );
  }
}

export default Registro;
