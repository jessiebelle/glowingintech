import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';




function ResponsiveFooter() {
  const currentYear = new Date().getFullYear();
    return (
    <AppBar position="sticky" >
      <Toolbar>
      <Typography variant="body2">
        <div>
        <Link href={"/contact"}>
          Contact
        </Link>
      <br />
        <Link href={"/about"}>
          About Us
        </Link>
 </div>
      </Typography>
      <div>
        <IconButton
          edge="start"
          aria-label="YouTube"
          href="https://www.youtube.com/c/GlowinginTech"
        >
          <YouTubeIcon />
        </IconButton>
        <IconButton
          edge="start"
          aria-label="Twitter"
          href="https://twitter.com/glowingintech"
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          edge="start"
          aria-label="Instagram"
          href="https://www.instagram.com/glowingintech/"
        >
          <InstagramIcon />
        </IconButton>
      </div>
      <Typography variant="caption">
         Glowing in Tech © {currentYear}
      </Typography>
      </Toolbar>
    </AppBar>
    );
}
export default ResponsiveFooter;