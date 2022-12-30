import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Typography} from "@mui/material";
import Link from '@material-ui/core/Link';
import makeStyles from "@mui/styles/makeStyles"
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    backgroundColor: theme.palette.background.default,
  },
  socialIcons: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    marginRight: theme.spacing(1),
  },
}));



function Footer() {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();
    return (
    <AppBar position="sticky" >
      <Toolbar>
            <footer className={classes.root}>
      <Typography variant="body2">
        <Link href="/contact" className={classes.link}>
          Contact
        </Link>
        <Link href="/privacy" className={classes.link}>
          Privacy
        </Link>
      </Typography>
      <div className={classes.socialIcons}>
        <IconButton
          edge="start"
          aria-label="Facebook"
          href="https://www.facebook.com"
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          edge="start"
          aria-label="Twitter"
          href="https://www.twitter.com"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          edge="start"
          aria-label="Instagram"
          href="https://www.instagram.com"
        >
          <InstagramIcon />
        </IconButton>
      </div>
      <Typography variant="caption">
        Copyright {currentYear}
      </Typography>
    </footer>
      </Toolbar>
    </AppBar>
    );
}
export default Footer;