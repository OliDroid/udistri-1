import {db} from "../db";
import { Cita } from "../modelos/cita";
import { OkPacket, RowDataPacket } from 'mysql2';



export const crear = (cita: Cita, callback: Function) => {
	const consulta = 'INSERT INTO cita (paciente, doctor, fecha) VALUES (?, ?, ?)';

	db.query(
		consulta,
		[cita.paciente, cita.doctor, cita.fecha],
		(err, result) => {
			if (err) { callback(err); }
			const insertcita = (<OkPacket>result).insertId;
			callback(null, insertcita);
		}
	);
};

export const findOne = (paciente: number, callback: Function) => {

	const consulta = `SELECT * FROM cita WHERE paciente=?`;

	db.query(consulta, [paciente], (err, result) => {
		if (err) { callback(err); }

		const rows = (<RowDataPacket[]>result);
		const citas: Cita[] = [];
		rows.forEach(row => {
			const cita: Cita = {
				id: row.id,
				paciente: row.paciente,
				doctor: row.doctor,
            	fecha: row.fecha,
			};
			citas.push(cita)
		});
		callback(null, citas);
	});
};

export const findAll = (callback: Function) => {
	const consulta = `SELECT * FROM cita`;

	db.query(consulta, (err, result) => {
		if (err) { callback(err); }

		const rows = <RowDataPacket[]>result;
		const citas: Cita[] = [];

		rows.forEach(row => {
            const cita: Cita = {
				id: row.id,
				paciente: row.paciente,
				doctor: row.doctor,
            	fecha: row.fecha,
            };
			
			citas.push(cita);
		});
		callback(null, citas);
	});
};


export const update = (cita: Cita, callback: Function) => {
	const consulta = `UPDATE cita (paciente, doctor, fecha) SET paciente=?, doctor=?, fecha=?,  WHERE id=?`;
	db.query(
		consulta,
		[cita.paciente, cita.doctor, cita.fecha], 
		(err, result) => {
			if (err) { callback(err); }

			const cupdate = (<OkPacket>result).affectedRows;
			callback(null, cupdate);
		}
	);
};