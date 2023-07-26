// Importación de módulos y paquetes

import express, { Request, Response } from 'express';
import * as cpaciente from '../controladores/paciente';
import { Paciente } from '../modelos/paciente';


const rpaciente = express.Router();

/*Define endpoints de paciente*/
/*Página inicial de paciente*/
rpaciente.get('/', async (req: Request, res: Response) => {
	res.render("index.ejs",{form: "fpac" });
});
/*Lista de pacientse*/
rpaciente.get('/lista', async (req: Request, res: Response) => {
	cpaciente.findAll((err: Error, pacientes: Paciente[]) => {
		if (err) {
			return res.status(500).json({ 'errorMessage': err.message });
		}
		res.status(200).json({ 'data': pacientes });
	});
});
/*Crea nuevo paciente*/
rpaciente.post('/', async (req: Request, res: Response) => {
	const npaciente: Paciente = req.body;
	console.log(req.body);
	cpaciente.crear(npaciente, (err: Error, paciente: Paciente) => {
		if (err) {
			return res.status(500).json({ 'message': err.message });
		}

		res.status(200).send(`el paciente con cedula${req.body.cedula} ha sido creado`);
	});
});
/*Busca un paciente por cedula(id)*/
rpaciente.get('/:id', async (req: Request, res: Response) => {
	console.log(req.params.id)
	const cedula = Number(req.params.id);
	cpaciente.findOne(cedula, (err: Error, paciente: Paciente) => {
		if (err) {
			return res.status(500).json({ 'message': err.message });
		}
		res.status(200).json({ 'data': paciente });
	});
});
/*Modifica un paciente por cedula(id)*/
rpaciente.put('/:id', async (req: Request, res: Response) => {
	console.log(req.body)
	const paciente: Paciente = req.body;
	cpaciente.update(paciente, (err: Error, numUpdate: number) => {
		if (err) {
			return res.status(500).json({ 'message': err.message });
		}

		res.status(200).json({ 'Record(s) updated': numUpdate });
	});
});

export { rpaciente };