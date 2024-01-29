

export const AreaCuadrado = () => {
    const area=(lado:number):number=>{
        return lado*lado;
    }

  return (
    <div>
       <h2>AreaCuadrado</h2> 
       <span>El area del cuadrado es: {area(5)}cm<br/></span>
       <hr></hr> 
    </div>
    
  )
}
