import React, { useEffect, useState } from 'react'
import { Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import './DeletarTema.css';
import {useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { buscaId, deleteId } from '../../../services/Services';
import Tema from '../../../models/Tema';
import { toast } from 'react-toastify';
import YouTube from 'react-youtube';


function DeletarTema() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
    const [tema, setTema] = useState<Tema>()

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado',{
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              draggable: false,
              theme: "colored",
              progress: undefined,
          });

            navigate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
              'Authorization': token
            }
          })
        }

        function sim() {
          navigate('/temas')
            deleteId(`/temas/${id}`, {
              headers: {
                'Authorization': token
              }
            });
            toast.success('Comunidade deletado com sucesso',{
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              draggable: false,
              theme: "colored",
              progress: undefined,
          });
          }
        
          function nao() {
            navigate('/temas')
          }
          
  return (
    <>
     <Box display="flex" flexDirection={"column"} alignItems="center">
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              
              <Typography color="textSecondary">
                {tema?.tema}
              </Typography>
              {tema?.postagens?.map((post) => (
                <>
                  <Typography variant="h5" component="h2">
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
            height: "350vh",
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
                  <Typography variant="body2" component="p">
                    {post.texto}
                  </Typography>
                </>
              ))}
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
            <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button  onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarTema;