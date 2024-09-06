import './Articulo.css';
import Carrito from '../Shop/Carrito';



function Articulo (props){
  
    return(
        <section className="articulo">
            <h2>{props.articulo}</h2>
            <p>{props.id}</p>
            <p>{props.estilo}</p>
            <img src={props.imagen} alt={props.articulo} />
            <h3>Precio ${props.precio}</h3>
            <Carrito />  
            
        </section>
    )
   
}
export default Articulo;
