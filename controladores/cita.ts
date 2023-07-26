// Importación de módulos y paquetes
import {db} from "../db";
import { Cita } from "../modelos/cita";
import { OkPacket, RowDataPacket } from 'mysql2';


//Función para crear una nueva cita en la base de datos.
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

//Función para buscar y obtener la información de una cita por el id.
export const findOne = (id: number, callback: Function) => {

	const consulta = `SELECT * FROM cita WHERE id=?`;

	db.query(consulta, [id], (err, result) => {
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
//Función para obtener la lista completa de citas en la base de datos.
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

//Función para actualizar la información de una cita existente en la base de datos.
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