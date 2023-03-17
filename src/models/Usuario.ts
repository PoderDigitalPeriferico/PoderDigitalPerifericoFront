import Postagem from './Postagem';
interface Usuario {
  id: number
  nome: string
  usuario: string
  foto: string
  senha: string
  postagem?: Postagem[] //linha adicionada para que o usuário possa ter um
  }
  
  export default Usuario