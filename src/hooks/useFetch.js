import { useEffect, useState } from "react"

const localCache = {} //objeto donde se van almacenar nuestros cache 

export const useFetch = (url) => {

    const [estado, setEstado] = useState({//envia el useState del objeto 
        data:null,
        loading:true,
        hasError:false,
        error: null
    });

    useEffect(()=>{
    getDato();
    },[url]);

    const setLoading = () =>{ // funcion que ayuda a saber si los parametros son correcto y carga 
        setEstado({
            data:null,
            loading:true,
            hasError:false,
            error: null
        })
    } 

    const getDato = async() =>{ // funcion asincrona para dar datos  

        if(localCache[url]){ //si exixte cache  envialo como dato 
            setEstado({
                data:localCache[url],
                loading:false,
                hasError:false,
                error:null
            });
            return;
        }
        
        setLoading();

        const resp = await fetch(url); // url desde nustro componente 

        
        await new Promise(resolve => setTimeout(resolve,1000))      // promesa que actua como un sleep(tarda sieto tiempo en cargar)


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
        console.log(dato);
        
        setEstado({
            data:dato,
            loading:false,
            hasError:false,
            error:null
        })

        localCache[url] = dato; // dato se almacena en nuestro localCache objeto

        console.log(localCache);
        
        
    }

   

  return {
    data:estado.data,
    loading:estado.loading,
    hasError:estado.hasError,
  }
}


