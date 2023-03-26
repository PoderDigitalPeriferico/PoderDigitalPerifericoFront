import React, {useState, useEffect, ChangeEvent} from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import {useNavigate, useParams } from 'react-router-dom'
import './CadastroTema.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Services';
import { toast } from 'react-toastify';


function CadastroTema() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    const [tema, setTema] = useState<Tema>({
        id: 0,
        tema: ''
    })

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado',{
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            
            navigate("/login")
    
        }
    }, [token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/temas/${id}`, setTema, {
            headers: {
              'Authorization': token
            }
          })
        }

        function updatedTema(e: ChangeEvent<HTMLInputElement>) {

            setTema({
                ...tema,
                [e.target.name]: e.target.value,
            })
    
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            
    
            if (id !== undefined) {
            await put(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Tema atualizado com sucesso',{
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            } else {
               await post(`/temas`, tema, setTema, {
                    headers: {
                        'Authorization': token
                    }
                })
                toast.success('Tema cadastrado com sucesso',{
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable: false,
                    theme: "colored",
                    progress: undefined,
                });
            }
            back()
    
        }
    
        function back() {
            navigate('/temas')
        }

        const tempo_de_delay = 10000

setTimeout(() => (
    document.body.style.backgroundSize = '100%',
    document.body.style.backgroundRepeat = 'no-repeat',
    document.body.style.transition = "background 500ms ease",
    document.body.style.backgroundImage = "url('https://classic.exame.com/wp-content/uploads/2022/10/MACRO-3-1.jpg?quality=70&strip=info&w=1024')"
), tempo_de_delay)

const tempo_de_delay1 = 20000

setTimeout(() => (
    document.body.style.backgroundSize = '100vw',
    document.body.style.backgroundRepeat = 'no-repeat',
    document.body.style.transition = "background 500ms ease",
    document.body.style.backgroundImage = "url('https://veja.abril.com.br/wp-content/uploads/2022/04/GettyImages-163394488.jpg?quality=70&strip=info&w=1280&h=720&crop=1')"
), tempo_de_delay1)


    return (

        <Container  id='container' maxWidth="sm" className="topo">
            
            <form onSubmit={onSubmit}>
                <Typography className='titulo' variant="h3" component="h1" align="center" >Cadastre sua Comunidade</Typography>
                <TextField value={tema.tema} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="temas" label="Qbrada" variant="outlined" name="tema" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Cadastrar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;