import React, { useContext, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import Produto from '../../../model/Produto';
import { buscar } from '../../../service/Service'
import CardProduto from '../cardProduto/CardProduto';
import { Dna } from '@phosphor-icons/react';


function ListaProdutosHome() {
  const [produto, setProduto] = useState<Produto[]>([]);
  //FILTRO
  const [filtro, setFiltro] = useState<Produto[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (token === '') {
      // era pra ter um alerta aqui, alguem coloque pfv!!!
      navigate('/');
    }
  }, [token]);

  async function buscarProdutos() {
    try {
      await buscar('/produtos/all', setProduto, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
        handleLogout()
      }
    }
  }
//deus pfv me ajuda
  useEffect(() => {
    buscarProdutos();
  }, [produto.length]);

  //FILTRO
  const filtredList = produto.filter((elements) => {
    if (filtro.toLocaleString() === '') {
      return elements
    } else {
      return elements.produto.toLowerCase().includes(filtro.toLocaleString()) || elements.categoria?.tipo.toLowerCase().includes(filtro.toLocaleString()) 
    }
  })

  return (
    <>
      {/* FILTRO AQUI */}

      <label className="flex items-center justify-center">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20"></svg>
        </span>
        <input onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setFiltro(event.target.value)
        }}
          className='border rounded border-black my-2 w-2/3 bg-gray-100 '
          type='text'
          placeholder="Buscar"
          name=''
          id='' />
      </label>

      {produto.length === 0 && (
        <Dna
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {filtredList.map((produto) => (
          <>
            <CardProduto key={produto.id} produto={produto} />
          </>
        ))}
      </div>
    </>
  );
}

export default ListaProdutosHome;