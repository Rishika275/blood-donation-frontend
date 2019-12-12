import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../images/BD-Logo.png'

class BBHeader extends React.Component {
	handleLogout= (event)=>{
		event.preventDefault();
		this.props.history.push('/');
	}
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
  
              <Typography variant="h2"
                style={{
                  flex: 1,
                  color: "#bb0a1e",
                  "font-family": "Times New Roman",
                  "font-weight": "bold"
                }}
              >
                BLOOD DONATION
              </Typography >

              <Button
              color="inherit"
              variant="outlined"
              style={{
                align: "right",
                color: "#bb0a1e",
                "font-size": "18px",
                "font-weight": "bolder",
                marginRight: "30px",
			  }}
			  onClick = {this.handleLogout}
              >
                LOGOUT
              </Button>
            </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default BBHeader;