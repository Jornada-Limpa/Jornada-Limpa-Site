import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import './Login.css';

import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../context/AuthContext';
import UsuarioLogin from '../../model/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
  let navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({} as UsuarioLogin);
  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== "") {
      navigate('/');
    }
  }, [usuario, navigate]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  function irParaCadastro() {
    navigate('/cadastro');
  }

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-lg">
        <form className="flex flex-col gap-6" onSubmit={login}>
          <h2 className="text-4xl text-gray-800 font-bold mb-4 text-center">Entrar</h2>
          <div className="w-full">
            <label htmlFor="usuario" className="block text-sm font-medium text-gray-700">Usuário</label>
            <input
              type="text"
              id="usuario"
              name="email"
              placeholder="Usuário"
              className="border-2 border-gray-300 rounded p-2 w-full"
              value={usuarioLogin.email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="w-full">
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Senha"
              className="border-2 border-gray-300 rounded p-2 w-full"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
            />
          </div>
          <div className="relative">
            <button type='submit' className="rounded bg-indigo-500 hover:bg-indigo-700 text-white py-2 w-full">
              <span className={isLoading ? 'opacity-0' : 'opacity-100'}>Entrar</span>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                  />
                </div>
              )}
            </button>
          </div>
          <hr className="border-gray-300 w-full my-6" />
          <p className="text-center">
            Ainda não tem uma conta?{' '}
            <Link to="/cadastro" className="text-indigo-800 hover:underline" onClick={irParaCadastro}>
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
