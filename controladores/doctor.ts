// Importación de módulos y paquetes
import {db} from "../db";
import { Doctor } from "../modelos/doctor";
import { OkPacket, RowDataPacket } from 'mysql2';

//Función para crear un nuevo doctor en la base de datos.
export const crear = (doctor: Doctor, callback: Function) => {
	const consulta = 'INSERT INTO doctor VALUES (?, ?, ?, ?, ?, ?)';

	db.query(
		consulta,
		[doctor.cedula, doctor.nombre, doctor.apellido, doctor.especialidad, doctor.email, doctor.consultorio],
		(err, result) => {
			if (err) { callback(err); }
			const insertdoctor = (<OkPacket>result).insertId;
			callback(null, insertdoctor);
		}
	);
};

//Función para buscar y obtener la información de un doctor por su número de cédula.
export const findOne = (cedula: number, callback: Function) => {

	const consulta = `
    SELECT * FROM doctor WHERE id=?`;

	db.query(consulta, cedula, (err, result) => {
		if (err) { callback(err); }

		const row = (<RowDataPacket>result)[0];
		const doctor: Doctor = {
			cedula: row.id,
			nombre: row.nombre,
            apellido: row.apellido,
            especialidad: row.especialidad,
            email: row.email,
            consultorio: row.consultorio
		};
		callback(null, doctor);
	});
};

//Función para obtener la lista completa de doctores en la base de datos.
export const findAll = (callback: Function) => {
	const consulta = `SELECT * FROM doctor`;

	db.query(consulta, (err, result) => {
		if (err) { callback(err); }

		const rows = <RowDataPacket[]>result;
		const doctores: Doctor[] = [];

		rows.forEach(row => {
            const doctor: Doctor = {
                cedula: row.id,
                nombre: row.nombre,
                apellido: row.apellido,
                especialidad: row.especialidad,
                email: row.email,
                consultorio: row.consultorio
            };
			
			doctores.push(doctor);
		});
		callback(null, doctores);
	});
};
//Función para actualizar la información de un doctor existente en la base de datos.
export const update = (doctor: Doctor, callback: Function) => {
	const consulta = 'UPDATE doctor SET nombre=?, apellido=?, especialidad=?, mail=?, consultorio=?  WHERE id=?';

	db.query(
		consulta,
		[doctor.nombre, doctor.apellido, doctor.especialidad, doctor.email, doctor.consultorio, doctor.cedula],
		(err, result) => {
			if (err) { callback(err); }

			const dUpdate = (<OkPacket>result).affectedRows;
			callback(null, dUpdate);
		}
	);
};