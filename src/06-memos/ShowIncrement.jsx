/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

import { memo } from "react";


export const ShowIncrement = memo(({ incrementar }) => {

    console.log('se vuelve a repetir');
    
    
  return (
    <>
    <button
    className="btn btn-primary"
    onClick={incrementar}
    >
        INCREMENTAR
    </button>

   
    </>
  )
})


