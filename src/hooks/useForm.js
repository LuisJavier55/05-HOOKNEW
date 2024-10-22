import { useState } from "react";


export const useForm = (valorinicial={}) => {


    const [objet, setObjet] = useState(valorinicial);
    


      const onInputCange = ({target}) =>{ //Funcion de escucha; obtener los valores escritos de los imput 
    
        const {name,value} = target; //desetructuracion  de target; obteniendo nombre y valor de nuestro input 
        console.log({name,value});
        
        setObjet({ // cambio al renderizar 
          ...objet, 
          [name]:value // propiedad computada; cambia el valor del componente renderiado 
        })
    
      }

      const restablValor = ()=>{
        //primera forma de borrar datos del input es enviando el objerto con sus valores vacios
                        /* setObjet({
                                username:'',
                                email:'',
                                password:''
                            })*/

        //segunda forma otorgando el valor inicial que tenemos en nuestro useForm, es es objeto vacio 

        setObjet(valorinicial)

      }

  return {
    ...objet,
    objet,
    onInputCange,
    restablValor
  }
}


