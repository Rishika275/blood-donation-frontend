import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

import TextField from '@material-ui/core/TextField';
import { Typography, Grid, ExpansionPanel, ExpansionPanelSummary, Button } from '@material-ui/core';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';
import { useStyles } from '../Blood-Bank/UseStyles';
import Axios from 'axios';

function EnterNewBloodDetails(props) {
	const classes = useStyles();
	console.log(props.location.state.email);
	const [donationDetails, setDonationDetails] = React.useState({
		name: '',
		contact: '',
		gender: '',
		email: '',
		bloodGroup: '',
		amtOfBlood: '',
		bbemail: props.location.state.email,
	});

	const handleChange = event => {
		setDonationDetails({
			...donationDetails,
			[event.target.name]: event.target.value,
		});
	};


	const handleDateChange = date => {
		setDonationDetails({ ...donationDetails, dob: date });
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		Axios.post('http://localhost:8080/bloodbank/storenewblood/', donationDetails)
			.then(function (response) {
				if (response.status === 200) {
					// setUserData({ ...newUserData, name: '' });
					// setUserData({ ...newUserData, gender: '' });
					// setUserData({ ...newUserData, dateOfBirth: new Date('2014-08-18') });
					// setUserData({ ...newUserData, bloodGroup: '' });
					// setUserData({ ...newUserData, location: '' });
					// setUserData({ ...newUserData, contact: '' });
					// setUserData({ ...newUserData, email: '' });
					// setUserData({ ...newUserData, password: '' });
					console.log(response);

				}
			})
			.catch(function (error) {
				console.log(error.message);
			});
	}

	return (
		<div>
			{/* ENTER NEW BLOOD DETAILS */}
			<ExpansionPanel>
				<ExpansionPanelSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography
						style={{
							fontWeight: "bold",
							color: "#1a1a1a",
							fontSize: "30px",
							// paddingLeft: "15px"
						}}
					>
						Enter Blood Donation Details
              		</Typography>
				</ExpansionPanelSummary>

				<ExpansionPanelDetails>
					<form className={classes.container} noValidate autoComplete="off">
						<Typography
							variant="h5"
							fontWeight="bold"
							style={{
								textDecoration: "underline",
								paddingLeft: "20px",

							}}
						>
							Donor Details
                        </Typography>

						<Grid
							container
							direction="row"
							justify="space-between"
							style={{ paddingLeft: "50px", paddingRight: "200px" }}
						>
							{/* NAME OF THE DONOR */}

							<TextField
								required
								name="name"
								label="Name of the Donor"
								placeholder="Name of the Donor"
								className={classes.textField}
								margin="normal"
								variant="outlined"
								value={donationDetails.name}
								onChange={handleChange}
							/>

							{/* CONTACT NUMBER  */}
							<TextField
								required
								name="contact"
								label="Contact Number"
								placeholder="Contact Number"
								className={classes.textField}
								margin="normal"
								variant="outlined"
								value={donationDetails.contact}
								onChange={handleChange}
							/>
						</Grid>

						<Grid
							container
							direction="row"
							justify="space-between"
							style={{ paddingLeft: "60px", paddingRight: "200px" }}
						>
							{/* {/* DATE OF BIRTH */}
							<MuiPickersUtilsProvider utils={DateFnsUtils}>
								<KeyboardDatePicker
									margin="normal"
									id="date-of-birth"
									name="dob"
									label="Date of Birth"
									format="yyyy-MM-dd"
									value={donationDetails.dob}
									onChange={handleDateChange}
									KeyboardButtonProps={{
										'aria-label': 'change date',
									}}
									style={{ maxWidth: 200 }}
								/>
							</MuiPickersUtilsProvider> 

							{/* EMAIL ID  */}
							<TextField
								required
								name="email"
								label="Email Id"
								placeholder="Email Id"
								className={classes.textField}
								margin="normal"
								variant="outlined"
								value={donationDetails.email}
								onChange={handleChange}
							/>
						</Grid>

						<Grid
							container
							direction="row"
							style={{ paddingLeft: "50px", paddingRight: "200px" }}
						>
							<FormControl className={classes.formControl}>
						<InputLabel htmlFor="gender-simple">Gender</InputLabel>
						<Select

							value={donationDetails.gender}
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

						{/*    --------BLOOD  DETAILS ------- */}
						<Typography
							variant="h5"
							fontWeight="bold"
							style={{
								paddingTop: "30px",
								textDecoration: "underline",
								paddingLeft: "20px"
							}}
						>
							Blood Details
                        </Typography>


						<Grid
							container
							direction="row"
							justify="space-between"
							style={{ paddingLeft: "50px", paddingRight: "200px" }}
						>
							{/* -- BLOOD GROUP -- */}

							<FormControl className={classes.formControl}>
								<InputLabel htmlFor="gender-simple">Blood Group</InputLabel>
								<Select
									value={donationDetails.bloodGroup}
									onChange={handleChange}
									inputProps={{
										name: 'bloodGroup',
										id: 'bloodGroup-simple',
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

							{/* AMOUNT OF BLOOD IN ML */}
							<TextField
								required
								name="amtOfBlood"
								label="Amount of Blood in ml"
								placeholder="Amount of Blood in ml"
								className={classes.textField}
								margin="normal"
								variant="outlined"
								value={donationDetails.amtOfBlood}
								onChange={handleChange}
							/>

						</Grid>

						<Grid
							container
							direction="row"
							justify="space-between"
							style={{ paddingLeft: "50px", paddingRight: "200px" }}
						>

							<Button
								variant="outlined"
								style={{
									fontWeight: "bold",
									fontSize: 17,
									marginLeft: 15
								}}
								onClick={handleSubmit}
							>
								Submit
							</Button>
						</Grid>

					</form>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	)
}

export default EnterNewBloodDetails;