import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallbackHook = () => { // funcion componenete 
    
    const [contador, setContador] =  useState(10);
    /**Sintaxis de useCallback
      useCallback (()=>{
        first: funcion la cual que queremos llamar
        },
        [second: parametro que solo se va a llamar una vez ingresado ]
        )
     */

    const IncrementFather = useCallback(
      (argument)=>{ // esta funcion se llama a showIcrement como incremetar, para que nosotros podamos agregar argumento se situa en esta funcion
      console.log('use callback'); 
      setContador((val) => val + argument)
    },
    [],)
    
    

  return (
    <>
    <h1>Contador con Callback: {contador} </h1>
    <hr />

    <ShowIncrement incrementar={IncrementFather} />
    </>
  )
}


