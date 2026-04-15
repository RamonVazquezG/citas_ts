import { create } from 'zustand'
import type { DraftPatient, Patient } from '../types'
import { v4 as uuidv4 } from 'uuid'


// 1. Definir el tipo del estado
type PacientesState = {
    pacientes: Patient[];
    pacienteActivo: Patient | null; // NUEVO

    agregarPaciente: (data: DraftPatient) => void;
    eliminarPaciente: (id: Patient['id']) => void;
    establecerPacienteActivo: (paciente: Patient) => void; // NUEVO
    actualizarPaciente: (data: DraftPatient) => void; // NUEVO
    limpiarPacienteActivo: () => void; // NUEVO
}


// 2. Función auxiliar para crear un paciente con ID
const crearPaciente = (data: DraftPatient): Patient => {
    return {
        id: uuidv4(),
        ...data
    }
}


// 3. Crear el store
export const usePacienteStore = create<PacientesState>((set) => ({
    pacientes: [],
    pacienteActivo: null,
    
    agregarPaciente: (data) =>
        set((state) => ({
            pacientes: [...state.pacientes, crearPaciente(data)]
        })),

    eliminarPaciente: (id) => {
        set((state) => ({
            pacientes: state.pacientes.filter(paciente => paciente.id !== id)
        }))

    },

    establecerPacienteActivo: (paciente) => {
        set(() => ({
            pacienteActivo: paciente
        }))
    },

    actualizarPaciente: (data) => {
        set((state) => ({
            pacientes: state.pacientes.map(paciente =>
                paciente.id === state.pacienteActivo?.id
                    ? { id: paciente.id, ...data } // Actualizar si coincide el id
                    : paciente // Dejar sin cambios si no coincide
            ),
            pacienteActivo: null // Limpiar despues de actualizar
        }))
    },

    limpiarPacienteActivo: () => {
        set(() => ({
            pacienteActivo: null
        }))
    }

}))
