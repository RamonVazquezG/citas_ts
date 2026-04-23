import { usePacienteStore } from '../store/store'
import Paciente from './Paciente';

const ListadoPacientes = () => {

  const pacientes = usePacienteStore(state => state.pacientes)



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
          <Paciente
            key={paciente.id}
            paciente={paciente}
          />
        ))}

      </section>
    </div>

  )
}

export default ListadoPacientes