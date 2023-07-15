import express, { Request, Response } from 'express';
import * as ccita from '../controladores/cita';
import { Cita } from '../modelos/cita';

const rcita = express.Router();


rcita.get('/', async (req: Request, res: Response) => {
	res.render("index.ejs",{form: "fcita" });
});

rcita.get('/lista', async (req: Request, res: Response) => {
	ccita.findAll((err: Error, citas: Cita[]) => {
		if (err) {
			return res.status(500).json({ 'errorMessage': err.message });
		}

		res.status(200).json({ 'data': citas });
	});
});

rcita.post('/', async (req: Request, res: Response) => {
	const ncita: Cita = req.body;
	ccita.crear(ncita, (err: Error, cita: Cita) => {
		if (err) {
			return res.status(500).json({ 'message': err.message });
		}

		res.status(200).json({ 'data': cita });
	});
});

rcita.get('/:id', async (req: Request, res: Response) => {
	const paciente = Number(req.params.id);
	ccita.findOne(paciente, (err: Error, citas: Cita[]) => {
		if (err) {
			return res.status(500).json({ 'message': err.message });
		}
		res.status(200).json({ 'data': citas });
	});
});

rcita.put('/:id', async (req: Request, res: Response) => {
	const doctor: Cita = req.body;
	ccita.update(doctor, (err: Error, numUpdate: number) => {
		if (err) {
			return res.status(500).json({ 'message': err.message });
		}

		res.status(200).json({ 'Record(s) updated': numUpdate });
	});
});

export { rcita };