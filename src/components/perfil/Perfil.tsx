import './Perfil.css';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  CardActions,
  Typography,
} from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Usuario from '../../models/Usuario';
import { buscaId } from '../../services/Services';
import { TokenState } from '../../store/tokens/tokensReducer';

function Perfil() {
  const userId = useSelector<TokenState, TokenState['id']>((state) => state.id);
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  useEffect(() => {
    if (token == '') {
      toast.info('Você precisa estar logado', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      });
      navigate('/login');
    }
  }, [token]);

  const [usuario, setUsuario] = useState<Usuario>({
    id: +userId,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
  });

  async function getUserById(id: number) {
    await buscaId(`/usuarios/${id}`, setUsuario, {
      headers: { Authorization: token },
    });
  }

  useEffect(() => {
    getUserById(+userId);
  }, []);
  return (
    <>
      <img src={usuario.foto} alt="" />
      <h3>{usuario.nome}</h3>

      <h4>Todas as suas postagens</h4>
      {usuario.postagens?.map((post) => (
        <>
          <Typography variant="h5" component="h2">
            {post.titulo.includes('.mp4') ? (
              <video className="video" controls>
                <source src={post.titulo} />
              </video>
            ) : (
              <img src={post.titulo} alt="Imagem da postagem" />
            )}
          </Typography>
          <Typography variant="body2" component="p">
            {post.texto}
          </Typography>

          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>
              <Link
                to={`/editarPostagem/${post.id}`}
                className="text-decorator-none"
              >
                <Box mx={1}>
                  <Button
                    variant="contained"
                    className="marginLeft"
                    size="small"
                    color="primary"
                  >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link
                to={`/deletarPostagem/${post.id}`}
                className="text-decorator-none"
              >
                <Box mx={1}>
                  <Button variant="contained" size="small" color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </>
      ))}
      <Link to="/atualizarcadastro">
        <Button variant="contained" color="primary">
          atualizar perfil
        </Button>
      </Link>
    </>
  );
}

export default Perfil;
