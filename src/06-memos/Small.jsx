/* eslint-disable react/display-name */   //   -> es fundamental esta linea para que momo funcione bien y envuelva el componente sin errores
import { memo } from "react";



// eslint-disable-next-line react/prop-types
export const Small = memo(({value}) => { // se envieve el componente en memo con el fin de que no renderiza el valor ==> Memoriza este componente 
        console.log("se esta renderizando de nuevo :C");
        
      return (
        <small>{value}</small>
      );
    })




