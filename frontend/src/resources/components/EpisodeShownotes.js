import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import ctrlImage from '../../static/ctrlimg.png';

export default function EpisodeShownotes() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={"https://glowing-in-tech.notion.site/Glowing-in-Tech-Show-notes-f568e988a20b40c5bde611fa5e18e234"}>
        <CardMedia
          component="img"
          height="140"
          image={ctrlImage}
          alt="Jessie and Amber in the podcast studio"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Glowing in Tech Podcast Shownotes
          </Typography>
          <Typography variant="body2" color="text.secondary">
Information from all released episodes, resources mentioned by guests and their details          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}