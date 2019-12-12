import React from 'react'

import TextField from '@material-ui/core/TextField';
import {
	Typography,
	Grid,
	ExpansionPanel,
	ExpansionPanelSummary,
	FormControl,
	Select,
	InputLabel,
	MenuItem,
	Button
} from '@material-ui/core';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from '../Blood-Bank/UseStyles';
import Axios from 'axios';

function ViewPotentialDonors() {
	const [bloodInfo, setBloodInfo] = React.useState({
		bloodGroup: ''
	});
	const [donors, setDonors] = React.useState([]);

	const handleChange=(event)=>{
		event.preventDefault();
		setBloodInfo({...bloodInfo, bloodGroup: event.target.value});
		
	}

	const handleSubmit =()=>{
		console.log(bloodInfo.bloodGroup)
		Axios.get('http://localhost:8080/bloodbank/viewdonors', {bloodGroup:bloodInfo.bloodGroup})
		.then((response) => {
			setDonors(response.data.potentialDonors );
			console.log(donors);
		})
		.catch(function (error) {
			console.log(error);
		}
		)
	}
	const classes = useStyles();
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
						View Potential Donors
                    </Typography>
				</ExpansionPanelSummary>

				<ExpansionPanelDetails>
					<Grid
						container
						direction="row"
						justify="space-between"
						style={{ paddingLeft: "20px", paddingRight: "100px" }}
					>
						{/* NAME OF THE DONOR */}

						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="gender-simple">Blood Group</InputLabel>
							<Select
								value={bloodInfo.bloodGroup}
								onChange={handleChange}
								inputProps={{
									name: 'Blood Group',
									id: 'gender-simple',
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

						<Button
						variant="outlined"
						style={{
							fontWeight: "bold",
							fontSize: 17,
							marginLeft: 15
						}}
						onClick={handleSubmit}>
							View Donors
						</Button>
					</Grid>

				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	)
}


export default ViewPotentialDonors