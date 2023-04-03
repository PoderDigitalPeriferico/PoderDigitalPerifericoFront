import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastro } from "../../services/Services";
import { toast } from "react-toastify";
import "./CadastroUsuario.css";

function CadastroUsuario() {
  let navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [user, setUser] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
  });
  const [userResult, setUserResult] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    foto: "",
    senha: "",
  });

  const [senha, setSenha] = useState<String>("");
  const [confirmarSenha, setConfirmarSenha] = useState<String>("");

  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value);
  }

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }
  async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      if (user.senha === confirmarSenha) {
        await cadastro("/usuarios/cadastrar", user, setUserResult);
        toast.success("Usuário cadastrado com sucesso", {
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
        toast.error("As senhas não conferem", {
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
    } catch (error) {
      toast.error("Falha no cadastro, por favor, verifique os campos", {
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
    if (userResult.id !== 0) {
      navigate("/login");
    }
  }, [userResult]);

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const validMail = emailRegex.test(user.usuario);







  return (
    <Grid container>
      <Grid
        container
        item
        xs={12}
        style={{
          backgroundImage: `url(https://images.303magazine.com/uploads/2019/08/GettyImages-510083766.jpg)`,

          // https://img.freepik.com/fotos-gratis/bela-vista-de-uma-pequena-cidade-nas-montanhas-durante-o-por-do-sol-no-brasil_181624-39388.jpg?w=1380&t=st=1678927973~exp=1678928573~hmac=9d10b84295ac61de991523135d7fdb7e7004d250801a39d01d73fe8065dc2a09

          backgroundRepeat: "no-repeat",
          width: "100vh",
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Grid container justifyContent="center" alignItems="center">
          <Grid justifyContent="flex-end" alignItems="center" xs={6}>
            <Box paddingX={20} className="fundo-transparent">
              <div>
                <form onSubmit={onSubmit}>
                  <img
                    className="logo-cadastro"
                    src="https://ik.imagekit.io/wwd7wv4ro/PDP_full_branco.png?updatedAt=1679053313611"
                    alt=""
                  />
                  <TextField
                    value={user.nome}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      updateModel(event)
                    }
                    label="Nome"
                    id="nome"
                    name="nome"
                    variant="outlined"
                    fullWidth
                    size="small"
                    margin="normal"
                    inputProps={{
                      pattern: "[A-Za-zÀ-ú ]+",
                      title: "Por favor, insira apenas letras",
                    }}
                    error={!!user.nome.match("[^A-Za-zÀ-ú ]")}
                    helperText={
                      user.nome.match("[^A-Za-zÀ-ú ]")
                        ? "Por favor, insira apenas letras"
                        : "Nome Completo"
                    }
                  />
                    
                  <TextField
                    error={!validMail && user.usuario.length > 0}
                    helperText={
                      !validMail && "Por favor, insira um e-mail válido"
                    }
                    value={user.usuario}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      updateModel(event)
                    }
                    label="E-mail Válido"
                    id="usuario"
                    name="usuario"
                    variant="outlined"
                    fullWidth
                    size="small"
                    margin="normal"
                  />
                  <TextField className='helperText'
                    value={user.foto}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      updateModel(event)
                    }
                    label="Foto"
                    id="foto"
                    name="foto"
                    variant="outlined"
                    fullWidth
                    size="small"
                    margin="normal"
                    error={user.foto.length < 15 && user.foto.length > 1}
                    helperText={"Inserir o link imagem *.png, *.jpg"}
                  />
                  <TextField
                    value={user.senha}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      updateModel(event)
                    }
                    type="password"
                    label="Senha"
                    id="senha"
                    name="senha"
                    variant="outlined"
                    margin="normal"
                    size="small"
                  />
                  <> </>
                  <TextField
                    value={confirmarSenha}
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                      confirmarSenhaHandle(event)
                    }
                    type="password"
                    label="Confirmar Senha"
                    id="confirmarsenha"
                    name="confirmarsenha"
                    variant="outlined"
                    size="small"
                    error={
                      confirmarSenha.length <= 7 && confirmarSenha.length >= 1
                    }
                    helperText={
                      confirmarSenha.length <= 7 && confirmarSenha.length >= 1
                        ? "Senha com 8 Dígitos"
                        : ""
                    }
                    margin="normal"
                  />
                  <Grid container justifyContent="space-around">
                    <Link className="text-link" to="/login">
                      <Button variant="contained" color="secondary">
                        Cancelar
                      </Button>
                    </Link>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      disabled={isLoading || confirmarSenha.length < 8}
                    >
                      {isLoading ? "Aguarde" : "Cadastrar"}
                    </Button>
                  </Grid>
                </form>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Grid>{" "}
    </Grid>
  );
}

export default CadastroUsuario;
