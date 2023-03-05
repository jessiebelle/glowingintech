import React from "react";

import {Typography} from "@mui/material";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import jessicaPicture from "../../static/jessicadp.png";

import styles from "./About.module.css";

const AboutJessica = () =>{
  return (
      <div>

                    <img src={jessicaPicture} alt="a picture of Jessica" className={styles.displayPicture} />
        <Typography className={styles.text} variant="h4" component="div" gutterBottom>Jessica Cregg</Typography>
            <Typography className={styles.text} variant="h6" align="left">Ops Engineer & Head of Technical Writing </Typography>
    <Typography className={styles.text} variant="body1" align="left" gutterBottom>
Jessica is an IT Operations Engineer at CybSafe. She speaks and writes about the human implications of engineering decisions for a selection of tech publications and works as a co-organiser of DevOpsDays London and the regular meetup group DevSecOps London Gathering. She also works with Coding Black Females to improve equal and equitable representation within the technology industry.

 </Typography>
        <IconButton
          edge="start"
          aria-label="Twitter"
          href="https://twitter.com/jessicacregg"
        >
          <TwitterIcon style={{color:'#00ffffff'}} />
        </IconButton>
                    <IconButton
          edge="start"
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/jessicacregg/"
        >
          <LinkedInIcon style={{color:'#00ffffff'}} />
        </IconButton>
                                <IconButton
          edge="start"
          aria-label="Instagram"
          href="https://twitter.com/amberleetech"
        >
          <InstagramIcon style={{color:'#00ffffff'}} />
        </IconButton>
        </div>
    );
    };
export default AboutJessica;
