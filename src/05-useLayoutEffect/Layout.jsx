/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import { useCounterMine, useFetch } from "../hooks"
import { LoadingMessage } from "../03-useFetch/LoadingMessage";
import { PokemonCard } from "../03-useFetch/PokemonCard";


export const Layout = () => {

    const {CHCounter, Suma, Resta} = useCounterMine(1) // Se agrego el CustomHook de Contar. Pd: los Hooks al enviar los valores se envian como objeto 
    
    const {data,loading,hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${CHCounter}`, ); // se Agrego el CustomHook Fetch

  return (
    <>
    
    <h1>MultipleCustomHook</h1>
   
    <hr />


    {loading ? 
    <LoadingMessage />
    :(
    <PokemonCard 
    id={CHCounter} 
    nombre={data.name}
    sprites={[
      data.sprites.front_default,
      data.sprites.front_shiny,
      data.sprites.back_default,
      data.sprites.back_shiny
    ]}
    />
    )
    }|



    <button 
    className="btn btn-primary mt-2" 

    
    onClick={()=> CHCounter > 1 ? Resta(): null  }  
    >Anterior
    </button>
    <button 
    className="btn btn-primary  mt-2"
    onClick={()=>Suma()}
    >
      Siguiente 
    </button>
  
    </>
  )
}





