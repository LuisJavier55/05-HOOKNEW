import { useState } from "react"


export const CounterApp = () => {

    const [stado, SetCouter] = useState({ //UseState se puede usar con objetos y arreglos 
        counter1 : 10,
        counter2 : 20,
        counter3 : 30,

    })

    const {counter1,counter2,counter3} = stado //decestructuracion de objeto 

  return (
    <>
    <h1>Counter: {counter1}</h1>
    <h1>Counter: {counter2}</h1>
    <h1>Counter: {counter3}</h1>


    <hr />

    <button className="btn" onClick={() => SetCouter({ //funcion onClick para cambiar un valor, SetCounter(funcion la cual vamos a cambiar el contador)
        ...stado, // valores del obajeto con un spread 
        counter1:counter1 + 1, // primer objeto sumandolo en contador mas 1 
        
    })}>+1</button>
    
    </>
  )
}


