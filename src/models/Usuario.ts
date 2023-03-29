import Postagem from './Postagem';
import Tema from "./Tema";


interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  postagens?: Postagem[]; //linha adicionada para que o usuário possa ter um
  tema?: Tema[]; // 
  }
  export default Usuario