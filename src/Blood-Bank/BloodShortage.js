import React from 'react'

import {  Typography,  ExpansionPanel, ExpansionPanelSummary } from '@material-ui/core';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
//import {useStyles} from '../Blood-Bank/UseStyles';


function EnterNewBloodDetails() {
    //const classes = useStyles();
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
                       View Shortage Of Blood
                    </Typography>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                   

                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}


export default EnterNewBloodDetails