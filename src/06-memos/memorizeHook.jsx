import { useState } from "react"
import { useCounterMine } from "../hooks"
import { useMemo } from "react";

function heavyStuff(numeroItera=100) {
    for (let i = 0; i < numeroItera; i++) {
        console.log('ay vamos ..');
        
    }
    return `${numeroItera} iteraciones realizadas`
}



export const MemoHook = () => {

    const { CHCounter, Suma } = useCounterMine(700)
    const [ mostrar, setMostrar ] = useState(true)
    /* sintaxis de USEMEMO
    useMemo(() => first: valor que va devolver algo, [second:va hacer algo si las dependecias cambian])
    */
   // este caso emorize memoriza el valor que se va ejecutar, llamamos la funcion que nos devovera el log de la funcion y solo funcionara cuando el contador cambie
   //el otro boton ya no se ejecutara ya que solo esta renderizando el CHcouter, solo aplica en tareas pesadas que se ejecutaran pocas veces
    const memorizeValue = useMemo(()=> heavyStuff(CHCounter),[CHCounter])



  return (
    <>
    {/* componente Small donde se memorizara  */}
    <h1>Contador: <small>{CHCounter}</small> </h1>

    <hr />

    <h4>{memorizeValue}</h4>
    
    {/* boton renderizado */}
    <button 
    className="btn btn-primary"
    onClick={() => Suma()}
    >
        +1
    </button>

    <br />
    {/* boton que tendra el valor en memoria con memo */}
    <button
    className="btn btn-outline-primary"

    onClick={()=>setMostrar(!mostrar)}> {/* cambia al oprimirlo  */}
        Show/Hide {JSON.stringify(mostrar)}
    </button>
    </>
  )
}

