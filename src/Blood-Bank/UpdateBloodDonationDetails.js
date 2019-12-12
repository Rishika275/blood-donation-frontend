import React from 'react'

import TextField from '@material-ui/core/TextField';
import {Typography, Grid, ExpansionPanel, ExpansionPanelSummary } from '@material-ui/core';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStyles} from '../Blood-Bank/UseStyles';

function EnterNewBloodDetails() {
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
                       Update Blood Donation Details
                    </Typography>
                </ExpansionPanelSummary>
                
                <ExpansionPanelDetails>
                    <Grid
                        container
                        direction="column"
                    >
                        {/* NAME OF THE DONOR */}
                        <TextField
                            id="outlined-with-placeholder"
                            label="Name of the Donor"
                            placeholder="Name of the Donor"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />

                        {/* CONTACT NUMBER  */}
                        <TextField
                            id="outlined-with-placeholder"
                            label="Contact Number"
                            placeholder="Contact Number"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                        {/* BLOOD TYPE */}

                        {/* AMOUNT OF BLOOD IN ML */}
                        <TextField
                            id="outlined-with-placeholder"
                            label="Amount of Blood in ml"
                            placeholder="Amount of Blood in ml"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>

                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}


export default EnterNewBloodDetails