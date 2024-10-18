import { useCounterMine } from "../hooks/useCounterMine"


export const CounterWithCustomHook = () => {

    const [CHCounter, Suma,Reset,Resta] = useCounterMine(); //customHook 

  return (
    <>
    <h1>Counter with CustomHook</h1>
    <h2>{CHCounter}</h2>

    <hr />
              {/*la funcion OnClick envia el evento si ponemos el evento en la funcion (event) => funcion */}
              {/*si no pasamos un evento y solo le enviamos el parametro a la funcion(3) otorga el valor a funcion Suma   */}

    <button className="btn btn-primary" onClick={()=>Suma(3)}>+1</button>  
    <button className="btn btn-primary" onClick={Reset}>Reset</button>
    <button className="btn btn-primary" onClick={Resta}>-1</button>

    
    </>
  )
}

