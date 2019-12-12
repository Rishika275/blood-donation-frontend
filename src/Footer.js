import React from 'react'
import { Typography } from '@material-ui/core';

function Footer(){
    return(
        <div>
            <Typography
            variant = "subtitle1"
            align  = "center"
            style = {{paddingTop: "100px"}}
            >
                A Project By Us!
            </Typography>
        </div>
    )
}

export default Footer;