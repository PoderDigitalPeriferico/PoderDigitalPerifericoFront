import './Perfil.css'
import React from 'react'
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';

import ListaPostagem from '../postagens/listaPostagem/ListaPostagem';
import { Link } from 'react-router-dom';

function Perfil() {
    return (
        <>
            <Link to='/atualizarcadastro'>
                <Button variant="contained" color="primary" >
                    atualizar perfil
                </Button>
            </Link>
        </>
    );
}

export default Perfil;