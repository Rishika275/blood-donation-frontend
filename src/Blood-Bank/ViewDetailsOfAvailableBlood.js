import React from 'react'

import { Typography, ExpansionPanel, ExpansionPanelSummary, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Axios from 'axios';

class EnterNewBloodDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = { availBlood: [] }
	}
	componentDidMount() {
		Axios.get('http://localhost:8080/bloodbank/availableblood/')
			.then((response) => {
				this.setState({ availBlood: response.data.availBlood })
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
							View Details Of Available Blood
						</Typography>
					</ExpansionPanelSummary>

					<ExpansionPanelDetails>
						<div>
							<Paper >
								<Table aria-label="simple table">
									<TableHead>
										<TableRow>
											<TableCell align="right">Blood Group</TableCell>
											<TableCell align="right">Amount of Blood(in ml)</TableCell>
										</TableRow>
									</TableHead>

									<TableBody>
										{this.state.availBlood.map(row => (
											<TableRow key={row.name}>

												<TableCell align="right">{row.bloodgroup}</TableCell>
												<TableCell align="right">{row.totalAmtOfBlood}</TableCell>

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


export default EnterNewBloodDetails