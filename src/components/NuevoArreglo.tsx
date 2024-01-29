

export const NuevoArreglo = () => {

    const arreglo = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
    const arregloDividido = arreglo.map((valor) => valor / 5);


  return (
    <div>
        <h3>Nuevo Arreglo</h3>
        <p>{arregloDividido.join(', ')}</p>
        <hr></hr>
    </div>
  )
}


