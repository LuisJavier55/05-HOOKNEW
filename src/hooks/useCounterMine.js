import { useState } from "react"

export const useCounterMine = (valorInicial=10) =>{

    const [CHCounter, setChCounter] = useState(valorInicial);

    
    const Suma = () => {  //enviando valor desde el evento onClick
        setChCounter(CHCounter + 1)
        console.log(CHCounter);

    }

    const Reset = () => { // valor inicial de resultado 10
        setChCounter(valorInicial)
    }


    const Resta = () => { // resta al precionar onclick
        // if(CHCounter === 0 ) return ; // si llega a cero el boton ya no retrocede 

        console.log(CHCounter);
        setChCounter(CHCounter - 1)
    }



    return {CHCounter, Suma, Reset,Resta} // enviar variable y funciones en Hook Custom

}