import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react'
import "./SobreOProjeto.css";
import { Helmet } from "react-helmet"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function SobreOProjeto() {
    const token = useSelector<TokenState, TokenState['tokens']>(
        (state) => state.tokens
    );
    let navigate = useNavigate();

    useEffect(() => {
        if (token === "") {
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
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela1.png?updatedAt=1679061328198" alt="camada 1 da figura da favela" id="favela1" />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela6.png?updatedAt=1679061386886" alt="camada 6 da figura da favela" id='favela6' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela2.png?updatedAt=1679061412062" alt="camada 2 da figura da favela" id='favela2' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela3.png?updatedAt=1679061411959" alt="camada 3 da figura da favela" id='favela3' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela4.png?updatedAt=1679061411776" alt="camada 4 da figura da favela" id='favela4' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela5.png?updatedAt=1679061412613" alt="camada 5 da figura da favela" id='favela5' />
                <img src="https://ik.imagekit.io/8j6bttpzpq/favela_tree_v2.png?updatedAt=1679617653248" alt="favela" id='favela_poste_esq' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_dir_1.png?updatedAt=1679061415321" alt="figura da pipa da direita 1" id='pipa_dir_1' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_dir_2.png?updatedAt=1679061414288" alt="figura da pipa da direita 2" id='pipa_dir_2' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_esq_1.png?updatedAt=1679061415136" alt="figura da pipa da esquerda 1" id='pipa_esq_1' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_esq_2.png?updatedAt=1679061414585" alt="figura da pipa da esquerda 2" id='pipa_esq_2' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_esq_3.png?updatedAt=1679061415084" alt="figura da pipa da esquerda 3" id='pipa_esq_3' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_esq_4.png?updatedAt=1679061414770" alt="figura da pipa da esquerda 4" id='pipa_esq_4' />
                <h2 id="text">Poder <br /> Digital <br /> Periférico</h2>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela_poste_dir.png?updatedAt=1679061412180" alt="figura do poste" id="favela_poste_dir" />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela_casa_dir.png?updatedAt=1679061412171" alt="figura da casa a direita" id="favela_casa_dir" />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela_casa_esq.png?updatedAt=1679061412610" alt="figura da casa a esquerda" id="favela_casa_esq" />
                <img src="https://ik.imagekit.io/8j6bttpzpq/favla_muro_plant_v2.png?updatedAt=1679617653076" alt="figura do muro" id="favela_muro" />
            </Box>

            <Grid container item md={12} className="sec">
                <h2>Poder Digital Periférico</h2>
                <div className='textoprojeto'>
                    <p className='infoprojeto'>
                        Nosso projeto tem como objetivo a redução das desigualdades, buscando dar visibilidade a artistas periféricos e projetos sociais.
                        Acreditamos que a arte e a cultura são ferramentas poderosas para unir as pessoas e promover mudanças sociais significativas.
                        Nossa principal atividade é dar visibilidade a esses artistas e projetos sociais, através de uma plataforma própria,
                        permitindo que eles possam ser conhecidos e reconhecidos por um público mais amplo. Dessa forma, esperamos criar uma
                        rede de apoio e solidariedade entre esses artistas e projetos sociais, fortalecendo a comunidade como um todo. </p>

                    <p className='infoprojeto'>
                        Nosso público-alvo são entidades doadoras e os próprios artistas periféricos, que muitas vezes têm dificuldade em acessar
                        recursos e divulgar seus trabalhos. Através da nossa plataforma, esperamos conectar esses dois públicos e promover ações
                        concretas para diminuir as desigualdades.
                    </p>

                    <p className='infoprojeto'>
                        Como resultado, esperamos construir uma rede cheia de harmonia e muitas correntes de ajuda, onde artistas periféricos e projetos
                        sociais possam ser valorizados e apoiados. Também buscamos estabelecer parcerias com coletivos e projetos sociais já estruturados,
                        para fortalecer nossa rede e ampliar nosso impacto.
                    </p>

                    <p className='infoprojeto'>
                        O diferencial do nosso projeto é sermos donos da própria plataforma, o que nos permite dar mais atenção ao nosso público e
                        oferecer soluções mais personalizadas e eficazes. Além disso, acreditamos que a cultura e a arte têm o poder de mudar o mundo,
                        e queremos ser parte dessa transformação, contribuindo para um mundo mais justo e igualitário.
                    </p>

                </div>
                <h2>Desenvolvedores</h2>
            </Grid>

            <div className="desenvolvedores">
                <div className="integrantes">
                    <div className="card-container">
                        <img className="round" src="https://ik.imagekit.io/8j6bttpzpq/Ad%C3%A3o.png?updatedAt=1680119559078" alt="user" />
                        <h3>Adão Torres</h3>
                        <h6>São Paulo</h6>
                        <p>Desenvolvedor front-end e back-end</p>
                        <div className="buttons">
                            <a href=" LINKEDIN ADAO" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 55, color: "white" }} />
                            </a>
                            <a href="https://github.com/AdaoTorres" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon style={{ fontSize: 55, color: "white" }} />
                            </a>
                        </div>
                    </div>

                    <div className="card-container">
                        <img className="round" src="https://ik.imagekit.io/8j6bttpzpq/Caique_circular.png?updatedAt=1680119559144" alt="user" />
                        <h3>Caique Motta</h3>
                        <h6>São Paulo</h6>
                        <p>Desenvolvedor front-end e back-end</p>
                        <div className="buttons">

                            <a href="https://www.linkedin.com/in/caique-motta-1682ab14b/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 55, color: "white" }} />
                            </a>
                            <a href="https://github.com/Iamatsuka" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon style={{ fontSize: 55, color: "white" }} />
                            </a>
                        </div>
                    </div>

                    <div className="card-container">
                        <img className="round" src="https://ik.imagekit.io/8j6bttpzpq/fotor_2023-3-29_19_1_27.png?updatedAt=1680127509592" alt="user" />
                        <h3>Fernando Azevedo</h3>
                        <h6>São Paulo</h6>
                        <p>Desenvolvedor front-end e back-end</p>
                        <div className="buttons">
                            <a href="https://www.linkedin.com/in/fernandodazevedo/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 55, color: "white" }} />
                            </a>
                            <a href="https://github.com/fernandodelgadoazevedo" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon style={{ fontSize: 55, color: "white" }} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="integrantes">
                    <div className="card-container">
                        <img className="round" src="https://ik.imagekit.io/8j6bttpzpq/fotor_2023-3-29_16_41_0.png?updatedAt=1680119558606" alt="user" />
                        <h3>Matheus Oliveira</h3>
                        <h6>São Paulo</h6>
                        <p>Desenvolvedor front-end e back-end</p>
                        <div className="buttons">
                            <a href="https://www.linkedin.com/in/dev-matheus-oliveira/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 55, color: "white" }} />
                            </a>
                            <a href="https://github.com/1DevMatheus" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon style={{ fontSize: 55, color: "white" }} />
                            </a>
                        </div>
                    </div>


                    <div className="card-container">
                        <img className="round" src="https://ik.imagekit.io/8j6bttpzpq/fotor_2023-3-29_16_40_22.png?updatedAt=1680119558876" alt="user" />
                        <h3>Rafael Souza</h3>
                        <h6>São Paulo</h6>
                        <p>Desenvolvedor front-end e back-end</p>
                        <div className="buttons">
                            <a href="https://www.linkedin.com/in/rafael-souza-686862118/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 55, color: "white" }} />
                            </a>
                            <a href="https://github.com/VasoRuim011" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon style={{ fontSize: 55, color: "white" }} />
                            </a>
                        </div>
                    </div>

                    <div className="card-container">
                        <img className="round" src="https://ik.imagekit.io/8j6bttpzpq/fotor_2023-3-29_16_37_51.png?updatedAt=1680119559913" alt="user" />
                        <h3>Vinícius Fernando</h3>
                        <h6>São Paulo</h6>
                        <p>Desenvolvedor front-end e back-end</p>
                        <div className="buttons">
                            <a href="https://www.linkedin.com/in/viniferan/" target="_blank" rel="noopener noreferrer">
                                <LinkedInIcon style={{ fontSize: 55, color: "white" }} />
                            </a>
                            <a href="https://github.com/Vinikills" target="_blank" rel="noopener noreferrer">
                                <GitHubIcon style={{ fontSize: 55, color: "white" }} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <Helmet>
                <script src="Script/script.js" type="text/javascript" />
            </Helmet>
        </>
    );
}

export default SobreOProjeto;