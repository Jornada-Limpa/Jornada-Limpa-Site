import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import Produto from '../../../model/Produto';
import Categoria from '../../../model/Categoria';
import { buscar, atualizar, cadastrar } from '../../../service/Service';
import {toastAlerta} from '../../../util/toastAlerta'

function FormularioProduto() {
    let navigate = useNavigate();

    const { id } = useParams<{ id: string }>();
  
    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;
  
    const [categorias, setCategorias] = useState<Categoria[]>([]);
  
    const [categoria, setCategoria] = useState<Categoria>({
      id: 0,
      tipo: '',
    });
  
    const [produto, setProduto] = useState<Produto>({
        id: 0,
        produto: '',
        preco: 0,
        tamanho: '',
        material: '',
        cor: '',
        foto: '',
        categoria: null
    });
  
    async function buscarProdutoPorId(id: string) {
      await buscar(`/produtos/${id}`, setProduto, {
        headers: {
          Authorization: token,
        },
      });
    }
  
    async function buscarCategoriaPorId(id: string) {
      await buscar(`/categorias/${id}`, setCategoria, {
        headers: {
          Authorization: token,
        },
      });
    }
  
    async function buscarCategorias() {
      await buscar('/categorias', setCategorias, {
        headers: {
          Authorization: token,
        },
      });
    }
  
    useEffect(() => {
      if (token === '') {
        toastAlerta('Você precisa estar logado','info');
        navigate('/login');
      }
    }, [token]);
  
    useEffect(() => {
      buscarCategorias();
      if (id !== undefined) {
        buscarProdutoPorId(id);
        console.log(categoria);
  
      }
    }, [id]);
  
    useEffect(() => {
        setProduto({
        ...produto,
        categoria: categoria,
      });
    }, [categoria]);
  
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setProduto({
        ...produto,
        [e.target.name]: e.target.value,
        categoria: categoria
      });
    }
  
    function retornar() {
      navigate('/produtos');
    }
  
    async function gerarNovoProduto(e: ChangeEvent<HTMLFormElement>) {
      e.preventDefault();
  
      console.log({ produto });
  
      if (id != undefined) {
        try {
          await atualizar(`/produtos`, produto, setProduto, {
            headers: {
              Authorization: token,
            },
          });
          toastAlerta('Produto atualizado com sucesso','sucesso');
          retornar();
        } catch (error: any) {
          if (error.toString().includes('403')) {
            toastAlerta('O token expirou, favor logar novamente','info')
            handleLogout()
          } else {
            toastAlerta('Erro ao atualizar o Produto','erro');
          }
        }
      } else {
        try {
          await cadastrar(`/produtos`, produto, setProduto, {
            headers: {
              Authorization: token,
            },
          });
  
          toastAlerta('Produto cadastrado com sucesso','sucesso');
          retornar();
        } catch (error: any) {
          if (error.toString().includes('403')) {
            toastAlerta('O token expirou, favor logar novamente','info')
            handleLogout()
          } else {
            toastAlerta('Erro ao cadastrar o produto','erro');
          }
        }
      }
    }
  
    const carregandoCategoria = categoria.tipo === '';
  
    return (
      <div className="container flex flex-col mx-auto items-center">
        <h1 className="text-4xl text-center my-8">{id !== undefined ? 'Editar Postagem' : 'Cadastrar Postagem'}</h1>
  
        <form onSubmit={gerarNovoProduto} className="flex flex-col w-1/2 gap-4">

          <div className="flex flex-col gap-2">
            <label htmlFor="nome">Nome do produto</label>
            <input
              value={produto.produto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Produto"
              name="produto"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="preco">Preço do produto</label>
            <input
              value={produto.preco}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="number"
              placeholder="Preço"
              name="preco"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="nome">Tamanho</label>
            <input
              value={produto.tamanho}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Tamanho"
              name="tamanho"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="nome">Material</label>
            <input
              value={produto.material}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Material"
              name="material"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="nome">Cor</label>
            <input
              value={produto.cor}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Cor"
              name="cor"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="nome">Foto do produto</label>
            <input
              value={produto.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              type="text"
              placeholder="Foto"
              name="foto"
              required
              className="border-2 border-slate-700 rounded p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p>Categoria do produto</p>
            <select name="categoria" id="categoria" className='border p-2 border-slate-800 rounded' onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}>
              <option value="" selected disabled>Selecione uma categoria</option>
              {categorias.map((categoria) => (
                <>
                  <option value={categoria.id} >{categoria.tipo}</option>
                </>
              ))}
            </select>
          </div>
          <button disabled={carregandoCategoria} type='submit' className='rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto block py-2'>
            {carregandoCategoria ? <span>Carregando</span> : id !== undefined ? 'Editar' : 'Cadastrar'}
          </button>
        </form>
      </div>
    );
  }
  

export default FormularioProduto;