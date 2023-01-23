import { useEffect } from "react";
import Paciente from "./Paciente";

function ListadoPacientes({ pacientes , setPaciente , eliminarPaciente}) {
  


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen lg:overflow-y-scroll pb-5">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center font-bold">
            Administra tus {""}
            <span className="text-indigo-600">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente) => {
            return <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>;
          })}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">Noy Hay Pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center font-bold">
            Comienza agrendando pacientes {""}
            <span className="text-indigo-600">y aparecerán en este lugar</span>
          </p>
        </>
      )}
    </div>
  );
}

export default ListadoPacientes;
