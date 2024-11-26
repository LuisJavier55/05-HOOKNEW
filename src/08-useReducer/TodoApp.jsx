import { useReducer } from "react"
import { todoReducer } from "./todoReducer"

//-3-Creamos nuestro estado inicial
const estadoInicial = [{
  id:1,
  descripcion: "Primer Estado",
  done: false 
}]

export const TodoApp = () => {
//-2- creamos nuestro useReducer
   const [stado, dispatch] = useReducer(todoReducer,estadoInicial)


  return (
    <>
    <h1>Todo App</h1>

    <hr />

    <ul>
        <li>Objeto 1</li>
        <li>Objeto 2</li>
        <li>Objeto 3</li>
    </ul>
    </>
  )
}


