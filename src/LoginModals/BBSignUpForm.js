import React from 'react'
import { Grid, TextField, Button } from '@material-ui/core';
import { useStyles } from './UseStyles';
import axios from 'axios';


export default function BBSignUpForm(props) {
	const classes = useStyles();
	const [newBBData, setBBData] = React.useState({
		name: '',
		location: '',
		contact: '',
		email: '',
		password: '',

	})
	const handleChange = event => {
		//  console.log(event.target.name);
		//console.log(credentials.email);
		setBBData({ ...newBBData, [event.target.name]: event.target.value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.post('http://localhost:8080/home/register/bloodbankreg', newBBData)
			.then(function (response) {
				if(response.status === 200){
					setBBData({  name: ''});
					setBBData({location: ''});
					setBBData({ contact: ''});
					setBBData({email: ''});
					setBBData({ password: ''});
					
					
				}
			})
			.catch(function (error) {
				console.log(error.message);
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

					<TextField
						label="Name of Blood Bank"
						name="name"
						style={{ margin: 5 }}
						placeholder="Name Of Blood Bank"
						className={classes.modalTextField}
						fullWidth
						margin="normal"
						variant="outlined"
						value={newBBData.name}
						onChange={handleChange}
					/>

					<TextField
						label="Location"
						name="location"
						style={{ margin: 5 }}
						placeholder="Location"
						className={classes.modalTextField}
						fullWidth
						margin="normal"
						variant="outlined"
						value={newBBData.location}
						onChange={handleChange}
					/>

					<TextField
						label="Contact Number"
						name="contact"
						style={{ margin: 5 }}
						placeholder="Contact Number"
						className={classes.modalTextField}
						fullWidth
						margin="normal"
						variant="outlined"
						value={newBBData.contact}
						onChange={handleChange}
					/>

					<TextField
						label="E-mail Id"
						name="email"
						style={{ margin: 5 }}
						placeholder="E-mail Id"
						className={classes.modalTextField}
						fullWidth
						margin="normal"
						variant="outlined"
						value={newBBData.email}
						onChange={handleChange}
					/>

					<TextField
						label="Password"
						name="password"
						type="password"
						autoComplete="current-password"
						placeholder="Password"
						style={{ margin: 5 }}
						className={classes.modalTextField}
						fullWidth
						margin="normal"
						variant="outlined"
						value={newBBData.password}
						onChange={handleChange}
					/>
				</Grid>
				<Button
					variant="outlined"
					style={{
						fontWeight: "bold",
						fontSize: 17,
						marginLeft: 15
					}}
					onClick = {handleSubmit}
				>
					Sign Up
          </Button>

			</form>
		</div>
	)
}

