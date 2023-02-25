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
    <AppBar position="sticky" style={{ background: '#351c75ff'}} >
      <Toolbar>
      <Typography variant="body2">
        <div>
        <Link style={{color:"white"}} href={"/contact"}>
          Contact
        </Link>
      </div>
          <div>
        <Link style={{color:"white"}} href={"/about"}>
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
          <YouTubeIcon style={{color:"white"}}/>
        </IconButton>
        <IconButton
          edge="start"
          aria-label="Twitter"
          href="https://twitter.com/glowingintech"
        >
          <TwitterIcon style={{color:"white"}} />
        </IconButton>
        <IconButton
          edge="start"
          aria-label="Instagram"
          href="https://www.instagram.com/glowingintech/"
        >
          <InstagramIcon style={{color:"white"}} />
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