import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Quote1 from '../src/images/quotes_slide1.jpeg'
import Quote2 from '../src/images/quotes_slide2.jpeg'
import Quote3 from '../src/images/quotes_slide3.jpg'

import ThumbUp from '../src/images/thumb_up.svg'
import { Typography, Grid, Paper } from '@material-ui/core';
import { fontWeight, fontSize } from '@material-ui/system';

//        !--- CAROUSEL TO DISPLAY QUOTES ---!
function SlideShow() {
    return (
        <Carousel
            showArrows={true}
            showThumbs={false}
            style={{ height: "300px" }}
        >
            <div>
                <img
                    src={Quote1}
                    alt="first slide"
                />
            </div>
            <div>
                <img
                    src={Quote2}
                    alt="second slide"
                />
            </div>
            <div>
                <img
                    src={Quote3}
                    alt="third slide"
                    height = "440px"
                />
            </div>
        </Carousel>
    );
}

//      STATIC TEXT ON "WHY BLOOD DONATION" 
function Introduction() {
    return (
        <div>
            <Typography
                //variant="h4"
                align="center"
                style={{
                     fontWeight: "bold",
                    paddingTop: "15px",
                    color: "#1a1a1a",
                    fontSize: "40px"
                }}
            >
                Why Blood Donation?
            </Typography>

            <Typography
                variant="h6"
                style={{
                    paddingLeft: "100px",
                    paddingRight: "115px",
                    paddingTop: "20px",
                    color: "#262626"

                }}
            >
                Donating blood is a vital way to help save lives.
                <br></br>
                <ul>
                    <li>
                        A single donation can save three lives.
                   One blood donation provides different blood components that can help up to
                   three different people.
               </li>
                    {/* <br></br> */}
                    <li>
                        Blood cannot be manufactured. Despite medical and technological advances,
                       blood cannot be made, so donations are the only way we can give blood
                       to those who need it.
               </li>
                    {/* <br></br> */}
                    <li>
                        Blood is needed every two seconds. India was short of nearly 11,000 litres
                       of blood last year.
               </li>

                </ul>

            </Typography>
        </div>
    );
}

//        STATIC TXT ON BASIC REQUIREMENTS
function BasicRequirementsForBD() {
    return (
        <div>
            {/* -- HEADING -- */}
            <Typography
                variant="h3"
                align="center"
                style={{
                    fontWeight: "bold",
                    fontSize: "40px",
                    color: "#1a1a1a",
                    paddingTop: "25px"
                }}
            >
                Basic Requirements for Blood Donation
            </Typography>
            {/*     ----- FIRST ROW ---- */}
            <Grid
                container
                direction="row"
                justify="space-around"

                style={{
                    paddingLeft: "100px",
                    paddingRight: "80px",
                    paddingTop: "30px",
                    paddingBottom: "20px",
                    flexGrow: 1
                }}
            >
                <Grid
                    container
                    xs={4}
                    direction="row"

                >
                    <img
                        src={ThumbUp}
                        alt="good health"
                        height="45px"

                    >
                    </img>
                    <Typography
                        variant="h6"
                        style={{ paddingLeft: "10px" }}
                    >
                        On the day of donation, <br></br>
                        your health condition <br></br>
                        should be good.
                </Typography>
                </Grid>


                <Grid
                    container
                    direction="row"
                    xs={4}

                >
                    <img
                        src={ThumbUp}
                        alt="good health"
                        height="45px"
                    >
                    </img>
                    <Typography variant="h6">
                        You should be between <br></br>
                        18 to 60 years old.
                    </Typography>
                </Grid>

                <Grid container
                    xs={3}
                    direction="row"
                >
                    <img
                        src={ThumbUp}
                        alt="good health"
                        height="45px"
                    >
                    </img>
                    <Typography variant="h6">
                        You should weigh<br></br>
                        atleast 45 kgs.
                    </Typography>

                </Grid>
            </Grid>

            {/* ---- SECOND ROW ---- */}
            <Grid
                container
                direction="row"
                justify="space-around"

                style={{
                    paddingLeft: "100px",
                    paddingRight: "80px",
                    paddingTop: "30px",
                    paddingBottom: "20px",
                    flexGrow: 1
                }}
            >
                <Grid
                    container
                    xs={4}
                    direction="row"
                >
                    <img
                        src={ThumbUp}
                        alt="good health"
                        height="45px"
                    >
                    </img>
                    <Typography
                        variant="h6"
                        style={{ paddingLeft: "10px" }}
                    >
                        No history of exposure <br></br>
                        to hepatitis or AIDS
                </Typography>
                </Grid>


                <Grid
                    container
                    direction="row"
                    xs={4}
                >
                    <img
                        src={ThumbUp}
                        alt="good health"
                        height="45px"
                    >
                    </img>
                    <Typography variant="h6">
                        Have normal BP at <br></br>
                        the time of donation
                    </Typography>
                </Grid>

                <Grid container
                    xs={3}
                    direction="row"
                >
                    <img
                        src={ThumbUp}
                        alt="good health"
                        height="45px"
                    >
                    </img>
                    <Typography variant="h6">
                    Last blood donation <br></br>
                     was at least <br></br>
                    56 days(8 weeks) ago
                    </Typography>

                </Grid>
            </Grid>



        </div>
    );
}

export default SlideShow
export { BasicRequirementsForBD }
export { Introduction }