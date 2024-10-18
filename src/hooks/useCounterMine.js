import { useState } from "react"

export const useCounterMine = (valorInicial = 10) =>{

    const [CHCounter, setChCounter] = useState(valorInicial);

    
    const Suma = (valor = 0) => {  //enviando valor desde el evento onClick
        setChCounter(CHCounter + valor)

    }

    const Reset = () => { // valor inicial de resultado 10
        setChCounter(valorInicial)
    }


    const Resta = () => { // resta al precionar onclick
        if(CHCounter === 0 ) return ; // si llega a cero el boton ya no retrocede 
        setChCounter(CHCounter - 1)

    }



    return [CHCounter, Suma, Reset,Resta] // enviar variable y funciones en Hook Custom

}