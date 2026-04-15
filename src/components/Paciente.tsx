import type { Patient } from "../types"
import PacienteDetalle from "./PacienteDetalle"
import { usePacienteStore } from '../store/store'
import DialogModal from "./DialogModal";
import { useState } from "react";
import { toast } from 'react-toastify';

type PacienteProps = {
    paciente: Patient
}

const Paciente = ({ paciente }: PacienteProps) => {
    const eliminarPaciente = usePacienteStore((state) => state.eliminarPaciente)
    //const getPatientById = usePacienteStore((state) => state.getPatientById)

    const establecerPacienteActivo =
        usePacienteStore((state) => state.establecerPacienteActivo)

    const [isOpened, setIsOpened] = useState(false);

    const handleClickEliminar = () => {
        const pacienteEliminado = { ...paciente }; // Guardar una copia del paciente eliminado
        eliminarPaciente(paciente.id);

        toast(
            <div>
                <p>Paciente eliminado</p>
                <small>Click para deshacer</small>
            </div>,
            {
                autoClose: 5000,
                closeOnClick: true,
                onClose: () => {
                    // Si el toast se cierra sin clic, no se restaura el paciente
                },
                onClick: () => {
                    // Restaurar el paciente eliminado al hacer clic en el toast
                    usePacienteStore.getState().agregarPaciente(pacienteEliminado);
                    toast.info('Paciente restaurado', {
                        autoClose: 3000
                    });
                },
            }
        );
    }

    const handleClickEditar = () => {
        establecerPacienteActivo(paciente); // Enviar el objeto completo
    }

    return (
        <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
            <PacienteDetalle label="ID" data={paciente.id} />
            <PacienteDetalle label="Nombre" data={paciente.name} />
            <PacienteDetalle label="Propietario" data={paciente.caretaker} />
            <PacienteDetalle label="Email" data={paciente.email} />
            <PacienteDetalle label="Fecha Alta" data={paciente.date || ''} />
            <PacienteDetalle label="Síntomas" data={paciente.symptoms} />

            <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => handleClickEditar}
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setIsOpened(true)}
                >Eliminar</button>

                <DialogModal
                    title={`¿Estás seguro que deseas eliminar al paciente ${paciente.name}?`}
                    isOpened={isOpened}
                    onProceed={handleClickEliminar}
                    onClose={() => setIsOpened(false)}
                >
                    <p>To close: click Close, press Escape, or click outside.</p>
                </DialogModal>
            </div>
        </div>
    )
}

export default Paciente