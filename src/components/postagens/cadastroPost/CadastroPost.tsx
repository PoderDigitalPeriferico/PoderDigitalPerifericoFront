import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import "./CadastroPost.css";
import { useNavigate, useParams } from "react-router-dom";
import Tema from "../../../models/Tema";
import Postagem from "../../../models/Postagem";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";
import { busca, buscaId, post, put } from "../../../services/Services";
import Usuario from "../../../models/Usuario";
import Avatar from "@mui/material/Avatar";
import YouTube from "react-youtube";

function CadastroPost() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [temas, setTemas] = useState<Tema[]>([]);
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);
const userFoto = useSelector<TokenState, TokenState["foto"]>(
  (state) => state.foto
);

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);

  const [tema, setTema] = useState<Tema>({
    id: 0,
    tema: "",
  });
  const [postagem, setPostagem] = useState<Postagem>({
    id: 0,
    titulo: "",
    texto: "",
    data: "",
    tema: null,
    usuario: null,
  });

  const [usuario, setUsuario] = useState<Usuario>({
    id: +userId,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    setPostagem({
      ...postagem,
      tema: tema,
      usuario: usuario,
    });
  }, [tema]);

  useEffect(() => {
    getTemas();
    if (id !== undefined) {
      findByIdPostagem(id);
    }
  }, [id]);

  async function getTemas() {
    await busca("/temas", setTemas, {
      headers: {
        Authorization: token,
      },
    });
  }

  async function findByIdPostagem(id: string) {
    await buscaId(`postagens/${id}`, setPostagem, {
      headers: {
        Authorization: token,
      },
    });
  }

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
    setPostagem({
      ...postagem,
      [e.target.name]: e.target.value,
      tema: tema,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      put(`/postagens`, postagem, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Postagem atualizada com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } else {
      post(`/postagens`, postagem, setPostagem, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Postagem cadastrada com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
    back();
  }

  function back() {
    navigate("/postagens");
  }

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h4"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Compartilhar uma Publicação
        </Typography>
        <Avatar className="avatarpostagem"alt="foto usuario" src={userFoto} />

        <TextField
          value={postagem.titulo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          margin="normal"
          label="Url da Postagem"
          variant="outlined"
          id="titulo"
          name="titulo"
          fullWidth
          size="small"
        />
        <FormHelperText>Coloque URL YouTube ou Link Imagem</FormHelperText>
        <FormHelperText>
          Exemplo: www.youtube.com/watch?v=ug3ko1PLCjE
        </FormHelperText>
        <FormHelperText>
          Exemplo: www.xyz.com.br/eunafoto.jpg ou .png{" "}
        </FormHelperText>
        <TextField
          value={postagem.texto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          margin="normal"
          id="texto"
          name="texto"
          variant="outlined"
          label="Deixe um Breve Comentário"
          fullWidth
          size="small"
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-helper-label">Qbrada?</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(e) =>
              buscaId(`/temas/${e.target.value}`, setTema, {
                headers: {
                  Authorization: token,
                },
              })
            }
          >
            {temas.map((tema) => (
              <MenuItem className="list-location" value={tema.id}>
                {tema.tema}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Escolha uma Comunidade</FormHelperText>
          <Button type="submit" variant="contained" color="primary">
            Publicar
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
export default CadastroPost;
