import React, { useEffect, useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Avatar,
} from "@material-ui/core";
import { Box, Container } from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { buscaId, deleteId } from "../../../services/Services";
import Tema from "../../../models/Tema";
import { toast } from "react-toastify";
import YouTube from "react-youtube";
import "./ListaPorTema.css";

function ListaPorTema() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [tema, setTema] = useState<Tema>();

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });

      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        Authorization: token,
      },
    });
  }

  return (
    <Container className="fundoListaPorTema">
      <Box>
        <Card variant="outlined">
          <CardContent>
            <Box>
              <Typography color="textSecondary">{tema?.tema}</Typography>
              {tema?.postagens?.map((post) => (
                <>
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
                  <Typography variant="body2" component="p">
                  <strong>Postado em:</strong>{" "}
                  {new Intl.DateTimeFormat("pt-BR", {
                    dateStyle: "medium",
                  }).format(new Date(post.data))}
                </Typography>
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
                </>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}

export default ListaPorTema;
