import React from 'react';
import Modal from '@material-ui/core/Modal';
import { Button, Grid } from '@material-ui/core';
import { useStyles } from './UseStyles'

import ModalContentTabs from './ModalContentTabs';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


export default function LoginModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>

      <Button onClick={handleOpen}>
        {props.loginActor}
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          
		  <ModalContentTabs {...props} />

        </div>
      </Modal>
    </div>
  );
}

