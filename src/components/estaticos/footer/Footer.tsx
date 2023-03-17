import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "rgb(230, 174, 122)", height: "px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">

                            <a href="https://linktr.ee/pdperiferico" target="_blank">
                                
                                <LinkIcon style={{ fontSize: 30, color: "white" }} />
                                
                            </a>

                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "rgb(230, 174, 122)", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2023 </Typography>
                        </Box>
                      
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;