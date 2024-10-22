/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import { useFetch } from "../hooks"


export const MultipleCustomHook = () => {

  
    
    const {data,loading,hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/2`, );

  return (
    <>
    
    <h1>MultipleCustomHook</h1>
   
    <hr />

    {
        loading && <p>Cargando...</p>
    }
    <h2>{data?.name}</h2>


  
    </>
  )
}


