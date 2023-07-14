import {Paciente} from "./paciente"
import {Doctor} from "./doctor"

export interface Cita{
    id: number,
    doctor: Doctor,
    paciente: Paciente,
    fecha: Date
}