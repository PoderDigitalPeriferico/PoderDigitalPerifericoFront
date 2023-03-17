import React, { useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import TabPostagem from '../../components/postagens/tabPostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import './Home.css'
function Home() {
    
    
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens);
    
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

    return (
        <>
          <Grid className='fundo' container direction="row" justifyContent="center" alignItems="center" >
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                      
                    </Box>
                   
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
                <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        
                        <Link className='links' to='/postagens'>            
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>

                    </Box>
                
            </Grid>

        
        </>
                    );
            }

export default Home;