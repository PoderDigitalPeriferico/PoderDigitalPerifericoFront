import './Navbar.css'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { buscaId, post } from '../../../services/Services';
import Usuario from '../../../models/Usuario';
import { useEffect, useState } from 'react';
import { addToken } from '../../../store/tokens/actions';
function Navbar() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens);

  const userId = useSelector<TokenState, TokenState['id']>(
    (state)=> state.id
  );
  const userFoto = useSelector<TokenState, TokenState['foto']>(
    (state)=> state.foto
  );


  const [usuario, setUsuario] = useState<Usuario>({
    id: +userId,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
    });


  async function getUserById(id: number) {
    await buscaId(`/usuarios/${id}`, setUsuario, {
    headers: {Authorization: token}
    })
    }

    useEffect(() => {
      getUserById(+userId)
      }, [usuario])



  const dispacth = useDispatch();
  // const pages = ['Posts', 'Favoritos', 'Sobre o projeto'];
  const pages = [
    {
      nome: 'home',
      link: '/home'
    },
    {
      nome: 'Comunidades',
      link: '/temas'
    },
    {
      nome: 'cadastre sua comunidade',
      link: '/formularioTema'
    },
    {
      nome: 'sobre o projeto',
      link: '/sobreoprojeto'
    }
    
  ]

  // const settings = ['Perfil', 'Conta', 'Dashboard', 'Sair'];
  const settings = [
    {
      nome: 'perfil',
      link: '/perfil'
    },  
  ]

  function goLogout() {
    dispacth(addToken(''));
    navigate('/login')
  }


  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  var navbarComponent;

  if (token !== '') {
    navbarComponent = <AppBar className='navbar' position="static">
      
      <Container maxWidth="xl">
        <Toolbar disableGutters>
       <div>
        <img src="https://ik.imagekit.io/wwd7wv4ro/PDP_Recortado.png?updatedAt=1679054395187" alt="" className='logo' />
        </div>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          <Link className='textLink' to='/home'>
            Poder Digital Periferico
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.nome} onClick={handleCloseNavMenu}>
                  <Link style={{ textDecoration: "none", color: '#fff' }} to={page.link}>
                    <Typography className='textLink' textAlign="center">{page.nome}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PDP
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link style={{ textDecoration: "none" }} to={page.link}>
                <Button
                  key={page.nome}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}>
                  {page.nome}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt='foto usuario' src={userFoto}/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting.nome} onClick={handleCloseUserMenu}>
                  <Link style={{ textDecoration: "none" }} to={setting.link}>
                    <Typography textAlign="center">{setting.nome}</Typography>
                  </Link>
                </MenuItem>
              ))}
              <MenuItem onClick={goLogout}>
                <Typography textAlign="center">sair</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  }
    return (
      <>
        {navbarComponent}
      </>
    );
}
  export default Navbar;