import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import Logo from '../src/images/logo.svg'
import LoginModal from './LoginModals/LoginModal'
import './App.css';
import PostBloodRequestModal from './PostBloodRequestModal';


function LoginButton(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      {/* LOGIN POP-OVER */}
      <Button aria-describedby={id}
        color="inherit"
        variant="outlined"
        style={{
			align: "right",
			color: "#bb0a1e",
			"font-size": "18px",
			"font-weight": "bold",
			marginRight: "10px",
		  }}
        onClick={handleClick}>
        LOGIN
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}

        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <LoginModal loginActor="AS A BLOOD BANK"
					signUpActor="Name of Blood Bank"
					actor = "bloodbank"
					{...props}
        />
        
        <LoginModal loginActor="AS A DONOR"
					signUpActor="Full Name"
					actor = "user"
					{...props}
        />

      </Popover>
    </div>
  );
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static"
          style={{ "background-color": "black" }}
        >
          <Toolbar style={{ "padding": "10px" }}>
            <img src={Logo}
              alt="website Logo"
              width="80"
              height="75"
              style={{ "padding-right": "40px" }}
            >
            </img>

            <Typography variant="h3"
              style={{
                flex: 1,
                color: "#bb0a1e",
                "font-weight": "bold"
              }}
            >
              BLOOD DONATION
            </Typography >

            {/* ---- POST  A  BLOOD  REQUEST ---- */}
            <PostBloodRequestModal/>
            {/* LOGIN  BUTTON  */}
            <LoginButton {...this.props}/>
          </Toolbar>
        </AppBar>


      </div>
    );
  }
}

export default Header;