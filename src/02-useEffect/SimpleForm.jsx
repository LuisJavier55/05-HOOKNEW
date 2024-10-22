// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react"
import { Message } from "./Message";

//componenete 
export const SimpleForm = () => {

  const [objet, setObjet] = useState({ // en un UseState ingresamos como salida un objeto 
    username: "Luis",
    email : "luisja.m67@hotmail.com"
  })

  const {username,email} = objet; //Desestructuracion 
                        //evento onchage desestructurado 
  const onInputCange = ({target}) =>{ //Funcion de escucha; obtener los valores escritos de los imput 

    const {name,value} = target; //desetructuracion  de target; obteniendo nombre y valor de nuestro input 
    console.log({name,value});
    
    setObjet({ // cambio al renderizar 
      ...objet, 
      [name]:value // propiedad computada; cambia el valor del componente renderiado 
    })

  }
//UseEffect -- se ejecutara cuando email se esta modificando o se hace un cambio en la renderizacion 
  // useEffect(()=>{  
  //   console.log("Se ejecuta email al renderizar ")
  // },[email])

  return (
    <>
       
        <h1>Formulario Simple</h1>
        
        <hr />

        <input 
        type="text"
        className="form-control" 
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputCange}/>


<input 
        type="email"
        className="form-control mt-2" 
        placeholder="luisjav.more@gmail.com"
        name="email"
        value={email}
        onChange={onInputCange}/>


    {
      username === 'Luis1' && <Message/> //condicion if, solo devolvera verdadero por las &&
    }
    
    </>
  )
}


