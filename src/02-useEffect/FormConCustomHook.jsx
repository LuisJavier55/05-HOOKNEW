// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"


//componenete 
export const FormConCustomHook = () => {

// eslint-disable-next-line no-unused-vars
const {objet,onInputCange,username,email,password,restablValor} =  useForm({
  username:'',
  email:'',
  password:''
})




  return (
    <>
       
        <h1>Formulario con CustomHook</h1>
        
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
        placeholder="*****.***@gmail.com"
        name="email"
        value={email}
        onChange={onInputCange}/>

<input 
        type="password"
        className="form-control mt-2" 
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputCange}/>


   <button onClick={restablValor} className="btn btn-primary mt-2">Reset</button>
    
    </>
  )
}


