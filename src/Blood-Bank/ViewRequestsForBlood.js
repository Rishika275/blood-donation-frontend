import React, { useEffect } from 'react'

import TextField from '@material-ui/core/TextField';
import { Paper, Typography, Grid, ExpansionPanel, ExpansionPanelSummary, Card, CardContent } from '@material-ui/core';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Axios from 'axios';

class ViewRequestsForBlood extends React.Component {
	constructor(props) {
		super(props);
		this.state = { OthersRequests: [] };
	}

	componentDidMount() {
		console.log(this.props);
		Axios.get('http://localhost:8080/bloodbank/bloodrequests/')
			.then((response) => {
				
				this.setState((state) => {
					return { OthersRequests: response.data.othersRequests }
				});
				

			})
			.catch(function (error) {
				console.log(error);
			});
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
							View Requests for Blood
              </Typography>
					</ExpansionPanelSummary>
					<ExpansionPanelDetails>
						<div>
							{this.state.OthersRequests.map((item, index) => (
							<Grid container
								direction="row"
								justify="space-around"

							>
								<Card key={index} style={{ padding: 5, margin: 5 }}>
									<CardContent>
										<Typography variant="h5">
											{item.bloodGroup}
										</Typography>

										<Typography variant="body1">
											Name: {item.name}
										</Typography>

										<Typography variant="body1">
											Contact: {item.contact}
										</Typography>

										<Typography variant="body1">
											Needed By:{new Date(item.neededBy).getDate() + '/' + new Date(item.neededBy).getMonth() + '/' + new Date(item.neededBy).getFullYear()}
											
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
						</div>


					</ExpansionPanelDetails>
				</ExpansionPanel>
			</div>
		)
	}
}


export default ViewRequestsForBlood