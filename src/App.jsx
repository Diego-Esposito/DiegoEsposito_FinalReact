import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './componentes/header/Header'
import Seccion from './componentes/section/Seccion'
import Footer from './componentes/footer/Footer'
import Menu from './componentes/menu/Menu'
import ListaArticulos from './componentes/articulos/ListaArticulos'
import Registro from './componentes/registro/Registro'
import Formulario from './componentes/formulario/Formulario'


function App() {
 

  return (
    <Router>
    <Header />
     
    <Menu />
    <main>
      <Routes>
        <Route path='/' element={<Seccion />}></Route>
        <Route path='/articulos' element={<ListaArticulos />}></Route>
        <Route path='/Registro' element={<Registro />}></Route>
        <Route path='/Formulario' element={<Formulario />}></Route>
        
      </Routes>
    </main>
    

    <Footer />
    </Router>
  )
}

export default App
