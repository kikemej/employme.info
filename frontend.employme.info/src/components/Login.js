import React, { useState } from "react";
import AuthService from "../Services/AuthService";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleLogin = async () => {
    const loggedIn = await AuthService.login(credentials);
    if (loggedIn) {
      // Redirigir al dashboard u otra página protegida
      // history.push("/dashboard");
      console.log("Inicio de sesión exitoso");
    } else {
      console.log("Credenciales incorrectas");
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <input
        type="text"
        placeholder="Correo electrónico"
        value={credentials.email}
        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
    </div>
  );
};

export default Login;
