import React from 'react'
import { Typography, ExpansionPanel, ExpansionPanelSummary, Grid, Paper, TableCell, TableBody, TableHead, TableRow, Table } from '@material-ui/core';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Axios from 'axios';

export default class MyBloodDonations extends React.Component {

	constructor(props) {
		super(props);
		this.state = { myDonations: [] };
	}

	componentDidMount() {
		
		Axios.get('http://localhost:8080/user/my-donations/', { donorEmail: this.props.location.state.email })
			.then((response) => {
				console.log(response);
				this.setState((state) => {
					return { myDonations: response.data.dbData }
				});
				

			})
			.catch(function (error) {
				console.log(error);
			});
	}

	formatDate = (date) => {
		return (new Intl.NumberFormat('en-GB', {
			style: 'currency',
			currency: 'GBP',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		})
			.format(date))
	}

	render() {
		return (
			<div>

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
							My Blood Donations
				  </Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<div>
							<Paper >
								<Table aria-label="simple table">
									<TableHead>
										<TableRow>

											<TableCell align="right">Blood Bank</TableCell>
											<TableCell align="right">Amount of Blood(in ml)</TableCell>
											<TableCell align="right">Donation Date</TableCell>

										</TableRow>
									</TableHead>

									<TableBody>
										{this.state.myDonations.map(row => (
											<TableRow key={row.name}>

												<TableCell align="right">{row.name}</TableCell>
												<TableCell align="right">{row.amtOfBlood}</TableCell>
												<TableCell align="right">
													{/* {new Intl.DateTimeFormat('en-US', {
														year: 'numeric',
														month: 'long',
														day: '2-digit'
													}).format(row.date.toString())} */}
													{/* {row.date.toLocaleDateString()} */}
													{row.date.toString()}
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