import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/Home'
import Sobre from '../pages/sobre/Sobre'
import Login from '../pages/login/Login'

import Contato from "../pages/contato/Contato"
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer'
function Rotas() {
  return (
 <>
    < Navbar />
    <Routes> 
              <Route path="/Contato" element={<Contato />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/login" element={<Login />} />
      
    </Routes>
      < Footer />
   </>
  )
}

export default Rotas