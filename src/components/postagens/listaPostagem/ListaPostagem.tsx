import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
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
import ModalPostagem from "../modalPostagem/ModalPostagem";

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
    <Box display="flex" flexDirection={'column'}>
      {postagens.map((post) => (
        <Box m={2} width={"45vw"}>
          <Card variant="outlined">
            <CardContent>
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
              <Typography variant="body2" component="p">
                Postado em:{" "}
                {new Intl.DateTimeFormat(undefined, {
                  dateStyle: "full",
                  timeStyle: "medium",
                }).format(new Date(post.data))}
              </Typography>
              <Typography variant="body2" component="p">
                Tema: {post.tema?.tema}
              </Typography>
              <Typography variant="body2" component="p">
                Postado por: {post.usuario?.nome}{" "}
                <Avatar className='avatar' alt="foto usuario" src={post.usuario?.foto} />
              </Typography>
            </CardContent>
          </Card>
        </Box>
      ))}
    </Box>
  );
}

export default ListaPostagens;
