import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import GITSubstack from '../../static/GITSubstack.jpg';

export default function GITCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={"https://glowingintech.substack.com/"}>
        <CardMedia
          component="img"
          height="140"
          image={GITSubstack}
          alt="Jessie on stage at LeadDev conference"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Glowing in Tech Substack
          </Typography>
          <Typography variant="body2" color="text.secondary">
Resources for getting into tech, guides and information on our guests and their topics          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}