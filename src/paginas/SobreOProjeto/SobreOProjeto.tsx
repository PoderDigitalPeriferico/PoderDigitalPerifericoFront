import { Box, Grid } from '@mui/material';
import React from 'react'
import "./SobreOProjeto.css";
import {Helmet} from "react-helmet"

function SobreOProjeto() {
    return (
    <>        
            <Box className="parallax">
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela1.png?updatedAt=1679061328198" id="favela1"/>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela6.png?updatedAt=1679061386886"/>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela2.png?updatedAt=1679061412062"/>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela3.png?updatedAt=1679061411959"/>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela4.png?updatedAt=1679061411776"/>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela5.png?updatedAt=1679061412613"/>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela_poste_esq.png?updatedAt=1679061412424"/>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_dir_1.png?updatedAt=1679061415321"/>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_dir_2.png?updatedAt=1679061414288"/>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_esq_1.png?updatedAt=1679061415136"/>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_esq_2.png?updatedAt=1679061414585"/>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_esq_3.png?updatedAt=1679061415084"/>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_esq_4.png?updatedAt=1679061414770"/>
                <h2 id="text">Poder <br/> Digital <br/> Periférico</h2>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela_poste_dir.png?updatedAt=1679061412180" id="favela_poste_dir"/>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela_casa_dir.png?updatedAt=1679061412171" id="favela_casa_dir"/>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela_casa_esq.png?updatedAt=1679061412610" id="favela_casa_esq"/>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela_muro.png?updatedAt=1679061412270" id="favela_muro"/>
            </Box>

            <Grid container item md={12} className="sec">
                <h2>Poder Digital Periférico</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias reprehenderit, facilis nemo
                    corrupti, debitis quam autem repellat culpa vero illum voluptates assumenda eaque odio ex neque id,
                    consectetur minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias reprehenderit,
                    facilis nemo
                    corrupti, debitis quam autem repellat culpa vero illum voluptates assumenda eaque odio ex neque id,
                    consectetur minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias reprehenderit,
                    facilis nemo
                    corrupti, debitis quam autem repellat culpa vero illum voluptates assumenda eaque odio ex neque id,
                    consectetur minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias reprehenderit,
                    facilis nemo
                    corrupti, debitis quam autem repellat culpa vero illum voluptates assumenda eaque odio ex neque id,
                    consectetur minus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam alias reprehenderit,
                    facilis nemo
                    corrupti, debitis quam autem repellat culpa vero illum voluptates assumenda eaque odio ex neque id,
                    consectetur minus!
                </p>
            </Grid>

            <Helmet>
                <script src="scripts/script.js" type="text/javascript" />
            </Helmet>
            </>
    );
}

export default SobreOProjeto;