import React from 'react'
import { Typography, ExpansionPanel, ExpansionPanelSummary} from '@material-ui/core';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import {useStyles} from '../Blood-Bank/UseStyles';

export default function MyRequestsForBlood() {
    // const classes = useStyles();
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
                        Blood Requests Made By Me
              </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                The following are ur requests. --display this using componentDidMount
                If no requests are made -- display "You haven't made any requests so far"
            

                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}


