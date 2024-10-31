import { useRef } from "react"


export const FocusScreen = () => {

    const InputReferencia = useRef (); //La funcion useRef hace referencia al Input gracias al valor current que tiene 

    const refeBoton = () => {
        console.log(InputReferencia.current.value)// imprime el valor de lo que tiene input 
    }

  return (

    <>
    <h1>Focus Screen</h1>
    <hr />
    {/* contenido de un input para agregar la referencia */}
    <input 
    ref={InputReferencia} //agregamos la variable que hara referencia con el Input 
    type="text"
    placeholder="Ingrese el nombre" 
    className="form-control"/>

    <button 
    className="btn btn-primary mt-2"
    onClick={refeBoton}
    >Set Focus</button>
    </>
  )
}


