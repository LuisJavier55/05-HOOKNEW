/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { memo } from "react";


export const ShowIncrement = memo(({ incrementar }) => { // funcionProps que recibe como argumento Increment

    console.log('se vuelve a repetir');
    
    
  return (
    <>
    <button
    className="btn btn-primary"
    onClick={()=>{
      incrementar(5) // al precionar tomara la funcionProps, el argumento se recibe en CallbackHook
    }} 
    >
        INCREMENTAR
    </button>

   
    </>
  )
})


