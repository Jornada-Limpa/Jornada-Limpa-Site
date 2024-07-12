import { Link } from 'react-router-dom'
import Produto from '../../../model/Produto'
import { DotsThreeOutline, Trash, Pencil,Basket,ShoppingCartSimple } from '@phosphor-icons/react';
import { useState } from 'react';

interface CardProdutoProps {
	produto: Produto
}

function CardProduto({ produto }: CardProdutoProps) {

	const [mostrarOpcoes, setMostrarOpcoes] = useState(false);

	const toggleOpcoes = () => {
		setMostrarOpcoes(!mostrarOpcoes);
	};


	return (

		<div className='border-slate-900 border bg-orange-200 flex flex-col rounded overflow-hidden justify-between '>
			<div className='flex justify-end'>
				<button
					className=' cursor-pointer focus:outline-none z-10'
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
									to={`/editarProduto/${produto.id}`}
									className='flex items-center text-gray-800 hover:bg-gray-200 px-4 py-2'
								>
									<Pencil size={16} /> Editar
								</Link>
							</li>
							<li>
								<Link
									to={`/deletarProduto/${produto.id}`}
									className='flex items-center text-red-800 hover:bg-red-200 px-4 py-2'
								>
									<Trash size={16} /> Deletar
								</Link>
							</li>
						</ul>
					</div>
				)}
			</div>

			<div>
				<div className='p-4 bg-orange-200'>
					<img src={produto.foto} alt="foto do produto" className='max-h-[800px]' />
					<h4 className='text-lg font-semibold uppercase mb-3'>{produto.categoria?.tipo} {produto.produto}, {produto.cor}</h4>
					<p>TAMANHO - {produto.tamanho}</p>
					<p>POR APENAS R${produto.preco}</p>
				</div>
			</div>
			<div className='flex justify-end'>
				<button className='bg-green-700 m-4 rounded text-white flex items-center p-2 gap-2'><ShoppingCartSimple size={32} /> COMPRAR</button>
			</div>
			

		</div>
	)
}

export default CardProduto;