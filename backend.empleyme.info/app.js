const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const usuariosRoutes = require('./routes/usuariosRoutes');
const empresasRoutes = require('./routes/empresasRoutes'); 
const postulacionesRoutes = require('./routes/postulacionesRoutes'); 
const loginRoutes = require('./routes/loginRoutes'); 
const vacantesRoutes = require('./routes/vacantesRoutes'); 
const reclutadorRoutes = require('./routes/reclutadorRoutes'); 
const candidatosRoutes = require('./routes/candidatosRoutes'); 
const passport = require('passport');
const session = require('express-session');
const cors = require('cors');
const middleware = require('./middleware/middleware');


app.use(cors({
  origin: 'http://localhost:3000' // Aquí especificas el origen permitido
}));

// Configura body-parser para analizar solicitudes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(middleware.logRequest); // Registra todas las solicitudes HTTP en la consola
app.use('/usuarios', usuariosRoutes); // Monta las rutas de usuarios
app.use('/empresas', empresasRoutes); // Monta las rutas de empresas
app.use('/postulaciones', postulacionesRoutes); // Monta las rutas de postulaciones
app.use('/login', loginRoutes); // Monta las rutas de Login
app.use('/vacantes', vacantesRoutes); // Monta las rutas de Vacantes
app.use('/reclutador', reclutadorRoutes); // Monta las rutas de Reclutador
app.use('/candidatos', candidatosRoutes); // Monta las rutas de Candidatos

const port = 5000;
app.listen(port, () => {
  console.log(`Servidor Express corriendo en http://localhost:${port}`);
});


