/**
 * Ejemplo de useState Hook
 * crear un componente de tipo funcion y acceder a su estado
 * privado a travez de un hook y ademas poder modificarlo
 */

import React,{ useState } from 'react'

const Ejemplo1 = () => {
    //valor inicial para un contador
    const valorInicial = 0;
    //valor inicial para una persona
    const personaInicial={
        nombre : 'Diego',
        email: "drbv27@gmail.com",
    }

    //queremos que el valor inicial  y persona inicial sean parte del estado del componente
    //para sai poder gestionar su cambio y que este se vea reflejado en la vista del componente

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    //funcion para acualizar el estado privado del contador
    function incrementarContador(){
        setContador(contador+1)
    }

    function actualizarPersona(){
        setPersona(
            {
                nombre:"Ricardo",
                email:"otro@correo.com"
            }
        )
    }

  return (
    <div>
        <h1>Ejemplo useState</h1>
        <h2>{contador}</h2>
        <h2>{persona.nombre} {persona.email}</h2>
        <button onClick={incrementarContador}>+</button>
        <button onClick={actualizarPersona}>cambia persona</button>
    </div>
  )
}

export default Ejemplo1