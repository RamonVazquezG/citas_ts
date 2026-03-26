import React from 'react'
import { usePacienteStore } from '../store/store'

const ListadoPacientes = () => {

  const pacientes = usePacienteStore(state => state.pacientes)

  return (
    <div>
      <h2>Lista de Pacientes</h2>
      {pacientes.map(paciente => (
        <article className={`overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 shadow-xl shadow-slate-950/20 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/40`}>
          <div className="p-5 sm:p-6">
            <div className="mb-5 flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
              <p className={`text-xs font-semibold uppercase tracking-[0.24em] from-cyan-400 via-blue-500 to-fuchsia-500`}>Paciente veterinario</p>
              <h3 className="mt-2 text-2xl font-black text-white">{paciente.name}</h3>
              <p className="mt-1 text-sm text-slate-400">Responsable: {paciente.caretaker}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">🐾 Mascota</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-300">🩺 Observación</span>
              </div>
            </div>


            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Correo electrónico</p>
                <p className="mt-2 break-all text-sm font-medium text-slate-200 sm:text-base">{paciente.email}</p>
              </div>
            </div>

          </div>
        </article>
      ))}
    </div>

  )
}

export default ListadoPacientes