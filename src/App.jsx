import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState , useEffect } from "react";

function App() {


  //Este objeto sirve para almacenar la lista de los Pacientes
  const [pacientes, setPacientes] = useState([]);
  //Este objeto sirve para almacenar la informacion de un Paciente en especifico con la finalidad de editarlo 
  const [paciente, setPaciente] = useState({});  


  useEffect(() =>{
    const obtenerLS = () =>{
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ??  []
      setPacientes(pacientesLS)
    }
    obtenerLS();
  },[]);

  useEffect(() =>{
    localStorage.setItem( 'pacientes' , JSON.stringify(pacientes))
  },[pacientes])


  const eliminarPaciente = id =>{
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)

  }
  return (
    <div className="container mx-auto mt-20">
      <Header
      />
      <div className="mt-12 md:flex">
        {/* En este componente de Formulario se recolecta la informacion del Paciente a ingresar */}
        <Formulario 
        setPacientes={setPacientes}
        pacientes={pacientes}
        paciente={paciente}
        setPaciente={setPaciente}
        />
        {/* En este componente ListaPacientes se muestra todos los Pacientes ingresados, tambien se pueden editar y eliminar */}
        <ListadoPacientes 
        pacientes={pacientes}
        setPaciente={setPaciente}
        eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
