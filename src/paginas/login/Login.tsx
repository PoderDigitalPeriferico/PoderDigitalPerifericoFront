import { Grid, TextField, Typography, Button, Paper } from "@material-ui/core";
import Box from "@mui/material/Box";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UsuarioLogin from "../../models/UsuarioLogin";
import "./Login.css";
import { login } from "../../services/Services";
import { useDispatch } from "react-redux";
import { addFoto, addId, addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";
import { lightBlue } from "@mui/material/colors";

function Login() {
  let navigate = useNavigate();
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
  });

  const [respUserLogin, setRespUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
    token: "",
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
      setIsLoading(true);
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
      setIsLoading(false);
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
    if (token !== "") {
      dispatch(addToken(token));
      navigate("/home");
    }
  }, [token]);

  useEffect(() => {
    if (respUserLogin.token !== "") {
      dispatch(addToken(respUserLogin.token));
      dispatch(addFoto(respUserLogin.foto));
      dispatch(addId(respUserLogin.id.toString()));
      navigate("/home");
    }
  }, [respUserLogin.token]);

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const validMail = emailRegex.test(userLogin.usuario);

  return (
    <Grid container className="responsive">
      <Grid
        container
        item
        xs={12}
        style={{
          backgroundImage: `url(https://images.303magazine.com/uploads/2019/08/GettyImages-510083766.jpg)`,

          // https://img.freepik.com/fotos-gratis/bela-vista-de-uma-pequena-cidade-nas-montanhas-durante-o-por-do-sol-no-brasil_181624-39388.jpg?w=1380&t=st=1678927973~exp=1678928573~hmac=9d10b84295ac61de991523135d7fdb7e7004d250801a39d01d73fe8065dc2a09

          backgroundRepeat: "no-repeat",
          width: "auto",
          minHeight: "auto",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ height: "100vh" }}
        >
          <Grid justifyContent="flex-end" alignItems="center" xs={6}>
            <Box paddingX={20} className="componentLogin">
              <img
                className="logo-login"
                src="https://ik.imagekit.io/wwd7wv4ro/PDP_full_branco.png?updatedAt=1679053313611"
                alt=""
              />
              <form className="form-login" onSubmit={onSubmit}>
                <TextField
                  error={!validMail && userLogin.usuario.length > 0}
                  helperText={
                    !validMail && "Por favor, insira um e-mail válido"
                  }
                  value={userLogin.usuario}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateModel(event)
                  }
                  label="E-mail"
                  id="usuario"
                  name="usuario"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  size="small"
                />
                <TextField
                  value={userLogin.senha}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    updateModel(e)
                  }
                  id="senha"
                  size="small"
                  label="Senha"
                  variant="outlined"
                  name="senha"
                  margin="normal"
                  type="password"
                  fullWidth
                  error={
                    userLogin.senha.length < 8 && userLogin.senha.length >= 1
                  }
                  helperText={
                    userLogin.senha.length < 8 && userLogin.senha.length >= 1
                      ? "Senha com 8 Dígitos"
                      : ""
                  }
                />
                <Box marginTop={2} textAlign="center">
                <div className="button-logar">
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isLoading || userLogin.senha.length < 8}
                  >
                    {isLoading ? "Aguarde" : "Entrar"}
                  
                  </Button>
                  </div>
                </Box>
              </form>

              <Box display="flex" justifyContent="center" marginTop={2}>
                <Box marginRight={1}></Box>
                <Link className="text-decorator-none" to="/cadastrar">
                 <div className="link-cadastre">
                  <Typography
                    variant="subtitle1"
                    gutterBottom
                    align="center"
                    className="textos1"
                  >
                    Cadastre-se
                  </Typography>
                  </div>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Grid>{" "}
    </Grid>
  );
}
export default Login;