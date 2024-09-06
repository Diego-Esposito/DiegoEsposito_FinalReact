import './Seccion.css';
import fotoJarron from '../../assets/img/foto_jarron.jpg';
import Boton from '../boton/Boton';
import {Link} from "react-router-dom"


function Seccion() {

    return(
        <section className="seccion">
            <h2>Sobre nosotros</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto similique, suscipit reprehenderit mollitia incidunt voluptatem fugit! Sed nihil totam molestias eum vero, quibusdam saepe consectetur dicta unde et asperiores sit.</p>
            <img src={fotoJarron} alt="fotoJarron" /> <br></br>
          
           
            <Link to="/articulos">Ver Detalle</Link>
        </section>
    )
}

export default Seccion;