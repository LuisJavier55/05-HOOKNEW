import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"


export const CallbackHook = () => {
    
    const [contador, setContador] =  useState(10);

    const IncrementFather = useCallback(
      ()=>{
      console.log('use callback'); 
      setContador((val) => val + 1)
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


