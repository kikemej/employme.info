import React from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/AuthService";

const Dashboard = () => {
  // Verificar si el usuario está autenticado
  const isAuthenticated = AuthService.isAuthenticated();

  if (!isAuthenticated) {
    // Si el usuario no está autenticado, redirigir al login
    return <Redirect to="/login" />;
  }

  // Si el usuario está autenticado, mostrar el dashboard
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Bienvenido, usuario autenticado</p>
      <button onClick={AuthService.logout}>Cerrar sesión</button>
    </div>
  );
};

export default Dashboard;
