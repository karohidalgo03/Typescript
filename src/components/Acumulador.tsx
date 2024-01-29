import { useState } from "react"


export const Acumulador = () => {
   const[valor, setValor]= useState(0);

   const contador=(num:number)=>{
    setValor(valor+num)

   }

  return (
    <div >
        <h3>Contador: <small>{valor}</small> </h3>
     <br></br> 
        <button className="btn btn-primary"onClick={()=>contador(5)} >+5</button>
         &nbsp;
        <button className="btn btn-primary" onClick={()=>contador(-5)}>-5</button>
        <hr></hr>
    </div>
  )
}
