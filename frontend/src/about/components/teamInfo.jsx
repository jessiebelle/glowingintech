import React from "react";
import {Typography, Box
} from "@mui/material";
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import amberPicture from "../../static/amberdp.jpeg";
import jessiePicture from "../../static/jessiedp.jpg";
import image from "../../static/ctrlimg.png";
import styles from "./About.module.css";

const TeamInfo = () =>{
  return (
      <div style={{backgroundColor: '#351c75ff'}}>
        <Box sx={{ flexGrow:1,
    backgroundColor: '#eae4fb53',
                margin: 'auto',
      padding:5,
            width: '80%',
  }}>
                    <img src={amberPicture} alt="Amber and Jessie in the studio" className={styles.displayPicture} />
        <Typography variant="h4" component="div" gutterBottom>Amber Shand</Typography>
            <Typography variant="h6" align="justify">Frontend Software Engineer</Typography>
    <Typography variant="body1" align="justify" gutterBottom>
Amber is an award winning Frontend Engineer, co-host of the Glowing in Tech podcast showcasing black women in tech, created the Imposter Methods newsletter and hosts & speaks at events both virtually and in person.
She has delivered talks for companies including LeadDev, Salesforce, codebar, Girls into Coding & Coding Black Females.
She has hosted several of Code First Girls’ MOOCs (massive online open courses) for companies including GCHQ, Barclays, Bank of America, IPO and HubSpot.
 </Typography>
        <IconButton
          edge="start"
          aria-label="Twitter"
          href="https://twitter.com/amberleetech"
        >
          <TwitterIcon style={{color:'#351c75ff'}} />
        </IconButton>
                    <IconButton
          edge="start"
          aria-label="LinkedIn"
          href="https://twitter.com/amberleetech"
        >
          <LinkedInIcon style={{color:'#351c75ff'}} />
        </IconButton>
                                <IconButton
          edge="start"
          aria-label="Instagram"
          href="https://twitter.com/amberleetech"
        >
          <InstagramIcon style={{color:'#351c75ff'}} />
        </IconButton>
        <Typography variant="body1" align="justify" gutterBottom>
            Send us an email <b>hello@glowingintech.com</b> and we will get back to you as soon as possible.
    </Typography>
      <Typography variant={"h6"} gutterBottom>
        We look forward to hearing from you!
      </Typography>
                                <img src={jessiePicture} alt="Amber and Jessie in the studio" className={styles.displayPicture} />

                    <Typography variant="h4" component="div" gutterBottom>Jessie Auguste</Typography>
                        <Typography variant="h6" align="justify">Backend Software Engineer</Typography>
    <Typography variant="body1" align="justify" gutterBottom>
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
          <TwitterIcon style={{color:'#351c75ff'}} />
        </IconButton>
                    <IconButton
          edge="start"
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/jessie-auguste-80a883178/"
        >
          <LinkedInIcon style={{color:'#351c75ff'}} />
        </IconButton>
                                <IconButton
          edge="start"
          aria-label="Instagram"
          href="https://twitter.com/amberleetech"
        >
          <InstagramIcon style={{color:'#351c75ff'}} />
        </IconButton>
        </Box>
        </div>
  );
  };


export default TeamInfo;