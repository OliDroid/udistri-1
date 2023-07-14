const config = require('./config.js');
import express from 'express';
import {db} from "./db.js"
import path from 'path';
import {rdoctor} from './rutas/rdoctor.js';
import {rpaciente} from './rutas/rpaciente.js'
import { rcita } from './rutas/rcitas.js';
import bodyParser from 'body-parser';
import {rvista} from './rutas/rvistas.js'

const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());


app.set('view engine', 'ejs');
app.use("/cita", rcita);
app.use("/paciente", rpaciente);
app.use("/doctor", rdoctor);
app.use("/", rvista)


db.connect((err) => {
	if(err){
		console.log('Database connection error');
	} else {
		console.log('Database Connected');
	}
});
 


app.listen(config.PORT, config.HOST, function () {
    console.log(`El servidor se esta ejecutando en http://${config.HOST}:${config.PORT}`);
});