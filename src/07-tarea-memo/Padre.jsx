/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }
    // usamos useCallback para que nuestra funcion pase solamente en el cambio o renderizacion
    const incrementar = useCallback((num)=>{
        setValor( (valor) => valor + num )
    },[])

    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />
            {/* se hace un mapeo de nustro array envuiandolas cada uno de nuestros valores como props, y convertirlos en botones */}
            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
