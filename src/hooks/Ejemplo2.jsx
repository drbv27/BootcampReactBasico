/**
 * Ejemplo de uso de:
 * useState()
 * useRef()
 * useEffect()
 */


import React,{ useState, useEffect, useRef} from 'react'

const Ejemplo2 = () => {
    //vamos a crear 2 contadores distintos cada uno en un estado diferente

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    //creemos una referencia con useRef para asociar una variable
    //con un elemento del DOM del componente

    const miRef = useRef();

    function incrementar1() {
        setContador1(contador1+1)
    }
    function incrementar2() {
        setContador2(contador2+1)
    }

    /**
     * trabajndo con useEffect
     */

    /**
     * caso1: ejecutar siempre un snippet de codigo
     * cada vez que haya un cambio en ele estado del componente
     * se ejecuta aquello que este dentro del useEffect
     */

 /*    useEffect(() => {
      console.log('cambio en el estado del componente');
      console.log('Mostrando referencia al elemento del DOM')
      console.log(miRef)

    },) */
    /**
     * caso2: ejecutar solo en algunos casos
     * ejemplo...solo cuando cambie contador 1
     * con contado2 no habra ejecucion
     * se ejecuta aquello que este dentro del useEffect
     */

/*     useEffect(() => {
      console.log('cambio en el estado del componente 1');
      console.log('Mostrando referencia al elemento del DOM')
      console.log(miRef)

    },[contador1]) */

    /**
     * caso3: ejecutar solo en algunos casos
     * ejemplo...solo cuando cambie contador 1 o 2
     * se ejecuta aquello que este dentro del useEffect
     */

    useEffect(() => {
      console.log('cambio en el estado del componente 1 o 2');
      console.log('Mostrando referencia al elemento del DOM')
      console.log(miRef)

    },[contador1, contador2])
    


  return (
    <div>
        <h1>Ejemplo useState,useref y useEffect</h1>
        <h2>Contador1: {contador1}</h2>
        <h2>Contador2: {contador2}</h2>
        {/*Elemento Referenciado */}
        <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
        <button onClick={incrementar1}>Incrementar1</button>
        <button onClick={incrementar2}>Incrementar2</button>
        
    </div>
  )
}

export default Ejemplo2