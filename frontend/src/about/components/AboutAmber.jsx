import React from 'react'

import { Typography } from '@mui/material'
import IconButton from '@material-ui/core/IconButton'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import amberPicture from '../../static/amberdp.jpeg'

import styles from './About.module.css'

const AboutAmber = () => {
  return (
    <div>
      <img
        src={amberPicture}
        alt="Amber"
        className={styles.displayPicture}
      />
      <Typography className={styles.text} variant="h4" component="div" gutterBottom>
        Amber Shand
      </Typography>
      <Typography className={styles.text} variant="h6" align="left">
        Frontend Software Engineer & Co-founder
      </Typography>
      <Typography className={styles.text} variant="body1" align="left" gutterBottom>
        Amber is an award winning Frontend Engineer, co-host of the Glowing in Tech
        podcast showcasing black women in tech, created the Imposter Methods newsletter
        and hosts & speaks at events both virtually and in person. She has delivered talks
        for companies including LeadDev, Salesforce, codebar, Girls into Coding & Coding
        Black Females. She has hosted several of Code First Girls’ MOOCs (massive online
        open courses) for companies including GCHQ, Barclays, Bank of America, IPO and
        HubSpot.
      </Typography>
      <IconButton
        edge="start"
        aria-label="Twitter"
        href="https://twitter.com/amberleetech"
      >
        <TwitterIcon style={{ color: '#00ffffff' }} />
      </IconButton>
      <IconButton
        edge="start"
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/amber-shand/"
      >
        <LinkedInIcon style={{ color: '#00ffffff' }} />
      </IconButton>
      <IconButton
        edge="start"
        aria-label="Instagram"
        href="https://www.linkedin.com/in/amber-shand/"
      >
        <InstagramIcon style={{ color: '#00ffffff' }} />
      </IconButton>
    </div>
  )
}
export default AboutAmber
