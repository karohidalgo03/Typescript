import { Acumulador } from "./components/Acumulador";
import { NuevoArreglo } from "./components/NuevoArreglo";
import { PromedioEstudiante } from "./components/PromedioEstudiante";
import { AreaCuadrado } from "./typescript/AreaCuadrado";
import { SumaArreglos } from "./typescript/SumaArreglos";

const App =() => {
  return (
    <div className="mt-2">
       <center><h3>EJERCICIOS TYPESCRIPT - REACT</h3></center>
       <AreaCuadrado/>
       <SumaArreglos/>
       <NuevoArreglo/>
       <Acumulador/>
       <PromedioEstudiante/>
       
    </div>
  )
}

export default App;
