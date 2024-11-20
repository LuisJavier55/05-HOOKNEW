/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */


// eslint-disable-next-line no-unused-vars
import  { memo } from "react";


export const Hijo = memo(({ numero, incrementar }) => { // props valor nuemro y funcion 

    console.log(`  Me volví a generar :(  ${numero} `);

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) } // se envia el argumento a nuestro padre donde esta nuestra funcion 
        >
            {/* Devuelve los numeros en botones  */}
            { numero }  
        </button>
    )
})
