import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Button } from "@material-ui/core";
import { Box, Fab, Modal } from '@mui/material';
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@mui/icons-material/Add';

import './ModalPostagem.css';
import CadastroPost from '../cadastroPost/CadastroPost';


function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 375,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

function ModalPostagem(props: any) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  // const [open, setOpen] = React.useState(props.open);

  // const handleOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <Box display="flex" justifyContent="flex-end" className="cursor">
        <CloseIcon onClick={props.onClose} />

      </Box>

      <CadastroPost onCloseModal={props.onClose} />

    </div>
  );

  return (
    <div>
      <Fab className="btnModal"
        onClick={props.onOpen} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      
      <Modal
        open={props.onChangeState}
        onClose={props.onClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
export default ModalPostagem