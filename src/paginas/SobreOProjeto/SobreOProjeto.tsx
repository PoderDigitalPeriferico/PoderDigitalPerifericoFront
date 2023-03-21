import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react'
import "./SobreOProjeto.css";
import { Helmet } from "react-helmet"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';

function SobreOProjeto() {
    
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
    
    return (
        <>
            <Box className="parallax">
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela1.png?updatedAt=1679061328198" id="favela1" />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela6.png?updatedAt=1679061386886" id='favela6' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela2.png?updatedAt=1679061412062"    id='favela2'  />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela3.png?updatedAt=1679061411959" id='favela3' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela4.png?updatedAt=1679061411776" id='favela4' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela5.png?updatedAt=1679061412613" id='favela5' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela_poste_esq.png?updatedAt=1679061412424" id='favela_poste_esq' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_dir_1.png?updatedAt=1679061415321" id='pipa_dir_1' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_dir_2.png?updatedAt=1679061414288" id='pipa_dir_2' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_esq_1.png?updatedAt=1679061415136" id='pipa_esq_1' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_esq_2.png?updatedAt=1679061414585" id='pipa_esq_2'/>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_esq_3.png?updatedAt=1679061415084" id='pipa_esq_3'/>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_esq_4.png?updatedAt=1679061414770" id='pipa_esq_4'/>
                <h2 id="text">Poder <br /> Digital <br /> Periférico</h2>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela_poste_dir.png?updatedAt=1679061412180" id="favela_poste_dir" />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela_casa_dir.png?updatedAt=1679061412171" id="favela_casa_dir" />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela_casa_esq.png?updatedAt=1679061412610" id="favela_casa_esq" />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela_muro.png?updatedAt=1679061412270" id="favela_muro" />
            </Box>

            <Grid container item md={12} className="sec">
                <h2>Poder Digital Periférico</h2>
                <p>
                    O <strong>Poder Digital Periférico</strong>  é uma plataforma que visa dar voz e visibilidade 
                    aos artistas e profissionais periféricos. </p> <p> Através de conteúdo de áudio e vídeo,
                     a plataforma busca combater a <strong>desigualdade social</strong>  e promover a inclusão digital. </p> <p>
                      Cria uma comunidade engajada em se apoiar e valorizando suas produções.
                </p>
            </Grid>

            <Helmet>
                <script src="Script/script.js" type="text/javascript" />
            </Helmet>
        </>
    );
}

export default SobreOProjeto;