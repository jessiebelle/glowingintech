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

import styles from "./About.module.css";
import jessiePicture from "../../static/jessiedp.jpg";

const AboutJessie = () =>{
  return (
      <div>

                    <img src={jessiePicture} alt="Amber and Jessie in the studio" className={styles.displayPicture} />

                    <Typography className={styles.text} variant="h4" component="div" gutterBottom>Jessie Auguste</Typography>
                        <Typography className={styles.text} variant="h6" align="justify">Backend Software Engineer & Co-founder</Typography>
    <Typography className={styles.text} variant="body1" align="justify" gutterBottom>
Jessie is an award winning Software Engineer at CybSafe, Co-Founder and Co-host of Glowing in Tech.
She is a key part of the Leadership Team for Coding Black Females.
She’s delivered technical talks for companies including LeadDev, codebar, General Assembly, Docker, Girls into Coding & Daily Dev.
She has instructed and delivered courses on behalf of companies such as Love Circular, CybSafe, Coding Black Females and UBS.
    </Typography>
        <IconButton
          edge="start"
          aria-label="Twitter"
          href="https://twitter.com/_jessie_belle"
        >
          <TwitterIcon style={{color:'#00ffffff'}} />
        </IconButton>
                    <IconButton
          edge="start"
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/jessie-auguste-80a883178/"
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
export default AboutJessie;
