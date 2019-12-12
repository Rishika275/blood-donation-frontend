import React from 'react'
import BBHeader from '../Blood-Bank/BBHeader'
import EnterNewBloodDetails from '../Blood-Bank/EnterNewBloodDetails'
import ViewRequestsForBlood from '../Blood-Bank/ViewRequestsForBlood'
import CheckAvailabiltyOfBlood from '../Blood-Bank/CheckAvailabiltyOfBlood'
import ViewBloodExpiryDate from '../Blood-Bank/ViewBloodExpiryDate'
import ViewDetailsOfAvailableBlood from '../Blood-Bank/ViewDetailsOfAvailableBlood'
import BloodShortage from '../Blood-Bank/BloodShortage'
import UpdateBloodDonationDetails from '../Blood-Bank/UpdateBloodDonationDetails'

import { Grid } from '@material-ui/core';
import ViewPotentialDonors from './ViewPotentialDonors';

function BBHomePage(props) {
	console.log(props)
    return (
		
        <div >
            
            <BBHeader {...props}/>
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
                      
            <EnterNewBloodDetails {...props}/>
            <br></br>
            <ViewRequestsForBlood {...props}/>
            <br></br>
            <ViewBloodExpiryDate {...props}/>
            <br></br>
            <ViewDetailsOfAvailableBlood {...props}/>
            <br></br>
            <ViewPotentialDonors {...props}/>
            <br></br>
            </Grid>
        </div>
    )
}
export default BBHomePage;