import React from "react";
import { useEffect, useState } from "react";
import Paciente from "./Paciente";
import Error from "./Error";

function Formulario({ setPacientes, pacientes, paciente ,setPaciente}) {
  //Estas variables son los datos de un usuario, los cuales inician en Vacio ya que estos datos se muestran
  // en los inputs del form mediante la funcion onChange de cada input
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  //Variable la cual se encarga de validar si falta algun campo por rellenar
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }

    setNombre(paciente.nombre);
  }, [paciente]);

  //Funcion la cual crea una Id unica cada vez que se ingresa un paciente
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  //Funcion que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion del formulario, el includes es una palabre reservada la cual se encarga de verificar que un campo no esté vacio (Es decir con un " ")
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      console.log("Hay al menos un campo vacio");
      return;
    }

    setError(false);

    //Objeto de Paciente, este se encarga de guardar todos los datos de un paciente en un objeto
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      //Editando el registro
      objetoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id ===
        paciente.id ? objetoPaciente : pacienteState)


        setPacientes(pacientesActualizados)
        setPaciente({})
    } else {
      //Nuevo Registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

    //Luego de haber guardado los datos del paciente en un objeto, se hace un destructuring de este y se añaden los datos actuales del objeto,

    //Finalmente, se cambian los datos del state con la finalidad de reiniciar el formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <>
      <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">
          Seguimiento de Pacientes
        </h2>
        <p className="text-lg mt-5 text-center mb-10 font-bold">
          Añade Pacientes y {""}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form
          className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
          onSubmit={handleSubmit}
        >
          {error && <Error>Todos los campos son obligatorios</Error>}
          <div className="mb-5">
            <label
              htmlFor="mascota"
              className="block text-gray-700 uppercase font-black"
            >
              Nombre Mascota
            </label>
            <input
              id="mascota"
              type="text"
              placeholder="Nombre de la Mascota"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="propietario"
              className="block text-gray-700 uppercase font-black"
            >
              Nombre Propietario
            </label>
            <input
              id="propietario"
              type="text"
              placeholder="Nombre del Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={propietario}
              onChange={(e) => setPropietario(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block text-gray-700 uppercase font-black"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email contacto Propietario"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="alta"
              className="block text-gray-700 uppercase font-black"
            >
              Fecha
            </label>
            <input
              id="alta"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="sintomas"
              className="block text-gray-700 uppercase font-black"
            >
              Sintomas
            </label>
            <textarea
              id="sintomas"
              className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Describe los Sintomas"
              value={sintomas}
              onChange={(e) => setSintomas(e.target.value)}
            ></textarea>
          </div>
          <input
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-all"
            value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          />
        </form>
      </div>
    </>
  );
}

export default Formulario;
