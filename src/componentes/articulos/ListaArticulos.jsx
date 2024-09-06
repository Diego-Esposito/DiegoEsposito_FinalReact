import Articulo from './Articulo';
import articulos from './datosArticulos';



function ListaArticulos(){

   
    return(
        <div>
            {articulos.map((art, index) =>(
                <Articulo
                key={index}
                id={art.id}
                articulo={art.articulo}
                estilo={art.estilo}
                precio={art.precio}
                imagen={art.imagen}
                />
                
            ))}
   
        </div>
    );
}
export default ListaArticulos;

