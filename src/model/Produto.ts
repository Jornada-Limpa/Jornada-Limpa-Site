import Categoria from './Categoria';

export default interface Produto {
  id: number;
  produto: string;
  preco: number;
  tamanho: string;
  material: string;
  cor: string;
  foto: string;
  categoria: Categoria | null;
}