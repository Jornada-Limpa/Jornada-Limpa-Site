import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Categoria from '../../../model/Categoria';
import { DotsThreeOutline, Pencil, Trash } from '@phosphor-icons/react';
import './CardCategoria.css';

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  const [mostrarOpcoes, setMostrarOpcoes] = useState(false);

  const toggleOpcoes = () => {
    setMostrarOpcoes(!mostrarOpcoes);
  };

  return (
    <div className='border flex flex-col rounded-2xl overflow-hidden justify-between relative'>
      <div className='container columns-2 bg-indigo-800'>
        <header className='py-2 px-6 text-white font-title text-2xl'>Categoria {categoria.id}</header>
        <button
          className='absolute top-2 right-2 text-white cursor-pointer focus:outline-none z-10'
          onClick={toggleOpcoes}
        >
          <DotsThreeOutline size={32} />
        </button>
      </div>
      <div className='relative'>
        {mostrarOpcoes && (
          <div className='dropdown-list-c'>
            <ul>
              <li>
                <Link
                  to={`/editarCategoria/${categoria.id}`}
                  className='flex items-center text-gray-800 hover:bg-gray-200 px-4 py-2'
                >
                  <Pencil size={16} /> Editar
                </Link>
              </li>
              <li>
                <Link
                  to={`/deletarCategoria/${categoria.id}`}
                  className='flex items-center text-red-800 hover:bg-red-200 px-4 py-2'
                >
                  <Trash size={16} /> Deletar
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.tipo}</p>
    </div>
  );
}

export default CardCategorias;