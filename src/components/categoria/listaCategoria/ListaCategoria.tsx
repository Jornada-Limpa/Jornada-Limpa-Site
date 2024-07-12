import React, { useContext, useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { buscar } from '../../../service/Service';
import Categorias from '../../../model/Categoria';
import CardCategorias from '../cardCategoria/CardCategoria';
import  { DNA }  from 'react-loader-spinner';
import {toastAlerta} from '../../../util/toastAlerta'


function ListaCategorias() {
  const [categorias, setCategorias] = useState<Categorias[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarCategorias() {
    try {
      await buscar('/categorias', setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        toastAlerta('O token expirou, favor logar novamente','info')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    if (token === '') {
      toastAlerta('Você precisa estar logado','erro');
      navigate('/login');
    }
  }, [token]);

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);
  return (
    <>
      
      <div className='min-h-32 flex items-center justify-center'>

        <Link to={`/cadastroCategoria`} className='bg-indigo-900 py-3 px-3 rounded-xl text-white font-title text-sm'>
          <button>CADASTRAR CATEGORIA</button>
        </Link>

      </div>

        <div className='flex justify-center'>

            {categorias.length === 0 && (
            <DNA
            visible={true}
            height="200"
            width="200"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
            />
            )}

        </div>
      

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <>
                <CardCategorias key={categoria.id} categoria={categoria} />
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;