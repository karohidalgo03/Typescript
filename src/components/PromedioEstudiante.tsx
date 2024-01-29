

export const PromedioEstudiante = () => {
    const alumnos = [
        {
            name: 'Viviana',
            edad: 19,
            calificacion: 10,
        },
        {
            name: 'Wendy',
            edad: 20,
            calificacion: 8,
        },
        {
            name: 'Gerson',
            edad: 18,
            calificacion: 9,
        }
    ];

    const calcularPromedio = () => {
        const totCalif = alumnos.reduce((total, alumno) => total + alumno.calificacion, 0);
        const promedio = totCalif / alumnos.length;
        return promedio;
      };
    
      const prom= calcularPromedio();
    

  return (
    <div>
      <h3>PromedioEstudiante</h3>
      <p>{prom}</p>
    </div>
  )
}
