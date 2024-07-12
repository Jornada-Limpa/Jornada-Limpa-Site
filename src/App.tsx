import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Contato from './pages/contato/Contato';
import Home from './pages/home/Home';
import Sobre from './pages/sobre/Sobre';

import Login from './pages/login/Login';
import Cadastro from './pages/cadastro/Cadastro';
import { AuthProvider } from './context/AuthContext';
import Trocas from './pages/trocas/Trocas';
import Seguranca from './pages/seguranca/Seguranca';
import Entrega from './pages/entrega/Entrega';
import Compra from './pages/compra/Compra';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import ListaCategoria from './components/categoria/listaCategoria/ListaCategoria';
import DeletarCategoria from './components/categoria/deletarTema/DeletarCategoria';
import EditarCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import ListaProdutos from './components/produto/listaProduto/ListaProdutos';
import FormularioProduto from './components/produto/formularioProduto/FormularioProduto'
import DeletarProduto from './components/produto/deletarProduto/DeletarProduto';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <AuthProvider>
      <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/contato" element={<Contato />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/trocas" element={<Trocas />} />
              <Route path="/entrega" element={<Entrega />} />
              <Route path="/seguranca" element={<Seguranca />} />
              <Route path="/compra" element={<Compra />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/categorias" element={<ListaCategoria />} />
              <Route path="/editarCategoria/:id" element={<EditarCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route path="/editarProduto/:id" element={<FormularioProduto />} />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
