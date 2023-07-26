// Importación de módulos y paquetes
const config = require('./config.js');
import express from 'express';
import {db} from "./db.js"
import path from 'path';
import {rdoctor} from './rutas/rdoctor.js';
import {rpaciente} from './rutas/rpaciente.js'
import { rcita } from './rutas/rcitas.js';
import bodyParser from 'body-parser';
import {rvista} from './rutas/rvistas.js'

// Creación de la aplicación Express
const app = express();

// Middleware para analizar el cuerpo de las solicitudes entrantes en formato JSON
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Configuración del motor de vistas a EJS
app.set('view engine', 'ejs');

// Definición de las rutas y los middlewares asociados
app.use("/cita", rcita);
app.use("/paciente", rpaciente);
app.use("/doctor", rdoctor);
app.use("/", rvista)

// Conexión a la base de datos
db.connect((err) => {
	if(err){
		console.log('Database connection error');
		
	} else {
		console.log('Database Connected');
	}
});


// Iniciar el servidor para escuchar en el puerto y host configurados
app.listen(config.PORT, config.HOST, function () {
    console.log(`El servidor se esta ejecutando en http://${config.HOST}:${config.PORT}`);
});