import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import Tema from '../../../models/Tema';
import './ListaTema.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Services';
import { toast } from 'react-toastify';



function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let navigate = useNavigate();

  useEffect(()=>{
    if(token == ''){
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


  async function getTema(){
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(()=>{
    getTema()
  }, [temas.length])

  return (
  <div className='fundo-fundo'>
  <div className='fundo-listaTemas'>
    {
      temas.map(tema =>(
      <Box>
        <Card className='cards' variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Comunidade/Região
            </Typography>
            <Typography variant="h5" component="h2">
            {tema.tema}
            </Typography>
          </CardContent>
          <CardActions>
            <Box className="BoxButton">

              <Link to={`/formularioTema/${tema.id}`} className="text-link">
                <Box >
                  <Button variant="contained" className="buttonTema"size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link className='text-link'  to={`/deletarTema/${tema.id}`}>
                <Box >
                  <Button className="buttonTema" variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
              <Link className='text-link'  to={`/listaPorTema/${tema.id}`}>
                <Box >
                  <Button className="buttonTema" variant="contained" size='small' color="default">
                    Ver Postagens
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </div>
    </div>
  );
}


export default ListaTema;