import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import JessieBlogImage from '../../static/jessieleaddev.jpg';

export default function JessieCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={"https://medium.com/@jessieauguste"}>
        <CardMedia
          component="img"
          height="140"
          image={JessieBlogImage}
          alt="Jessie on stage at LeadDev conference"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Jessie's Blog
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Writes about Python, Django, Infosec, Cyber Security, personal and professional development, and more.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}