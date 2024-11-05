/* eslint-disable react/prop-types */

import { useLayoutEffect, useRef, useState } from "react"

//                               Prom enviados desde MultipleCusHoo
export const PokemonCard = ({id, nombre, sprites=[] }) => {
  
  const hRef = useRef()
  //obtner los datos de altura y anchura inicializando con 0 m
  const [caja, setCaja] = useState({height:0, width:0})
// useLayoutEffect es similar a lo que es USEEFFECT ya que envia lo que se va ejecutar anetes de la renderizacion 
  useLayoutEffect(()=>{
    	console.log(hRef.current.getBoundingClientRect());
      //desestructuracion de la anchura y altura 
      const {height, width} = hRef.current.getBoundingClientRect();
      console.log(height, width);
      // al renderizar envia los parametros a caja
       setCaja({height, width})
      
  },[nombre])

  return (
    //se hace una secion la cual tendra un estilo de altura de 200 
    <>
    <section style={{height:200, display:"flex" }}> 
    {/* subtitulo con los promp */}
        <h2 
        ref={hRef} 
        className="text-capitalize"
        >#{id}-{nombre}</h2>

        {/* Imagenes  */}
        <div>
            {
                sprites.map(sprit =>( //hace un recorrido del areglo que se envio  
                    <img key={sprit} src={sprit} alt={nombre}   /> // inserta cada uno de los valores en cada imagen y sus reprectivos promp
                ))
            }
        </div>
    </section>
    {/* envia los datos obtenidos cuando se renderiza el nombre  */}
        <code>{JSON.stringify(caja)}</code> 
    </>
  )
}


