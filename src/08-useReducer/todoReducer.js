

export const todoReducer = (estadoInicial=[], action) =>{
    switch (action.type) {
        case "ABC":
            throw new Error ("Action denegada");       
            
        default:
            return estadoInicial;
    }

}


