import './Header.css';
import fotoEstanteria from '../../assets/img/Foto_estanteria.jpeg';

function Header() {

    return(
        <header className="header">
            <h1>Ceramicas La Morera</h1>
            <img src={fotoEstanteria} alt="fotoJarron" />
        </header>
    )
}

export default Header;