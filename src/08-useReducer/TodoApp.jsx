import { useReducer } from "react"
import { todoReducer } from "./todoReducer"

//-3-Creamos nuestro estado inicial
const estadoInicial = [{
  id:1,
  descripcion: "Primer Estado",
  done: false 
},
{
  id:2,
  descripcion: "Segundo Estado",
  done: false 
}]

export const TodoApp = () => {
//-2- creamos nuestro useReducer(funcion/Reducer, Estado)

   const [todos, dispatch] = useReducer(todoReducer,estadoInicial)


  return (
    <>
    <h1>Todo App(10) <small>Pendientes:2</small></h1>

    <hr />


    <div className="row">
      <div className="col-7">
        <ul className="list-group">
          {/* Listar los elemtos de nuestro Reducer llamados todos(la cantidad que tengamos en nuestro estado inicial) */}
          {
            
              todos.map(todo =>(
              <li key={todo.id} className="list-group-item d-flex justify-content-between">
                  <span className="align-self-center">Item 1</span>
                  <button className="btn btn-danger">Borrar</button>
              </li>
              ))
          }
        </ul>
      </div>
      <div className="col-5">
        <h4>Agregar TODO</h4>
          <hr />
          <form>
            <input 
            type="text"
            placeholder="¿Que hay que hacer"
            className="form-control"
            />

            <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>

          </form>
      </div>
    </div>
    <ul>
        <li>Objeto 1</li>
        <li>Objeto 2</li>
        <li>Objeto 3</li>
    </ul>
    </>
  )
}


