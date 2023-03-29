import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Avatar,
  Grid,
} from "@mui/material";
import YouTube from "react-youtube";
import FacebookPlayer from "react-player/facebook";
import ReactPlayer from "react-player";
import Postagem from "../../../models/Postagem";
import { busca, buscaId } from "../../../services/Services";
import { TokenState } from "../../../store/tokens/tokensReducer";
import ModalPostagem from "../modalPostagem/ModalPostagem";
import "./ListaPostagem.css";

function ListaPostagens() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  useEffect(() => {
    if (token === "") {
      toast.error("Você precisa estar logado para ficar aqui", {
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
  }, [navigate, token]);

  useEffect(() => {
    async function getPosts() {
      await busca("/postagens", setPostagens, {
        headers: {
          Authorization: token,
        },
      });
    }
    getPosts();
  }, [token]);

  return (
    <Box display="flex" flexDirection={"column"} alignItems="center">
      {postagens
        .slice()
        .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
        .map((post) => (
          <Box key={post.id}>
            <Card className="card-post" variant="outlined">
              <CardContent>
                <Link
                  className="texr-link"
                  to={`/perfilUsuarios/${post.usuario?.id}`}
                >
                  <Avatar
                    className="avatar"
                    alt="foto usuario"
                    src={post.usuario?.foto}
                  />
                </Link>
                <Typography>
                  {(() => {
                    const url = post.titulo;
                    switch (true) {
                      case url.includes("youtube.com"):
                        return (
                          <YouTube
                            className="videoyoutube"
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
                            className="img-post"
                            src={url}
                            width="390"
                            height="640"
                            alt="Imagem da postagem"
                          />
                        );
                    }
                  })()}
                </Typography>

                <Typography className="post-text" variant="h5" component="h4">
                  {post.texto}
                </Typography>
                <Typography variant="body2" component="p">
                  <strong>Postado em:</strong>{" "}
                  {new Intl.DateTimeFormat("pt-BR", {
                    dateStyle: "medium",
                  }).format(new Date(post.data))}
                </Typography>

                <Box className="post-owner">
                  <Typography variant="body2" component="p">
                    <strong> Comunidade:</strong> {post.tema?.tema}
                  </Typography>
                </Box>

                <Typography
                  className="post-owner"
                  variant="body2"
                  component="p"
                >
                  <strong>Postado por:</strong>
                  <Link
                    className="texr-link"
                    to={`/perfilUsuarios/${post.usuario?.id}`}
                  >
                    {" "}
                    {post.usuario?.nome}{" "}
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
  </Box>
);
}

export default ListaPostagens;
