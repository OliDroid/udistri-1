import express, { Request, Response } from 'express';
import * as cdoctor from '../controladores/doctor';
import { Doctor } from '../modelos/doctor';

const rdoctor = express.Router();

rdoctor.get('/', async (req: Request, res: Response) => {
	cdoctor.findAll((err: Error, doctores: Doctor[]) => {
		if (err) {
			return res.status(500).json({ 'errorMessage': err.message });
		}

		res.status(200).json({ 'data': doctores });
	});
});

rdoctor.post('/', async (req: Request, res: Response) => {
	const ndoctor: Doctor = req.body;
	cdoctor.crear(ndoctor, (err: Error, doctorId: number) => {
		if (err) {
			return res.status(500).json({ 'message': err.message });
		}

		res.status(200).json({ 'doctor': doctorId });
	});
});

rdoctor.get('/:id', async (req: Request, res: Response) => {
	const doctorId = Number(req.params.id);
	cdoctor.findOne(doctorId, (err: Error, doctor: Doctor) => {
		if (err) {
			return res.status(500).json({ 'message': err.message });
		}
		res.status(200).json({ 'data': doctor });
	});
});

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