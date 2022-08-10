
export const ControlPresupuesto = ({presupuesto}) => {

    // ====================================
    // FORMATO DE MONEDA
    // ====================================
    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
            })
    }

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
                <span>Disponible: </span>{formatearCantidad(0)}
            </p>

            <p>
                <span>Gastado: </span>{formatearCantidad(0)}
            </p>
        </div>
    </div>
  )
}
