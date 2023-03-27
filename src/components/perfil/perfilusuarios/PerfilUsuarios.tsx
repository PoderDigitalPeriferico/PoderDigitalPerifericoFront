import { Button, Card, CardActions, CardContent, Fab, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Postagem from "../../../models/Postagem";
import { buscaId } from '../../../services/Services';
import { TokenState } from "../../../store/tokens/tokensReducer";
import EditIcon from '@mui/icons-material/Edit';
import Usuario from "../../../models/Usuario";
import { string } from "yargs";
import "./PerfilUsuarios.css"
import YouTube from "react-youtube";

function PerfilUsuarios() {
    let navigate = useNavigate();
    const [postagens, setPostagens] = useState<Postagem[]>([]);
    const token = useSelector<TokenState, TokenState["tokens"]>(
      (state) => state.tokens
    );
    const { id } = useParams<{id: string}>();
    const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);
  
    useEffect(() => {
      if (token === "") {
        toast.error("Você precisa estar logado pra ficar aqui", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/login");
      }
    });
    const [usuario, setUsuario] = useState<Usuario>({
        id: 0,
        nome: '',
        usuario: '',
        foto: '',
        senha: '',
      });

      useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/usuarios/${id}`, setUsuario, {
            headers: {
              'Authorization': token
            }
          })
        }
  return (
        <>
    
          <Box className="header" >
            <div >
    
              <div>
                <img className='img-perfil' src={usuario.foto} alt="" />
              </div>
              <div>
                <h2 className='userNamePerfil'>{usuario.nome}</h2>
              </div>
             
    
            </div>
          </Box>
    
          <hr></hr>
    
          <h4 className='all-posts'>Todas as suas postagens</h4>
          <Box display="flex" flexDirection={'column'} alignItems='center'>
    
            {usuario.postagens?.map((post) => (
              <Box >
                <Card className='card-perfil' variant="outlined">
    
                  <CardContent>
                  <Typography>
                {(() => {
                  const url = post.titulo;
                  switch (true) {
                    case url.includes("youtube.com"):
                      return (
                        <YouTube
                          className="video"
                          videoId={url.split("=")[1]}
                          opts={{
                            height: "390",
                            width: "640",
                            playerVars: { autoplay: 0 },
                          }}
                        />
                      );
                    case url.includes(".mp4"):
                      return (
                        <video className="video" controls>
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
                          src={`https://www.instagram.com/p/${url.split("/")[4]
                            }/embed`}
                          className="video"
                          width="390"
                          height="640"
                          frameBorder={"0"}
                          scrolling="no"
                          title="Instagram video"
                        ></iframe>
                      );
                    case url.includes("tiktok.com"):
                      return (
                        <iframe
                          src={`https://www.tiktok.com/embed/v2/${url.split("/")[5]
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
                          width="390"
                          height="640"
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
                 
                </Card>
              </Box>
            ))}
          </Box>
        </>
    
      );
    }
    

export default PerfilUsuarios;
