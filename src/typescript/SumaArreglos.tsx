

export const SumaArreglos = () => {
 
    const sumarElementos = (arreglo: number[]) => {
        let suma = 0;
    
        arreglo.forEach((elemento) => {
          suma += elemento;
        });
    
        return suma;
      };
    
      const arregloEjemplo: number[] = [1, 2, 3, 4, 5];
      const resultadoSuma: number = sumarElementos(arregloEjemplo);
    
 
  return (
    <div>
        <h2>Suma de Arreglos</h2>
        Arreglo: {arregloEjemplo.join(', ')}
        Suma de los elementos del arreglo:{resultadoSuma};
       <hr></hr> 
        
    </div>
  )
}
