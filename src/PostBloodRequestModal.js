import React from 'react';
import Modal from '@material-ui/core/Modal';
import {
	Button, Grid, TextField,
	MenuItem, FormControl, InputLabel,
	Select,
} from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from '@material-ui/pickers';

import { useStyles } from './LoginModals/UseStyles'
import Axios from 'axios';

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}


export default function PostBloodRequestModal() {
	const classes = useStyles();
	// HANDLE THE OPENING CLOSING OF MODAL
	const [modalStyle] = React.useState(getModalStyle);
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const [newBloodRequest, setNewBloodRequest] = React.useState({
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
		setNewBloodRequest({ ...newBloodRequest, [event.target.name]: event.target.value });
	};

	const handleDateChange = date => {
		setNewBloodRequest({ ...newBloodRequest, dateOfBirth: date });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setNewBloodRequest({})
	}
	return (
		<div>
			<Button onClick={handleOpen}
				color="inherit"
				variant="outlined"
				style={{
					align: "right",
					color: "#bb0a1e",
					"font-size": "18px",
					"font-weight": "bold",
					marginRight: "10px",
				}}
			>
				REQUEST BLOOD
      </Button>
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={open}
				onClose={handleClose}
			>
				<div style={modalStyle} className={classes.paper}>
					{/* CONTENT IN THE MODAL */}
					<Grid
						container
						direction="row"
						justify="space-around"
					>
						{/* CONTACT NAME */}
						<TextField
							id="filled-full-width"
							label="Contact Name"

							style={{ margin: 5 }}
							placeholder="Full Name"
							className={classes.modalTextField}
							
							margin="normal"
							variant="outlined"
							onChange={handleChange}
							value={newBloodRequest.name}
						/>

						{/* CONTACT NUMBER */}
						<TextField
							id="filled-full-width"
							label="Contact Number"
							style={{ margin: 15 }}
							className={classes.modalTextField}
							
							margin="normal"
							variant="outlined"
							onChange={handleChange}
							value={newBloodRequest.contact}
						/>

						{/* EMAIL ID */}
						<TextField
							id="filled-full-width"
							label="E-mail Id"
							name="email"
							className={classes.modalTextField}
							
							margin="normal"
							variant="outlined"
							onChange={handleChange}
							value={newBloodRequest.email}
						/>

						{/* SELECT BLOOD GROUP */}
						<FormControl className={classes.formControl}>
							<InputLabel htmlFor="gender-simple">Blood Group</InputLabel>
							<Select
								value={newBloodRequest.bloodGroup}
								onChange={handleChange}
								fullWidth
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



						{/* DATE BY WHEN BLOOD IS REQUIRED */}
						<MuiPickersUtilsProvider utils={DateFnsUtils} >

							<KeyboardDatePicker
								disableToolbar
								variant="inline"
								
								style={{ marginRight: 20, marginLeft: 20, }}
								format="MM/dd/yyyy"
								margin="normal"
								id="date-picker-inline"
								label="Date picker inline"
								value={newBloodRequest.dateOfBirth}
								onChange={handleDateChange}
								KeyboardButtonProps={{
									'aria-label': 'change date',
								}}
							/>
						</MuiPickersUtilsProvider>

						<Button
							variant="outlined"
							style={{
								fontWeight: "bold",
								"font-size": "18px",
								"font-weight": "bold",
								marginLeft: 15,

							}}
							onClick={handleSubmit}>
							Post Blood Request
                        </Button>
					</Grid>

				</div>
			</Modal>
		</div>
	);
}
