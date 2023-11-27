import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./secciones/Home";
import Servicios from "./secciones/Servicios";
import Terminos from "./secciones/Terminos";
import Contactanos from "./secciones/Contactanos";
import Politicas from "./secciones/Politicas";
import Quienes from "./secciones/Quienes";
import Registro from "./secciones/Registro";
import Login from "./components/Login";
import "./App.css";



const App = () => {
  return (
    <Router>
      <div className="index">
        <header>
          <h2 className="title">Employme</h2>
          <nav>
            <a href="/Home" rel="home">
              Home
            </a>
            <a href="/login">Login</a>
            <a href="/registro">Registro</a>
            <a href="/servicios">Servicios</a>
            <a href="/terminos">Términos y Condiciones</a>
            <a href="/politicas">Políticas de Privacidad</a>
            <a href="/contactanos">Contactanos</a>
            <a href="/quienes">Quienes somos</a>
          </nav>
        </header>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/registro" component={Registro} />
            <Route path="/servicios" component={Servicios} />
            <Route path="/terminos" component={Terminos} />
            <Route path="/politicas" component={Politicas} />
            <Route path="/contactanos" component={Contactanos} />
            <Route path="/quienes" component={Quienes} />
          </Switch>
        </div>
        <footer className="footer">
          <p>&copy; 2023 Employme</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;