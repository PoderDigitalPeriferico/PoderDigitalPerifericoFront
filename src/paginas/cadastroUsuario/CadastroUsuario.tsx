import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Usuario from "../../models/Usuario";
import { cadastro } from "../../services/Services";
import { toast } from 'react-toastify';

function CadastroUsuario() {

    let navigate = useNavigate()
    const [user, setUser] = useState<Usuario>({
      id: 0,
      nome: '',
      usuario: '',
      foto: '',
      senha: ''
    })
    const [userResult, setUserResult] = useState<Usuario>({
      id: 0,
      nome: '',
      usuario: '',
      foto: '',
      senha: ''
    })
  
    const [confirmarSenha, setConfirmarSenha] = useState<String>('')
  
    function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>){
      setConfirmarSenha(event.target.value)
    }
  
    function updateModel(event: ChangeEvent<HTMLInputElement>) {
      setUser({
        ...user,
        [event.target.name]: event.target.value
      })
    }
    async function onSubmit(event: ChangeEvent<HTMLFormElement>) {
      event.preventDefault()
      try {
      if(user.senha === confirmarSenha) {
        await cadastro('/usuarios/cadastrar', user, setUserResult);
        toast.success("Usuário cadastrado com sucesso", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined
      });        } else {
        toast.error("As senhas não conferem", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: 'colored',
          progress: undefined
      });        }
    } catch (error) {
      toast.error("Falha no cadastro, por favor, verifique os campos", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined
    });
    }
  }
  
    useEffect(() => {
      if(userResult.id !== 0) {
        navigate('/login')
      }
    }, [userResult])
  


    return(
    <Grid container alignItems='center'>
    <Grid item xs={6} className='fundoCadastro'></Grid>
    <Grid item xs={6}>
      <Box paddingX={12}>
        <form onSubmit={onSubmit}>
          <Typography variant='h3' align='center'>Cadastre-se</Typography>
          <TextField value={user.nome} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} label='Nome' id='nome' name='nome' variant='outlined' fullWidth margin='normal' />
          <TextField value={user.usuario} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} label='usuario' id='usuario' name='usuario' variant='outlined' fullWidth margin='normal' />
          <TextField value={user.foto} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} label='foto' id='foto' name='foto' variant='outlined' fullWidth margin='normal' />
          <TextField value={user.senha} onChange={(event: ChangeEvent<HTMLInputElement>) => updateModel(event)} type='password' label='senha' id='senha' name='senha' variant='outlined' fullWidth margin='normal' />
          <TextField value={confirmarSenha} onChange={(event: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(event)} type='password' label='confirmar senha' id='confirmarsenha' name='confirmarsenha' variant='outlined' fullWidth margin='normal' />
          <Grid container justifyContent='space-around'>
            <Link to='/login'><Button variant='contained' color='secondary'>Cancelar</Button></Link>
            <Button type='submit' variant='contained' color='primary'>Cadastrar</Button>
          </Grid>
        </form>
      </Box>
    </Grid>
  </Grid>
    )

}

export default CadastroUsuario