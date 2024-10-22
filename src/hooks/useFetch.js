import { useEffect, useState } from "react"


export const useFetch = (url) => {

    const [estado, setEstado] = useState({//envia el useState del objeto 
        data:null,
        loading:true,
        hasError:false,
        error: null
    });


4
    useEffect(()=>{

    getDato();

    },[url]);
    
    const getDato = async() =>{ // funcion asincrona para dar datos  

        const resp = await fetch(url); // url desde nustro componente 
//si la respuesta es invalida envia el objeto con los siguentes valores 
        if(!resp.ok){
            setEstado({
                data:null,
                loading:false,
                hasError:true,
                error:{
                    code:resp.status, //envio de respuesta
                    message:resp.statusText //mensaje
                }
            })
            return;// si esto pasa no devuleve nada 
        }

        const dato = await resp.json();//en cambio si la respueta es valida envia el dato a un objeto

        setEstado({
            data:dato,
            loading:false,
            hasError:false,
            error:null
        })
        
    }

   

  return {
    data:estado.data,
    loading:estado.loading,
    hasError:estado.hasError,
  }
}


