// Importación de módulos y paquetes

import {Paciente} from "./paciente"
import {Doctor} from "./doctor"
/*modelo cita*/
export interface Cita{
    id: number,
    doctor: Doctor,
    paciente: Paciente,
    fecha: Date
}