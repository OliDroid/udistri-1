
// Importación de módulos y paquetes

import {db} from "../db";
import { Paciente } from "../modelos/paciente";
import { OkPacket, RowDataPacket } from 'mysql2';


//Función para crear un nuevo paciente en la base de datos.
export const crear = (paciente: Paciente, callback: Function) => {
	const consulta = 'INSERT INTO paciente VALUES (?, ?, ?, ?, ?)';
	db.query(consulta,
		[paciente.cedula, paciente.nombre, paciente.apellido, paciente.edad, paciente.telefono],
		(err, result) => {
			if (err) { callback(err); }
			const insertpaciente = (<OkPacket>result).insertId;
			
			callback(null, insertpaciente);
		}
	);
};


//Función para buscar y obtener la información de un paciente por su número de cédula.
export const findOne = (cedula: number, callback: Function) => {

	const consulta = `SELECT * FROM paciente WHERE id=?`;

	db.query(consulta, cedula, (err, result) => {
		if (err) { callback(err); }

		const row = (<RowDataPacket>result)[0];
		const paciente: Paciente = {
			cedula: row.id,
			nombre: row.nombre,
            apellido: row.apellido,
            edad: row.edad,
            telefono: row.cel
		};
		callback(null, paciente);
	});
};


//Función para obtener la lista completa de pacientes en la base de datos.
export const findAll = (callback: Function) => {
	const consulta = `SELECT * FROM paciente`;

	db.query(consulta, (err, result) => {
		if (err) { callback(err); }

		const rows = <RowDataPacket[]>result;
		const pacientes: Paciente[] = [];

		rows.forEach(row => {
            const paciente: Paciente = {
                cedula: row.id,
                nombre: row.nombre,
                apellido: row.apellido,
                edad: row.edad,
                telefono: row.cel
            };
			
			pacientes.push(paciente);
		});
		callback(null, pacientes);
	});
};


//Función para actualizar la información de un paciente existente en la base de datos.
export const update = (paciente: Paciente, callback: Function) => {
	const consulta = 'UPDATE paciente SET nombre=?, apellido=?, edad=?, cel=?  WHERE id=?';

	db.query(
		consulta,
		[paciente.nombre, paciente.apellido, paciente.edad, paciente.telefono, paciente.cedula],
		(err, result) => {
			if (err) { callback(err) }
			const pUpdate = (<OkPacket>result).affectedRows;
			callback(null, pUpdate);
		}
	);
};