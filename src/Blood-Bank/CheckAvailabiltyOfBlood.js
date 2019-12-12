import React from 'react'
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { Typography, Grid, ExpansionPanel, ExpansionPanelSummary } from '@material-ui/core';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStyles} from '../Blood-Bank/UseStyles';


function CheckAvailabiltyOfBlood() {
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
                        Check Availability Of Blood
                    </Typography>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                    {/* -- BLOOD GROUP -- */}
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        style={{ paddingLeft: "20px", paddingRight: "100px" }}
                    >
                        {/* NAME OF THE DONOR */}

                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="gender-simple">Blood Group</InputLabel>
                            <Select
                                // gender={genders.gender}
                                // onChange={handleChange}
                                inputProps={{
                                    name: 'Gender',
                                    id: 'gender-simple',
                                }}
                            >
                                <MenuItem value={"A+"}>A+</MenuItem>
                                <MenuItem value={"A-"}>A-</MenuItem>

                                <MenuItem value={"A1+"}>A1+</MenuItem>
                                <MenuItem value={"A1-"}>A1-</MenuItem>

                                <MenuItem value={"A1B+"}>A1B+</MenuItem>
                                <MenuItem value={"A1B-"}>A1B-</MenuItem>

                                <MenuItem value={"A2+"}>A2+</MenuItem>
                                <MenuItem value={"A2-"}>A2-</MenuItem>

                                <MenuItem value={"A2B+"}>A2B+</MenuItem>
                                <MenuItem value={"A2B-"}>A2B-</MenuItem>

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



                        {/* AMOUNT OF BLOOD IN ML */}
                        <TextField
                            required
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


export default CheckAvailabiltyOfBlood