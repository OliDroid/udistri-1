// Importación de módulos y paquetes

import express, { Request, Response } from 'express';
import * as cdoctor from '../controladores/doctor';
import { Doctor } from '../modelos/doctor';

const rdoctor = express.Router();
/*Rutas doctor*/
/*pagina inicial de doctor*/
rdoctor.get('/', async (req: Request, res: Response) => {
	res.render("index.ejs",{form: "fdoc" });
});

/*Lista de doctores*/
rdoctor.get('/lista', async (req: Request, res: Response) => {
	cdoctor.findAll((err: Error, doctores: Doctor[]) => {
		if (err) {
			return res.status(500).json({ 'errorMessage': err.message });
		}

		res.status(200).json({ 'data': doctores });
	});
});
/*crea nuevo doctor*/
rdoctor.post('/', async (req: Request, res: Response) => {
	const ndoctor: Doctor = req.body;
	console.log(req.body)
	cdoctor.crear(ndoctor, (err: Error, doctor: Doctor) => {
		if (err) {
			return res.status(500).json({ 'message': err.message });
		}

		res.status(200).send(`el doctor con cedula${req.body.cedula} ha sido creado`);
	});
});
/*Busca doctor por numero de cedula(id)*/
rdoctor.get('/:id', async (req: Request, res: Response) => {
	const cedula = Number(req.params.id);
	cdoctor.findOne(cedula, (err: Error, doctor: Doctor) => {
		if (err) {
			return res.status(500).json({ 'message': err.message });
		}
		res.status(200).json({ 'data': doctor });
	});
});
/*Modifica por numero de cedula(id)*/
rdoctor.put('/:id', async (req: Request, res: Response) => {
	const doctor: Doctor = req.body;
	doctor.cedula = parseInt(req.params.id);/**detalle */
	cdoctor.update((doctor), (err: Error, numUpdate: number) => {
		if (err) {
			return res.status(500).json({ 'message': err.message });
		}

		res.status(200).json({ 'Record(s) updated': numUpdate });
	});
});

export { rdoctor };