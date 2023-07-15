import express, { Request, Response } from 'express';
import * as cpaciente from '../controladores/paciente';
import { Paciente } from '../modelos/paciente';


const rpaciente = express.Router();

rpaciente.get('/', async (req: Request, res: Response) => {
	res.render("index.ejs",{form: "fpac" });
});

rpaciente.get('/lista', async (req: Request, res: Response) => {
	cpaciente.findAll((err: Error, pacientes: Paciente[]) => {
		if (err) {
			return res.status(500).json({ 'errorMessage': err.message });
		}
		res.status(200).json({ 'data': pacientes });
	});
});

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

rpaciente.get('/:id', async (req: Request, res: Response) => {
	const pacienteId = Number(req.params.id);
	cpaciente.findOne(pacienteId, (err: Error, paciente: Paciente) => {
		if (err) {
			return res.status(500).json({ 'message': err.message });
		}
		res.status(200).json({ 'data': paciente });
	});
});

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