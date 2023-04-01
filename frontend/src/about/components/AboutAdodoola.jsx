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
import adodoolaPicture from '../../static/adodooladp.jpg'

import styles from './About.module.css'

const AboutAdodoola = () => {
  return (
    <div>
      <img
        src={adodoolaPicture}
        alt="Adodoola"
        className={styles.displayPicture}
      />
      <Typography className={styles.text} variant="h4" component="div" gutterBottom>
        Adodoola Omiyale
      </Typography>
      <Typography className={styles.text} variant="h6" align="left">
        Technical Support Engineer & Head of Socials{' '}
      </Typography>
      <Typography className={styles.text} variant="body1" align="left" gutterBottom>
        Adedoola works as a Technical Support Engineer for a feature management company
        called LaunchDarkly. Ade has a degree in Sustainable Development but crossed over
        to technology and sales to challenge herself and gain soft & technical skills in
        this evolving industry. She is a key part in the team, helping Glowing In Tech
        increase their social media presence and has enjoyed being apart of the growing
        team. Fun fact: GIT helped her secure her current Full-time job!
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
        href="https://www.linkedin.com/in/adodoolaomiyale/"
      >
        <LinkedInIcon style={{ color: '#00ffffff' }} />
      </IconButton>
      <IconButton
        edge="start"
        aria-label="Instagram"
        href="https://twitter.com/amberleetech"
      >
        <InstagramIcon style={{ color: '#00ffffff' }} />
      </IconButton>
    </div>
  )
}
export default AboutAdodoola
