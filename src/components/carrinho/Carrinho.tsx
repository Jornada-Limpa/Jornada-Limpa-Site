import { useContext, useEffect } from "react";
import { CarrinhoContext } from "../../context/CarrinhoContext";
import { toastAlerta } from "../../util/toastAlerta";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Carrinho() {
  const { listaCarrinho } = useContext(CarrinhoContext);
  const { adicionarItem } = useContext(CarrinhoContext);
  const { diminuirQuantidade } = useContext(CarrinhoContext);
  const { removerItem } = useContext(CarrinhoContext);
  const { finalizarCompra } = useContext(CarrinhoContext);
  const { usuario, handleLogout } = useContext(AuthContext);

  //basicamente um for
  const calcularSomaTotal = (itens) => {
    return itens.reduce((acc, item) => acc + item.preco * item.qtd, 0);
  };

  const somaTotal = calcularSomaTotal(listaCarrinho);

  const calcularQntItens = (itens) => {
    return itens.reduce((acc, item) => acc + item.qtd, 0);
  };

  const somaQnt = calcularQntItens(listaCarrinho);

  const token = usuario.token;
  let navigate = useNavigate();
  useEffect(() => {
    if (token === '') {
      toastAlerta('Loga ai pivete');
      navigate('/login');
    }
  }, [token]);

  return (
    <>
      <div className="grid grid-cols-2">
        <div>
          {listaCarrinho.map((item) => (
            <div
              key={item.id}
              className="flex gap-5 items-center bg-white m-5 p-3"
            >
              <img src={item.foto} alt="" className="max-h-20" />
              <div>
                <h1>{item.produto}</h1>
                <h2>
                  cor: {item.cor}, tamanho: {item.tamanho}
                </h2>
                <button
                  className="bg-red-500 rounded-lg text-white flex items-center"
                  onClick={() => removerItem(item)}
                >
                  Remover
                </button>
              </div>
              <div className="bg-indigo-100 flex gap-3 items-center max-h-10 border border-black rounded-lg">
                <button
                  className="bg-white rounded-lg flex items-center px-4 gap-1"
                  onClick={() => diminuirQuantidade(item)}
                >
                  -
                </button>
                <h1>{item.qtd}</h1>
                <button
                  className="bg-white rounded-lg flex items-center px-4 gap-1"
                  onClick={() => adicionarItem(item)}
                >
                  +
                </button>
              </div>
              <h1>R$ {item.preco * item.qtd}</h1>
            </div>
          ))}
        </div>

        <div className="bg-white max-h-40 max-w-[80%] m-5 p-3 border gap-10">
            <div className="flex border-b-2">
                <h1 >Resumo da compra</h1>
            </div>
          

          <div className="flex gap-40 my-3">
            {somaQnt > 1 && <h2>Produtos ({somaQnt})</h2>}
            {somaQnt === 1 && <h2>Produto</h2>}
            <h2>Total: R$ {somaTotal}</h2>
          </div>
          <div className="flex my-3">
            <h2>Frete:</h2>
            <h2 className="text-green-700 flex">Grátis</h2>
          </div>

          <button
            className="rounded-lg flex items-center px-4 gap-1 bg-green-600"
            onClick={() => finalizarCompra() }
          >

            FINALIZAR COMPRA
          </button>
        </div>
      </div>
    </>
  );
}

export default Carrinho;
