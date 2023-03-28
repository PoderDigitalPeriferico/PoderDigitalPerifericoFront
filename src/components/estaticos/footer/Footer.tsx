import React from 'react';
import {Typography, Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useSelector } from 'react-redux';
import './Footer.css'

function Footer() {

    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens);
    
        var footerComponent;

        if(token !==''){
            footerComponent = <div className="footer"> 
            <Grid  container direction="row" justifyContent="center" alignItems="center">
        <Grid className='footer' alignItems="center" item xs={12}>
            <Box style={{ backgroundColor: "rgb(230, 174, 122)", height: "" }}>
                <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais:
                    <a className='linkTree' href="https://linktr.ee/pdperiferico" target="_blank">
                        (LinkTree)                      
                    </a>
                      </Typography>
                    
                </Box>
            </Box>
            <Box style={{ backgroundColor: "#4c0702", height: "30px" }}>
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2023 </Typography>
                </Box>
              
            </Box>
        </Grid>
    </Grid>
    </div>
    }


    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;