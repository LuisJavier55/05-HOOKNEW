/* eslint-disable no-unused-vars */

import { useEffect } from "react";
import { useCounterMine, useFetch } from "../hooks"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";


export const MultipleCustomHook = () => {

    const {CHCounter, Suma, Resta} = useCounterMine(1) // Se agrego el CustomHook de Contar. Pd: los Hooks al enviar los valores se envian como objeto 
    
    const {data,loading,hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${CHCounter}`, ); // se Agrego el CustomHook Fetch

  return (
    <>
    
    <h1>MultipleCustomHook</h1>
   
    <hr />
{/* Condicion la cual si Carga=[true] se queda cargando el contenedor y sino envia la tarjeta de pokemon
    se Hace un componente para la tarjeta de pokemon  en el cual envia como Promp [id,nombre,sprite] desde useFetch y useContador
  	Sprite se manda los datos el cual para sacar valores se llama el dato.sprite
*/}
    {loading ? 
    <LoadingMessage/>
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

    {/* se agrego useContador con el proposito de estar seleccionando la imagen tomando como referencia el id 
      	useContador(1) inicializamos con el numero 1 
    */}
    <button 
    className="btn btn-primary mt-2" 
    // se hace una condicion cortocircuito con el proposito de si el contador es menor a cero se envia nulo el valor 
    // y deja de funcionar el boton 
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


