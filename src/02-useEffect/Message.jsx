import { useEffect, useState } from "react"


export const Message = () =>{

    const [corde, setCorde] = useState({x:0,y:0})

    const onMouseMove =({x, y}) =>{ // esto nos ayuda a capturar el evento en una funcion de movimiento de raton  
        const cordenadas = {x, y};
        console.log(cordenadas);
        
        //enviar las cordenadas por useState con el fin de ingresarlas en el html 
        setCorde(cordenadas)
        
    }

    useEffect(()=>{
            
        window.addEventListener('mousemove',onMouseMove)// Agrega  la funcion 
            
        return()=>{

        window.removeEventListener('mousemove',onMouseMove) //Remueve la funcion 

//En este caso este remove no funcionaria ya que no tenemos el mismo espacio de memoria, lo que 
//podemos hacer es llamarla desde la funcion ONMOUSEMOVE por referencia
    // --MAL
/*   window.removeEventListener('mousemove',()=>{
     console.log('se elimino joto');   
    })
*/   
        }
    },)



  return (
    <>
    <h1>Usuario ya Existe</h1>
    <p>{JSON.stringify(corde)}</p>
    </>
  )
}


