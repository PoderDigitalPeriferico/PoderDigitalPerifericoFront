import React, { useEffect, useState } from 'react'
import { Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import {useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { buscaId, deleteId } from '../../../services/Services';
import Tema from '../../../models/Tema';
import { toast } from 'react-toastify';

function ListaPorTema() {

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

  return (
    <>
    <Box m={2}>
      <Card variant="outlined">
        <CardContent>
          <Box justifyContent="center">
            
            <Typography color="textSecondary">
              {tema?.tema}
            </Typography>
            {tema?.postagens?.map((post) => (
              <>
                <Typography variant="h5" component="h2">
                  {post.titulo.includes(".mp4") ? (
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
              </>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Box>
  </>
  )
}

export default ListaPorTema