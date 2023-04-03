import React, { useEffect, useState } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box, Fab } from '@mui/material';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import './Home.css'
import ListaPostagens from '../../components/postagens/listaPostagem/ListaPostagem';
function Home() {


    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens);
        
        
        const tempo_de_delay = 10

        setTimeout(() => (
            document.body.style.backgroundImage = "url('')"
        ), tempo_de_delay)

        const [open, setOpen] = React.useState(false);

        const handleOpen = () => {
            setOpen(true);
          };
        
          const handleClose = () => {
            setOpen(false);
          };


    return (
        <>

        <div className='fundo-home'>
            <Grid className='fundo-home' container direction="row" justifyContent="center" alignItems="center" >
                <Grid item xs={1}>
                <Box className='new-post' >

        <div className="new-post">  <ModalPostagem onOpen={handleOpen} onClose={handleClose} onChangeState={open} /></div>
                </Box>

                </Grid>

                <Box display="flex" justifyContent="baseline">
                    
                    <Grid xs={12} className='postagens'>
                        <Box>
                            <ListaPostagens onChangeState={open}  />
                        </Box>
                    </Grid>
                </Box>
            </Grid>
        
            </div>
        </>
    );
}

export default Home;