import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import './TabPostagem.css';
import ListaPostagem from '../listaPostagem/ListaPostagem';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs className='Tabcolor' centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sul" value="2" />
            <Tab label="Leste" value="3" />
            <Tab label="Oeste" value="4" />
            <Tab label="Centro" value="5" />
            <Tab label="Norte" value="6" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Postagens da região</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">SUL</Typography>
          </Box>
        </TabPanel>
        <TabPanel value="3" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Postagens da região</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">LESTE</Typography>
          </Box>
        </TabPanel>
        <TabPanel value="4" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Postagens da região</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">OESTE</Typography>
          </Box>
        </TabPanel>
        <TabPanel value="5" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Postagens da região</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">CENTRO</Typography>
          </Box>
        </TabPanel>
        <TabPanel value="6" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Postagens da região</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">NORTE</Typography>
          </Box>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;