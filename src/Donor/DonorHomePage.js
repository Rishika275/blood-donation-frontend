import React from 'react';
import DonorHeader from './DonorHeader'
import MyBloodDonations from './MyBloodDonations'
import { Grid } from '@material-ui/core';
import MyRequestsForBlood from './MyRequestsForBlood';
import ViewRequestsForBlood from './ViewRequestsForBlood';
import Footer from '../Footer';

export default class DonorHomepage extends React.Component{
    render(){
		return (
			<div>
				<DonorHeader {...this.props}/>
				<Grid
					container
					direction= "column"
					justify = "space-between"
					style = {{
						paddingLeft: "150px",
						paddingRight: "200px",
						paddingTop: "30px",
						
					}}
				>
					<MyBloodDonations {...this.props}/>
					<br></br>
					<ViewRequestsForBlood {...this.props}/>
				</Grid>
				{/* <Footer /> */}
			</div>
		)
	}
}