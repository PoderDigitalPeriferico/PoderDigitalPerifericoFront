import React, { useState, useEffect, ChangeEvent } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { useNavigate, useParams } from "react-router-dom";
import "./CadastroTema.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import Tema from "../../../models/Tema";
import { buscaId, post, put } from "../../../services/Services";
import { toast } from "react-toastify";
import Usuario from "../../../models/Usuario";

function CadastroTema() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const userId = useSelector<TokenState, TokenState["id"]>((state) => state.id);
  const [isLoading, setIsLoading] = useState(false);

  const [usuario, setUsuario] = useState<Usuario>({
    id: +userId,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  const [tema, setTema] = useState<Tema>({
    id: 0,
    tema: "",
  });

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

  function updatedTema(e: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      usuario: usuario,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (id !== undefined) {
      await put(`/temas`, tema, setTema, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Tema atualizado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } else {
      await post(`/temas`, tema, setTema, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Tema cadastrado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
    back();
  }

  function back() {
    navigate("/temas");
  }

  return (
    <div className="fundo">
      <Container id="container" maxWidth="sm" className="topo">
        <div className="form-cad">
          <form onSubmit={onSubmit}>
            <Typography
              className="titulo"
              variant="h3"
              component="h1"
              align="center"
            >
              Cadastre sua Comunidade
            </Typography>
            <TextField
              value={tema.tema}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)}
              id="temas"
              label="Qbrada"
              variant="outlined"
              name="tema"
              margin="normal"
              size="small"
              fullWidth
              error={tema.tema.length < 5 && tema.tema.length > 0}
              helperText={
                tema.tema.length < 5 && tema.tema.length > 0
                  ? " Precisa ter no mínimo 5 caracteres"
                  : ""
              }
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isLoading || tema.tema.length < 5}
            >
              {isLoading ? "Aguarde" : "Salvar"}
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default CadastroTema;
