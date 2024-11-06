import { useState } from "react"
import { useCounterMine } from "../hooks"
import { Small } from "../06-memos/Small"


export const Memorize = () => {

    const { CHCounter, Suma } = useCounterMine(10)
    const [ mostrar, setMostrar ] = useState(true)

  return (
    <>
    {/* componente Small donde se memorizara  */}
    <h1>Contador: <Small value={CHCounter}/></h1>
    
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

