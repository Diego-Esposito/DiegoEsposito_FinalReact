import './Boton.css';
import {Link} from "react-router-dom"

function Boton(props) {
    const estiloBoton = {
        backgroundColor: props.color,
    }

    return(
        <div >
            <button style={estiloBoton} onClick={props.onClick} className='boton'></button>
          
        </div>
    )
}

export default Boton;