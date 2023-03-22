import Postagem from "./Postagem";

interface Tema{
    id: number;
    tema: string;
    postagens?: Postagem[] | null
}

export default Tema;