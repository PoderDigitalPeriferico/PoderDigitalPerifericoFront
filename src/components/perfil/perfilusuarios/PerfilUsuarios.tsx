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
                 
                </Card>
              </Box>
            ))}
          </Box>
        </>
    
      );
    }
    

export default PerfilUsuarios;
