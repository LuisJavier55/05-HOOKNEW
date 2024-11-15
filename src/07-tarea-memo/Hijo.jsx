/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */


// eslint-disable-next-line no-unused-vars
import  { memo } from "react";


export const Hijo = memo(({ numero, incrementar }) => {

    console.log(`  Me volví a generar :(  ${numero} `);

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
})
