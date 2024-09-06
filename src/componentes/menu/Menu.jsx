import {Link} from "react-router-dom"
import './Menu.css';

const Menu = () => {
    return(
        <nav className="menu">
            <ul className="itemMenu">
                <li className="item"><Link to="/"> Inicio </Link></li>
                <li className="item"><Link to="/articulos"> Articulos </Link></li>
                <li className="item"><Link to="/Formulario"> Formulario </Link></li>
            </ul>
        </nav>
    )
}
export default Menu;