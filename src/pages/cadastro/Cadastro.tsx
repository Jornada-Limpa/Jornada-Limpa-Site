import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../model/Usuario';
import { cadastrarUsuario } from '../../service/Service';
import { toastAlerta } from '../../util/toastAlerta';

function Cadastro() {
  const navigate = useNavigate();

  const [confirmaSenha, setConfirmaSenha] = useState<string>('');

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    email: '',
    senha: '',
    foto: ''
  });

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    email: '',
    senha: '',
    foto: ''
  });

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back();
    }
  }, [usuarioResposta]);

  function back() {
    navigate('/login');
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta);
        toastAlerta('Usuário cadastrado com sucesso', 'sucesso');
      } catch (error) {
        toastAlerta('Erro ao cadastrar o Usuário', 'erro');
      }
    } else {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'info');
      setUsuario({ ...usuario, senha: '' }); // Reinicia o campo de Senha
      setConfirmaSenha(''); // Reinicia o campo de Confirmar Senha
    }
  }

  // Estilos para o formulário de cadastro
  const estiloFormulario = {
    maxWidth: '500px',
    width: '100%',
    padding: '2rem',
    backgroundColor: '#ffffff',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto', // Centraliza horizontalmente
    marginTop: '2rem' // Espaçamento superior
  };

  const estiloTitulo = {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '1.5rem',
    textAlign: 'center'
  };

  const estiloInput = {
    border: '2px solid #ccc',
    borderRadius: '4px',
    padding: '0.5rem',
    fontSize: '1rem',
    width: '100%',
    marginBottom: '1rem'
  };

  const estiloBotao = {
    cursor: 'pointer',
    fontSize: '1rem',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
    width: '100%'
  };

  const estiloBotaoHover = {
    ...estiloBotao,
    backgroundColor: '#4a90e2',
    color: '#fff'
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form style={estiloFormulario} onSubmit={cadastrarNovoUsuario}>
        <h2 style={estiloTitulo}>Cadastrar</h2>
        <div style={{ width: '100%' }}>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Nome"
            style={estiloInput}
            value={usuario.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div style={{ width: '100%' }}>
          <label htmlFor="usuario">E-mail</label>
          <input
            type="text"
            id="usuario"
            name="email"
            placeholder="E-mail"
            style={estiloInput}
            value={usuario.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div style={{ width: '100%' }}>
          <label htmlFor="foto">Foto (URL)</label>
          <input
            type="text"
            id="foto"
            name="foto"
            placeholder="URL da Foto"
            style={estiloInput}
            value={usuario.foto}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div style={{ width: '100%' }}>
          <label htmlFor="senha">Senha</label>
          <input
            type="password"
            id="senha"
            name="senha"
            placeholder="Senha"
            style={estiloInput}
            value={usuario.senha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div style={{ width: '100%' }}>
          <label htmlFor="confirmarSenha">Confirmar Senha</label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Confirmar Senha"
            style={estiloInput}
            value={confirmaSenha}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
          />
        </div>
        <div style={{ width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <button
              className="rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2"
              onClick={back}
              style={estiloBotao}
            >
              Cancelar
            </button>
            <button
              className="rounded text-white bg-indigo-400 hover:bg-indigo-900 w-1/2 py-2"
              type="submit"
              style={estiloBotaoHover}
            >
              Cadastrar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Cadastro;
