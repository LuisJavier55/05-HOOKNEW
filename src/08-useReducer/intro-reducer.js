

// Debemos de generar el estado incial el cual va estar nuestro Reducer 

const estadoInicial = [{
    id:1,
    todo: 'Iluminado por el cielo',
    done: false
}]

//Mandar al estado inicial en el Reducer; reducer es una funcion que nos ayudara a mandar el estado
//al crear nuestra funcion, tendra dos argumentos el estado(state)donde enviaremos el estado inicial 
//y nuestra accion(action) es la accion que queramos que haga, agregar, eliminar, modifiar etc
    const todoReducer = (state = estadoInicial, action = {}) =>{

        //! este paso es el ultimo 
        // se agregara una condicion para saber si nuestro nuevo estado llega, con nuestro accion creada (addTodoAction)
        // si nuestro tipo de accion es iagual ?
        if (action.type === '[TODO] agregar todo'){

            //retorna el estado anterior(initiaState)con spread y el estado nuevo
            return[...state, action.payload]
        }

        //retornaremos nuestro estado inicial 
        return state;
    }

    //enviamos nuestro reducer a una variable
    let todos = todoReducer()


    //creamos un nuevo estado el cual se enviara para que se añada
    const NewEstado = {
        id:2,
        todos:'este es el nuevo cielo',
        done: false
    }

    // se agregara la accion la cual pasaremos en nuestro Reducer

    const addTodoAction = {
        type: '[TODO] agregar todo', // string que nos indica que accion esta ejecutando
        payload: NewEstado  //es el nuevo objeto que se va integrar (estado)
    }
    
    // se manda a llamar el Reducer agregando nuesta variable anterior donde se almaceno el estado inicial
    // ademas en nuestra funcion agregamos la accion la cual es agregar el siguiente elemento
    todos = todoReducer(todos, addTodoAction)


    console.log({stado:todos});
    
