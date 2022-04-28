/**
 * Ejemplo de uso de:
 * useState()
 * useContext()
 */

import React,{ useState,useContext } from 'react'

/**
 * 
 * @returns componente 1
 * dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */
const miContexto = React.createContext(null);

const Componente1 = () => {
    //inicializamos un estado vacio que va a rellenarse con los datos del padre

    const state = useContext(miContexto);
  return (
    <div>
        <h1>
            el token es {state.token}
        </h1>
        {/*pintamos el componente 2*/}
        <Componente2/>
    </div>
  )
}

const Componente2 = () => {

    const state = useContext(miContexto);

    return (
    <div>
        <h2>
            la sesion es: {state.sesion}
        </h2>
    </div>
  )
}



const MiComponenteConContexto = () => {

const estadoInicial = {
    token:'1234567',
    sesion:1
}

//creamos el estado del componente
const [sesionData, setSesionData] = useState(estadoInicial);

function actualizarSeion(){
    setSesionData({
        token:'jwt12134567',
        sesion:sesionData.sesion + 1,
    })
}

  return (
    <miContexto.Provider value={sesionData}>
        {/* todo lo que esta aqui adentropuede leer los datos de sesio data */}
        {/* ademas si se actualiza, los componetes de aqui lo actualizan */}
        <h1>Mi componente con contexto</h1>
        <Componente1/>
        <button onClick={actualizarSeion}>Actualizar sesion</button>

    </miContexto.Provider>
  )
}

export default MiComponenteConContexto
