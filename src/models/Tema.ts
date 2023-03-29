import Postagem from "./Postagem";
import Usuario from './Usuario';

interface Tema{
    id: number;
    tema: string;
    postagens?: Postagem[] | null
    usuario?: Usuario | null //linha adicionada para vincular um usuário
  
}

export default Tema;