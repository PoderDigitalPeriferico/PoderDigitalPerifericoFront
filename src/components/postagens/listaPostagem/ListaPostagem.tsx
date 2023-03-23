import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Pagination,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Postagem from "../../../models/Postagem";
import { busca } from "../../../services/Services";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { Avatar } from "@mui/material";
import './ListaPostagem.css'
import ModalPostagem from "../modalPostagem/ModalPostagem";
import { Grid } from '@material-ui/core';

function ListaPostagens() {
  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );


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

  const [postagens, setPostagens] = useState<Postagem[]>([]);

  async function getPosts() {
    await busca("/postagens", setPostagens, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    getPosts();
  }, [postagens.length]);

  return (
    <Box display="flex" flexDirection={'column'} alignItems='start'>
      {postagens.map((post) => (  
        <Box >
          <Card className='card-post' variant="outlined">
            
            <CardContent>
            <Avatar className='avatar' alt="foto usuario" src={post.usuario?.foto} />

              <Typography >
                {post.titulo.includes(".mp4") ? (
                  <video className="video" controls>
                    <source src={post.titulo} />
                  </video>
                ) : (
                  <img className='foto-post' src={post.titulo} alt="Imagem da postagem" />
                )}
              </Typography>
              <Typography variant="h5" component="h4">
                {post.texto}
              </Typography>
              <Typography variant="body2" component="p">
                <strong>Postado em:</strong>{" "}
                {new Intl.DateTimeFormat(undefined, {
                  dateStyle: "short",
                  timeStyle: "short",
                }).format(new Date(post.data))}
              </Typography>
             
              <Box className='post-owner'>
              <Typography variant="body2" component="p">
                <strong> Comunidade:</strong> {post.tema?.tema}
              </Typography>
              </Box>
             
              <Typography className='post-owner' variant="body2" component="p">
                <strong>Postado por:</strong> {post.usuario?.nome}
              </Typography>
              
            </CardContent>
          </Card>
        </Box>
        
      ))}
      <Pagination className="pagination" count={10} color="primary" />
    </Box>
  );
}

export default ListaPostagens;
