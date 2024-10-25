/* eslint-disable react/prop-types */

//                               Prom enviados desde MultipleCusHoo
export const PokemonCard = ({id, nombre, sprites=[] }) => {
  return (
    //se hace una secion la cual tendra un estilo de altura de 200 
    <section style={{height:200}}> 
    {/* subtitulo con los promp */}
        <h2 className="text-capitalize">#{id}-{nombre}</h2>

        {/* Imagenes  */}
        <div>
            {
                sprites.map(sprit =>( //hace un recorrido del areglo que se envio  
                    <img key={sprit} src={sprit} alt={nombre}   /> // inserta cada uno de los valores en cada imagen y sus reprectivos promp
                ))
            }
        </div>
    </section>
  )
}


