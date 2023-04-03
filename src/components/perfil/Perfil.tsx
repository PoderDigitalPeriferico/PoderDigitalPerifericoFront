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
import YouTube from 'react-youtube';
import Avatar from '@mui/material/Avatar';

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

          <div>
            <img className='sem-foto' src="https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg" alt="" />
            <img className='img-perfil' src={usuario.foto} alt="" />
          </div>
          <div>
            <h2 className='user-name'>{usuario.nome}</h2>
          </div>
          <div> <Link className='text-link' to="/atualizarcadastro">
            <Fab className='button-edit' color="primary" aria-label="edit">
              <EditIcon />
            </Fab>
          </Link>
          </div>
        </div>
      </Box>

      <hr></hr>

      <h4 className='all-posts'>Todas as suas postagens</h4>
      <Box display="flex" flexDirection={'column'} alignItems='center' className="fundoPerfil">

        {usuario.postagens?.map((post) => (
          <Box >
            <Card className='card-perfil' variant="outlined">

              <CardContent>
                <Typography>
                  {(() => {
                    const url = post.titulo;
                    switch (true) {
                      case url === (""):
                        return <div />;
                      case url.includes("youtube.com"):
                        return (
                          <YouTube
                            className="videoyoutube"
                            videoId={url.split("=")[1]}
                            opts={{
                              height: "400vh",
                              width: "80%",
                              playerVars: { autoplay: 0 },
                            }}
                          />
                        );
                      case url.includes(".mp4"):
                        return (
                          <video className="videomp4" controls>
                            <source src={url} />
                          </video>
                        );
                      case url.includes("https://m.facebook.com/"):
                        return (
                          <div
                            className="fb-video"
                            data-href={url}
                            data-width="640"
                            data-show-text="true"
                          >
                            <div className="fb-xfbml-parse-ignore"></div>
                          </div>
                        );
                      case url.includes("instagram.com"):
                        return (
                          <iframe
                            src={`https://www.instagram.com/p/${
                              url.split("/")[4]
                            }/embed`}
                            className="instagram"
                            width="400"
                            height="630"
                            frameBorder={"0"}
                            scrolling="no"
                            title="Instagram video"
                          ></iframe>
                        );
                      case url.includes("tiktok.com"):
                        return (
                          <iframe
                            src={`https://www.tiktok.com/embed/v2/${
                              url.split("/")[5]
                            }?lang=en-US`}
                            className="video"
                            width="640"
                            height="750"
                            frameBorder={"0"}
                            scrolling="no"
                            title="TikTok video"
                          ></iframe>
                        );
                      default:
                        return (
                          <img
                            className="foto-post"
                            src={url}
                            width="50%"
                            height="auto"
                            alt="Imagem da postagem"
                          />
                        );
                    }
                  })()}
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
              
                <Box display="flex" justifyContent="center">

                  <Link to={`/AtualizarPostagem/${post.id}`} className="text-link" >
                    <Box mx={1}>
                      <Button variant="contained" size='small' color="primary" >
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
          

            </Card>
          </Box>
        ))}
      </Box>
    </>

  );
}

export default Perfil;
