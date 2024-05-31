import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from './components/Inicio'
import  AboutPage from "./components/AboutPage";
import ContactPage  from './components/ContactPage'
import HomePage from './components/HomePage'

function App() {
  //Constantes para desplegar menu
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className="grid-container">
      <Routes>
        {/*Paginas principales*/}
        <Route path='/' element={<Inicio />}></Route>
        <Route path='/Clientes' element={<AboutPage />}></Route>
        <Route path='/AjusteInventario' element={<ContactPage />}></Route>
        <Route path='/Categorias' element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
