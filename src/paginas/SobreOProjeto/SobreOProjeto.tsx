import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react'
import "./SobreOProjeto.css";
import { Helmet } from "react-helmet"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';

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
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela2.png?updatedAt=1679061412062"    alt="camada 2 da figura da favela" id='favela2'  />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela3.png?updatedAt=1679061411959" alt="camada 3 da figura da favela" id='favela3' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela4.png?updatedAt=1679061411776" alt="camada 4 da figura da favela" id='favela4' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela5.png?updatedAt=1679061412613" alt="camada 5 da figura da favela" id='favela5' />
                <img src="https://ik.imagekit.io/8j6bttpzpq/favela_tree_v2.png?updatedAt=1679617653248" alt="favela" id='favela_poste_esq' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_dir_1.png?updatedAt=1679061415321" alt="figura da pipa da direita 1" id='pipa_dir_1' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_dir_2.png?updatedAt=1679061414288" alt="figura da pipa da direita 2" id='pipa_dir_2' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_esq_1.png?updatedAt=1679061415136" alt="figura da pipa da esquerda 1" id='pipa_esq_1' />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_esq_2.png?updatedAt=1679061414585" alt="figura da pipa da esquerda 2" id='pipa_esq_2'/>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_esq_3.png?updatedAt=1679061415084" alt="figura da pipa da esquerda 3" id='pipa_esq_3'/>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/pipa_esq_4.png?updatedAt=1679061414770" alt="figura da pipa da esquerda 4" id='pipa_esq_4'/>
                <h2 id="text">Poder <br /> Digital <br /> Periférico</h2>
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela_poste_dir.png?updatedAt=1679061412180" alt="figura do poste" id="favela_poste_dir" />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela_casa_dir.png?updatedAt=1679061412171" alt="figura da casa a direita" id="favela_casa_dir" />
                <img src="https://ik.imagekit.io/vinikills/IMAGENS_SOBRE_O_PROJETO/favela_casa_esq.png?updatedAt=1679061412610" alt="figura da casa a esquerda" id="favela_casa_esq" />
                <img src="https://ik.imagekit.io/8j6bttpzpq/favla_muro_plant_v2.png?updatedAt=1679617653076" alt="figura do muro" id="favela_muro" />
            </Box>

            <Grid container item md={12} className="sec">
                <h2>Poder Digital Periférico</h2>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique error a incidunt. Quisquam voluptatibus eius sit 
                        fugit saepe vero. Molestias omnis eligendi officiis totam aperiam, commodi sunt odio accusantium doloremque!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique error a incidunt. Quisquam voluptatibus eius sit 
                        fugit saepe vero. Molestias omnis eligendi officiis totam aperiam, commodi sunt odio accusantium doloremque!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique error a incidunt. Quisquam voluptatibus eius sit 
                        fugit saepe vero. Molestias omnis eligendi officiis totam aperiam, commodi sunt odio accusantium doloremque!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique error a incidunt. Quisquam voluptatibus eius sit 
                        fugit saepe vero. Molestias omnis eligendi officiis totam aperiam, commodi sunt odio accusantium doloremque!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique error a incidunt. Quisquam voluptatibus eius sit 
                        fugit saepe vero. Molestias omnis eligendi officiis totam aperiam, commodi sunt odio accusantium doloremque!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique error a incidunt. Quisquam voluptatibus eius sit 
                        fugit saepe vero. Molestias omnis eligendi officiis totam aperiam, commodi sunt odio accusantium doloremque!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique error a incidunt. Quisquam voluptatibus eius sit 
                        fugit saepe vero. Molestias omnis eligendi officiis totam aperiam, commodi sunt odio accusantium doloremque!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique error a incidunt. Quisquam voluptatibus eius sit 
                        fugit saepe vero. Molestias omnis eligendi officiis totam aperiam, commodi sunt odio accusantium doloremque!
                    </p>
                </div>
            </Grid>

            <div className="integrantes">
                <div className="card-container">
                    <div className="card-info">
                        <img className="round" src="https://ik.imagekit.io/8j6bttpzpq/adao.jpg?updatedAt=1679610027008" alt="user" />
                        <h3>Adão</h3>
                        <h6>São Paulo</h6>
                        <p>Desenvolvedor front-end e back-end</p>
                        <div className="buttons">
                            <button className="primary">
                                Message
                            </button>
                            <button className="primary ghost">
                                Following
                            </button>
                        </div>
                    </div>
                    <div className="card-text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A odit velit atque libero voluptatum, est, dolor consequatur amet pariatur corporis ea suscipit aut dicta quam perspiciatis ipsum! Quae, molestias praesentium.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A odit velit atque libero voluptatum, est, dolor consequatur amet pariatur corporis ea suscipit aut dicta quam perspiciatis ipsum! Quae, molestias praesentium. 
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A odit velit atque libero voluptatum, est, dolor consequatur amet pariatur corporis ea suscipit aut dicta quam perspiciatis ipsum! Quae, molestias praesentium.</p>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card-info">
                        <img className="round" src="https://ik.imagekit.io/8j6bttpzpq/caiqueBack.jpg?updatedAt=1679605343559" alt="user" />
                        <h3>Caique</h3>
                        <h6>São Paulo</h6>
                        <p>Desenvolvedor front-end e back-end</p>
                        <div className="buttons">
                            <button className="primary">
                                Message
                            </button>
                            <button className="primary ghost">
                                Following
                            </button>
                        </div>
                    </div>
                <div className="card-text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A odit velit atque libero voluptatum, est, dolor consequatur amet pariatur corporis ea suscipit aut dicta quam perspiciatis ipsum! Quae, molestias praesentium.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A odit velit atque libero voluptatum, est, dolor consequatur amet pariatur corporis ea suscipit aut dicta quam perspiciatis ipsum! Quae, molestias praesentium. 
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A odit velit atque libero voluptatum, est, dolor consequatur amet pariatur corporis ea suscipit aut dicta quam perspiciatis ipsum! Quae, molestias praesentium.</p>
                    </div>
                </div>


                
                <div className="card-container">
                    <div className="card-info">
                        <img className="round" src="https://ik.imagekit.io/8j6bttpzpq/fernando_1_.jpg?updatedAt=1679610230621" alt="user" />
                        <h3>Fernando</h3>
                        <h6>São Paulo</h6>
                        <p>Desenvolvedor front-end e back-end</p>
                        <div className="buttons">
                            <button className="primary">
                                Message
                            </button>
                            <button className="primary ghost">
                                Following
                            </button>
                        </div>
                    </div>
                    <div className="card-text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A odit velit atque libero voluptatum, est, dolor consequatur amet pariatur corporis ea suscipit aut dicta quam perspiciatis ipsum! Quae, molestias praesentium.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A odit velit atque libero voluptatum, est, dolor consequatur amet pariatur corporis ea suscipit aut dicta quam perspiciatis ipsum! Quae, molestias praesentium. 
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A odit velit atque libero voluptatum, est, dolor consequatur amet pariatur corporis ea suscipit aut dicta quam perspiciatis ipsum! Quae, molestias praesentium.</p>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card-info">
                        <img className="round" src="https://ik.imagekit.io/8j6bttpzpq/matheus.jpg?updatedAt=1679610027722" alt="user" />
                        <h3>Matheus</h3>
                        <h6>São Paulo</h6>
                        <p>Desenvolvedor front-end e back-end</p>
                        <div className="buttons">
                            <button className="primary">
                                Message
                            </button>
                            <button className="primary ghost">
                                Following
                            </button>
                        </div>
                    </div>
                    <div className="card-text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A odit velit atque libero voluptatum, est, dolor consequatur amet pariatur corporis ea suscipit aut dicta quam perspiciatis ipsum! Quae, molestias praesentium.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A odit velit atque libero voluptatum, est, dolor consequatur amet pariatur corporis ea suscipit aut dicta quam perspiciatis ipsum! Quae, molestias praesentium. 
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A odit velit atque libero voluptatum, est, dolor consequatur amet pariatur corporis ea suscipit aut dicta quam perspiciatis ipsum! Quae, molestias praesentium.</p>
                    </div>
                </div>

                
                <div className="card-container">
                    <div className="card-info">
                        <img className="round" src="https://ik.imagekit.io/8j6bttpzpq/rafael.jpg?updatedAt=1679610024408" alt="user" />
                        <h3>Rafael</h3>
                        <h6>São Paulo</h6>
                        <p>Desenvolvedor front-end e back-end</p>
                        <div className="buttons">
                            <button className="primary">
                                Message
                            </button>
                            <button className="primary ghost">
                                Following
                            </button>
                        </div>
                    </div>
                    <div className="card-text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A odit velit atque libero voluptatum, est, dolor consequatur amet pariatur corporis ea suscipit aut dicta quam perspiciatis ipsum! Quae, molestias praesentium.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A odit velit atque libero voluptatum, est, dolor consequatur amet pariatur corporis ea suscipit aut dicta quam perspiciatis ipsum! Quae, molestias praesentium. 
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A odit velit atque libero voluptatum, est, dolor consequatur amet pariatur corporis ea suscipit aut dicta quam perspiciatis ipsum! Quae, molestias praesentium.</p>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card-info">
                        <img className="round" src="https://ik.imagekit.io/8j6bttpzpq/vinicius.jpg?updatedAt=1679610025929" alt="user" />
                        <h3>Vinícius</h3>
                        <h6>São Paulo</h6>
                        <p>Desenvolvedor front-end e back-end</p>
                        <div className="buttons">
                            <button className="primary">
                                Message
                            </button>
                            <button className="primary ghost">
                                Following
                            </button>
                        </div>
                    </div>
                    <div className="card-text">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A odit velit atque libero voluptatum, est, dolor consequatur amet pariatur corporis ea suscipit aut dicta quam perspiciatis ipsum! Quae, molestias praesentium.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A odit velit atque libero voluptatum, est, dolor consequatur amet pariatur corporis ea suscipit aut dicta quam perspiciatis ipsum! Quae, molestias praesentium. 
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A odit velit atque libero voluptatum, est, dolor consequatur amet pariatur corporis ea suscipit aut dicta quam perspiciatis ipsum! Quae, molestias praesentium.</p>
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