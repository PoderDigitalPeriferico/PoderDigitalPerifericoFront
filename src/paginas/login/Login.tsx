import { Grid, TextField, Typography, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UsuarioLogin from "../../models/UsuarioLogin";
import "./Login.css";
import { login } from "../../services/Services";
import { useDispatch } from "react-redux";
import { addToken, addId } from "../../store/tokens/actions";
import { toast } from "react-toastify";

function Login() {
  let navigate = useNavigate();
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: ''
  });

  const [respUserLogin, setRespUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: ''
  });

  function updateModel(e: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      setIsLoading(true)
      //await login('/usuarios/logar', userLogin, setToken)
      await login("/usuarios/logar", userLogin, setRespUserLogin);
      toast.success("Usuário logado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } catch (error) {
      setIsLoading(false)
      toast.error("Usuário e/ou senha inválidos", {
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
  }
  useEffect(() => {
    if (token != "") {
      dispatch(addToken(token));
      navigate("/home");
    }
  }, [token]);

  useEffect(() => {
    if (respUserLogin.token !== "") {
      dispatch(addToken(respUserLogin.token));
      dispatch(addId(respUserLogin.id.toString()));
      navigate("/home");
    }
  }, [respUserLogin.token]);

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid alignItems="center" xs={6}>
        <Box paddingX={20}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              style={{ fontWeight: "bold" }}
            >
              Entrar
            </Typography>
            <TextField
              value={userLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              id="usuario"
              label="usuario"
              variant="outlined"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              value={userLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateModel(e)}
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button type="submit" variant="contained" color="primary">
                {isLoading ? "Aguarde" : "Logar"}
              </Button>
            </Box>
          </form>
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Não tem uma conta?
              </Typography>
            </Box>
            <Typography
              variant="subtitle1"
              gutterBottom
              align="center"
              style={{ fontWeight: "bold" }}
            >
              <Link to="/cadastrar">Cadastre-se</Link>
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid
        xs={6}
        style={{
          backgroundImage: `url(https://img.freepik.com/vetores-premium/ilustracao-design-de-fundo-de-casas-coloridas_755165-7.jpg)`,
          backgroundRepeat: "no-repeat",
          width: "100vh",
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Grid>
    </Grid>
  );
}

export default Login;
