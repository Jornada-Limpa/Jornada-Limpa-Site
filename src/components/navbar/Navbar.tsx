import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BsPencilSquare } from 'react-icons/bs';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { MdExitToApp } from 'react-icons/md';
import { HouseLine, UserCirclePlus, CaretDown, UserCircleCheck } from '@phosphor-icons/react';
import "./Navbar.css";


function Navbar() {
  let navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const [showSubMenu, setShowSubMenu] = useState(false);


  function logout() {
    handleLogout();
    alert('Usuario deslogado com sucesso');
    navigate('/login');
  }

  return (
    <div className='navbar w-full text-white'>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to='/' className='text-2xl font-bold uppercase flex items-center'>
            <HouseLine size={32} className="mr-1" />
            <span>Jornada Limpa</span>
          </Link>

          <div className='relative flex gap-5'>

            <Link to='/categorias' className="flex items-center">
              Categoria
            </Link>
            <Link to='/produtos' className="flex items-center">
              Produto
            </Link>
            <div
              className='nav-item relative'
              onMouseEnter={() => setShowSubMenu(true)}
              onMouseLeave={() => setShowSubMenu(false)}>

              {!usuario.token && (
                <>
                  <span><UserCirclePlus size={40} /><CaretDown size={16} weight="fill" /></span>
                  {showSubMenu && (
                    <div className="dropdown-list">
                      <ul>

                        <li>
                          <Link to='/login' className="flex items-center">
                            <BsPencilSquare size={16} className="mr-1" /> Login
                          </Link>
                        </li>
                        <li>
                          <Link to='/cadastro' className="flex items-center">
                            <BsPencilSquare size={16} className="mr-1" /> Cadastro
                          </Link>
                        </li>

                      </ul>
                    </div>
                  )}
                </>
              )}
              {usuario.token && (
                <>
                  <div className='flex items-center gap-2'>
                    <img src={usuario.foto} alt="" className='h-[42px] w-[42px] bg-white rounded-full'/>
                    <b>Olá, {usuario.nome}</b>
                  </div>
                  {showSubMenu && (
                    <div className="dropdown-list">
                      <ul>

                        <li>
                          <span onClick={logout} className="flex items-center cursor-pointer">
                            <MdExitToApp size={16} className="mr-1" /> Sair
                          </span>
                        </li>
                        <li>
                          <Link to='/sobre' className="flex items-center">
                            <IoInformationCircleOutline size={16} className="mr-1" /> Sobre
                          </Link>
                        </li>

                      </ul>
                    </div>
                  )}
                </>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;