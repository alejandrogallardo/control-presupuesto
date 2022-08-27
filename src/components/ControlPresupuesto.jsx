import { useState, useEffect } from 'react'
//import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
//import "react-circular-progressbar/dist/styles.css"

export const ControlPresupuesto = ({
    gastos,
    setGastos,
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto
}) => {

    const [porcentaje, setPorcentaje] = useState(10)
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)

    useEffect(() => {
        const totalGastado = gastos.reduce( (total, gasto ) => gasto.cantidad + total, 0);
        const totalDisponible = presupuesto - totalGastado;
  
        // Calcular el porcentaje gastado
        const nuevoPorcentaje = (( ( presupuesto - totalDisponible ) / presupuesto  ) * 100).toFixed(2);
  
        
        setDisponible(totalDisponible)
        setGastado(totalGastado)
        setTimeout(() => {
          setPorcentaje(nuevoPorcentaje)
        }, 1500);
      }, [gastos]); // Se dispara cada vez que hay un cambio en gastos 

    // ====================================
    // FORMATO DE MONEDA
    // ====================================
    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
            })
    }

    /*const handleResetApp = () => {
        const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?');

        if(resultado) {
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        } 
    }*/

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <p>Graficas aqi</p>
        </div>
        <div className="contenido-presupuesto">
            <button
                className="reset-app"
                type="button"
                // onClick={handleResetApp}
            >
                Resetear App
            </button>
            
            <p> 
                <span>Presupuesto: </span> {formatearCantidad(presupuesto)}
            </p>

            <p>
                <span>Disponible: </span>{formatearCantidad(disponible)}
            </p>

            <p>
                <span>Gastado: </span>{formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}
