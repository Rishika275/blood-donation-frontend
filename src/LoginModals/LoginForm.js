import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, TextField, Button } from '@material-ui/core';
import { useStyles } from '../LoginModals/UseStyles';
import axios from "axios";


function LoginForm(props) {
	const classes = useStyles();
	const actor = props.actor;
	let url;

	const [credentials, setCredentials] = React.useState({
		email: '',
		password: ''
	})
	const [authenticated, setAuth] = React.useState({
		authenticated: false
	})

	const handleEmailChange = email => event => {
		//  console.log(event.target.value);
		//console.log(credentials.email);
		setCredentials({ ...credentials, [email]: event.target.value });

	};

	const handlePasswordChange = password => event => {
		setCredentials({ ...credentials, [password]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		let redirectToPage = '';
		if (actor === "bloodbank") {
			url = 'http://localhost:8080/home/auth/bloodbanklogin';
			redirectToPage = '/blood-bank'	
		}
		else {
			url = 'http://localhost:8080/home/auth/userlogin';
			redirectToPage = '/donor'
		}
		console.log(url);
		axios.post(url, credentials)
			.then(function (response) {
				if (response.status === 200) {
					console.log(props);
					setAuth({ ...authenticated, [authenticated]: true })
					props.history.push({
						pathname: redirectToPage,
						state: {email: credentials.email}
					});	
				}
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<div>
			<form className={classes.container} noValidate autoComplete="off">
				<Grid
					container
					direction="column"
					style={{ paddingRight: "50px" }}
				>
					{/*  */}
					<TextField
						id="outlined-with-placeholder"
						label="E-mail id"
						placeholder="E-mail Id"
						className={classes.modalTextField}
						fullWidth
						margin="normal"
						variant="outlined"
						value={credentials.email}
						onChange={handleEmailChange('email')}
					/>

					<TextField
						id="standard-password-input"
						label="Password"
						type="password"
						autoComplete="current-password"
						placeholder="Password"
						style={{ margin: 15 }}
						fullWidth
						margin="normal"
						variant="outlined"
						InputLabelProps={{
							shrink: true,
						}}
						value={credentials.password}
						onChange={handlePasswordChange('password')}
					/>
				</Grid>
				
				<Button
					variant="outlined"
					style={{
						fontWeight: "bold",
						fontSize: 17,
						marginLeft: 15,
					}}
					onClick={handleSubmit}
				>
					Login
          		</Button>


			</form>
		</div>
	)
}

export default LoginForm;