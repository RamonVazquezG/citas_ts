import React from 'react'
import { usePacienteStore } from '../store/store'

const ListadoPacientes = () => {

  const pacientes = usePacienteStore(state => state.pacientes)


  const degradadoTarjetaNoUrgente = "from-cyan-400 via-blue-500 to-fuchsia-500";
  const textoNoUrgente = "text-cyan-300";
  const hoverNoUrgente = "hover:border-cyan-300/40";

  return (
    <div>
      <section className="rounded-4xl border border-white/10 bg-gray-700 p-5 shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-6 lg:p-7">
        <div className="mb-6 flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="mt-4 text-3xl font-black text-white">Listado de pacientes</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
              Consulta, edita y mantiene visible la información clínica más importante.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-900/70 px-4 py-3 text-left sm:text-right">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Total actual</p>
            <p className="text-2xl font-black text-white">{pacientes.length}</p>
          </div>
        </div>

        {pacientes.map(paciente => (
          <article className={`overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 shadow-xl shadow-slate-950/20 transition duration-300 hover:-translate-y-1 ${hoverNoUrgente}`}>
            <div className={`h-1.5 w-full bg-linear-to-r ${degradadoTarjetaNoUrgente}`} />

            <div className="p-5 sm:p-6">
              <div className="mb-5 flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-[0.24em] ${textoNoUrgente}`}>Paciente veterinario</p>
                  <h3 className="mt-2 text-2xl font-black text-white">{paciente.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">Responsable: {paciente.caretaker}</p>
                </div>
              </div>


              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Correo electrónico</p>
                  <p className="mt-2 break-all text-sm font-medium text-slate-200 sm:text-base">{paciente.email}</p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Fecha de alta</p>
                        <p className="mt-2 text-sm font-medium text-slate-200 sm:text-base">{paciente.date}</p>
                    </div>
              </div>

              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Síntomas</p>
                <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">{paciente.symptoms}</p>
              </div>

            </div>
          </article>
        ))}

      </section>
    </div>

  )
}

export default ListadoPacientes