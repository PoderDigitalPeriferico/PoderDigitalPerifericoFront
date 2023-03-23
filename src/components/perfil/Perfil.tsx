import React, { useEffect, useState } from 'react';
import {
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
import { Box, Card, CardContent, Fab, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import './Perfil.css'
import Postagem from '../../models/Postagem';

function Perfil() {
  const [posts, setPosts] = useState<Postagem[]>([])
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
      
        <Box className="header" >
          <div >
            <img className='img-perfil' src={usuario.foto} alt="" />
            <h2 className='user-name'>{usuario.nome}</h2>
            <Link className='text-link' to="/atualizarcadastro">
              <Fab className='button-edit' color="primary" aria-label="edit">
                <EditIcon />
              </Fab>
            </Link>

          </div>
        </Box>

      <hr></hr>

      <h4 className='all-posts'>Todas as suas postagens</h4>
      <Box display="flex" flexDirection={'column'} alignItems='center'>

        {usuario.postagens?.map((post) => (
          <Box >
            <Card className='card-perfil' variant="outlined">

              <CardContent>
                <Typography >
                  {post.titulo.includes(".mp4") ? (
                    <video className="video" controls>
                      <source src={post.titulo} />
                    </video>
                  ) : (
                    <img className='foto-post' src={post.titulo} alt="Imagem da postagem" />
                  )}
                </Typography>
                <Typography className='post-text' variant="h5" component="h4">
                  {post.texto}
                </Typography>
                <Typography className='post-date' variant="body2" component="p">
                  <strong>Postado em:</strong>{" "}
                  {new Intl.DateTimeFormat(undefined, {
                    dateStyle: "short",
                    timeStyle: "short",
                  }).format(new Date(post.data))}
                </Typography>

                  <Typography className='post-location' variant="body2" component="p">
                    <strong> Comunidade:</strong> {post.tema?.tema}
                  </Typography>

                
              </CardContent>
              <CardActions>
                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/AtualizarPostagem/${post.id}`} className="text-link" >
                    <Box mx={1}>
                      <Button variant="contained"  size='small' color="primary" >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link className='text-link' to={`/deletarPostagem/${post.id}`} >
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="secondary">
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>

            </Card>
          </Box>
        ))}
      </Box>
    </>

  );
}

export default Perfil;
