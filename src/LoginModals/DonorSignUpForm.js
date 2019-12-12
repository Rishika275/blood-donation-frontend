import React from 'react';
import { Grid, TextField, Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import { useStyles } from './UseStyles';
import axios from 'axios';

export default function DonorSignUpForm() {
	const classes = useStyles();
	const [newUserData, setUserData] = React.useState({
		name: '',
		gender: '',
		dateOfBirth: new Date('2014-08-18'),
		bloodGroup: '',
		location: 'Hyderabad',
		contact: '',
		email: '',
		password: '',

	})
	const handleChange = event => {
		//  console.log(event.target.name);
		//console.log(credentials.email);
		setUserData({ ...newUserData, [event.target.name]: event.target.value });
	};

	const handleDateChange = date => {
		setUserData({ ...newUserData, dateOfBirth: date });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		axios.post('http://localhost:8080/home/register/newuser', newUserData)
			.then(function (response) {
				if (response.status === 200){
					setUserData({name:''});
					setUserData({gender:''});
					setUserData({ dateOfBirth: new Date('2014-08-18')});
					setUserData({bloodGroup:''});
					setUserData({ location:''});
					setUserData({ contact:''});
					setUserData({email:''});
					setUserData({password:''});
					
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
					{/* FULL NAME */}
					<TextField
						name="name"
						label="Full Name"
						style={{ margin: 5 }}
						placeholder="Full Name"
						className={classes.modalTextField}
						fullWidth
						margin="normal"
						variant="outlined"			
						onChange={handleChange}
						value={newUserData.name}
					/>

					{/* CONTACT NUMBER */}
					<TextField
						
						name="contact"
						label="Contact Number"
						style={{ margin: 5 }}
						placeholder="Contact Number"
						className={classes.modalTextField}
						fullWidth
						margin="normal"
						variant="outlined"
						value={newUserData.contact}
						onChange={handleChange}
					/>

					{/* EMAIL ID */}
					<TextField
						
						name="email"
						label="E-mail Id"
						style={{ margin: 5 }}
						placeholder="E-mail Id"
						className={classes.modalTextField}
						fullWidth
						margin="normal"
						variant="outlined"
						value={newUserData.email}
						onChange={handleChange}
					/>

					{/* PASSWORD */}
					<TextField
						id="standard-password-input"
						name="password"
						label="Password"
						type="password"
						autoComplete="current-password"
						placeholder="Password"
						style={{ margin: 5 }}
						className={classes.modalTextField}
						fullWidth
						margin="normal"
						variant="outlined"
						value={newUserData.password}
						onChange={handleChange}
					/>
					{/* DATE OF BIRTH */}
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardDatePicker
							margin="normal"
							id="date-of-birth"
							name="dateOfBirth"
							label="Date of Birth"
							format="yyyy-MM-dd"
							value={newUserData.dateOfBirth}
							onChange={handleDateChange}
							KeyboardButtonProps={{
								'aria-label': 'change date',
							}}
							style={{ maxWidth: 200 }}
						/>
					</MuiPickersUtilsProvider>

					{/* BLOOD GROUP */}
					<FormControl className={classes.formControl}>
						<InputLabel htmlFor="gender-simple">Blood Group</InputLabel>
						<Select
							value={newUserData.bloodGroup}
							onChange={handleChange}
							inputProps={{
								name: 'bloodGroup',
								id: 'blood-group-simple',
							}}
						>
							<MenuItem value={"A+"}>A+</MenuItem>
							<MenuItem value={"A-"}>A-</MenuItem>

							<MenuItem value={"AB+"}>AB+</MenuItem>
							<MenuItem value={"AB-"}>AB-</MenuItem>

							<MenuItem value={"B+"}>B+</MenuItem>
							<MenuItem value={"B-"}>B-</MenuItem>

							<MenuItem value={"O+"}>O+</MenuItem>
							<MenuItem value={"O-"}>O-</MenuItem>

							<MenuItem value={"Bombay Blood Group"}>
								Bombay Blood Group
                                    </MenuItem>
						</Select>
					</FormControl>

					{/*  GENDER  */}
					<FormControl className={classes.formControl}>
						<InputLabel htmlFor="gender-simple">Gender</InputLabel>
						<Select

							value={newUserData.gender}
							onChange={handleChange}
							inputProps={{
								name: 'gender',
								id: 'gender-simple',
							}}
						>
							<MenuItem value={"Male"}>Male</MenuItem>
							<MenuItem value={"Female"}>Female</MenuItem>
							<MenuItem value={"Other"}>Other</MenuItem>
						</Select>
					</FormControl>

				</Grid>

				<Button
					variant="outlined"
					style={{
						fontWeight: "bold",
						fontSize: 17,
						marginLeft: 15
					}}
					onClick={handleSubmit}
				>
					Sign Up
          		</Button>
			</form>
		</div>
	)

}