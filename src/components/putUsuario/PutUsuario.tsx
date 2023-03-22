import { Box, Button, Grid, TextField, Typography } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Usuario from '../../models/Usuario';
import { buscaId, put } from '../../services/Services';
import { TokenState } from '../../store/tokens/tokensReducer';
import './PutUsuario.css'

function PutUsuario() {
    const { id } = useParams<{ id: string }>();

    const userId = useSelector<TokenState, TokenState['id']>(
        (state) => state.id
    );
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );
    let navigate = useNavigate();

    useEffect(() => {
        if (token == "") {
            toast.info("Você precisa estar logado", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined
            });
            navigate("/login")

        }
    }, [token])

    const [usuario, setUsuario] = useState<Usuario>({
        id: +userId,
        nome: '',
        usuario: '',
        foto: '',
        senha: '',
    });

    async function getUserById(id: number) {
        await buscaId(`/usuarios/${id}`, setUsuario, {
            headers: { Authorization: token }
        })
    };



    useEffect(() => {
        getUserById(+userId)
    }, [])

    function updatedUsuario(e: ChangeEvent<HTMLInputElement>) {

        setUsuario({
                ...usuario,
            [e.target.name]: e.target.value,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (userId !== undefined) {
            put(`/usuarios/atualizar`, usuario, setUsuario, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Perfil atualizado com sucesso', {
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
            toast.error('Erro ao atualizar perfil, reveja as informações', {
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
        back()

    }

    function back() {
        navigate('/perfil')
    }

    return (
        <>
            <Grid className='cointainer' container spacing={2}>
                <Grid item xs={12}>
                    <Box className="caixa">
                        <form onSubmit={onSubmit}>
                        {/* <TextField margin='normal' variant='outlined' value={usuario.id} fullWidth/> */}
                        <Typography className='titulo' variant='h4' align='center'>Atualizar perfil</Typography>
                        <TextField value={usuario.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUsuario(e)} id="nome" label="Nome de usuario" variant="outlined" name="nome" margin="normal" fullWidth />
                        <TextField onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUsuario(e)} id="senha" label="senha" variant="outlined" name="senha" margin="normal" fullWidth />
                        <TextField label='Comfirmar seha' id='nome' name='nome' variant='outlined' fullWidth  />
                        <TextField value={usuario.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedUsuario(e)} id="foto" label="foto" variant="outlined" name="foto" margin="normal" fullWidth />
                        <Button type='submit' variant='contained' color='primary'>Atualizar perfil</Button>
                        </form>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box className='posts'>

                    </Box>
                </Grid>

                <Grid item xs={8}>

                </Grid>
            </Grid>
        </>
    )

}
export default PutUsuario;