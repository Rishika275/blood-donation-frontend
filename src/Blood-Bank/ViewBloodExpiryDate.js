import React from 'react'

import { Typography, ExpansionPanel, ExpansionPanelSummary, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Axios from 'axios';

class ViewBloodExpiryDate extends React.Component {
	constructor(props) {
		super(props);
		this.state = { expiryDates: [] }
	}

	componentDidMount() {
		Axios.get('http://localhost:8080/bloodbank/bloodexpiry/')
			.then((response) => {
				console.log(response);
				this.setState({ expiryDates: response.data.expiryDates })
			})
			.catch(function (error) {
				console.log(error);
			}
			)
	}

	render() {
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
							View Expiry Dates Of Blood
				  </Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<div>
							<Paper >
								<Table aria-label="simple table">
									<TableHead>
										<TableRow>
											<TableCell align="right">Blood Sachet Id</TableCell>
											<TableCell align="right">Blood Group</TableCell>
											<TableCell align="right">Amount of Blood(in ml)</TableCell>
											<TableCell align="right">Expiry Date</TableCell>

										</TableRow>
									</TableHead>

									<TableBody>
										{this.state.expiryDates.map(row => (
											<TableRow key={row.name}>
												<TableCell align="center">{row.donationId}</TableCell>
												<TableCell align="right">{row.bloodgroup}</TableCell>
												<TableCell align="right">{row.amtOfBlood}</TableCell>
												<TableCell align="right">
													{new Date(row.expiryDate).getDate() + '/' + new Date(row.expiryDate).getMonth() + '/' + new Date(row.expiryDate).getFullYear()}
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</Paper>

						</div>

					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>


		)
	}
}


export default ViewBloodExpiryDate