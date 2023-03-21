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
import useLocalStorage from "react-use-localstorage";
import Postagem from "../../../models/Postagem";
import { busca } from "../../../services/Services";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { Avatar } from "@mui/material";

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
    <Box display="flex" flexWrap={"wrap"}>
      {postagens.map((post) => (
        <Box m={2} width={"45vw"} height={"350px"}>
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
                <Avatar alt="foto usuario" src={post.usuario?.foto} />
              </Typography>
            </CardContent>
            {post.usuario?.id === +userId ? (
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
                      <Button
                        variant="contained"
                        size="small"
                        color="secondary"
                      >
                        deletar
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </CardActions>
            ) : (
              <>
                {" "}
                <h5>Você Não Pode Editar</h5>{" "}
              </>
            )}
          </Card>
        </Box>
      ))}
    </Box>
  );
}

export default ListaPostagens;
