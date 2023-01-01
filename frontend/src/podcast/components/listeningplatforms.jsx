import React from "react";
import {Box, Button, Typography} from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Grid from "@mui/material/Unstable_Grid2";
import applepodcast from "../../static/podcastplatform/applepod.png";
import spotify from "../../static/podcastplatform/spotify.png";
import googlepodcast from "../../static/podcastplatform/googlepodcast.png";
import anchor from "../../static/podcastplatform/anchor.png";
import amazonmusic from "../../static/podcastplatform/amazonmusic.png";
import youtube from "../../static/podcastplatform/youtube.png";
import {experimentalStyled as styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const platforms = [
    {logo: applepodcast, pageTitle: 'Apple Podcast', href: 'https://podcasts.apple.com/us/podcast/glowing-in-tech-the-showcase/id1626097038'},
    {logo: spotify, pageTitle: 'Spotify', href: 'https://open.spotify.com/show/7av07hbwZWBUGTQmG3Vaxi'},
    {logo: googlepodcast, pageTitle: 'Google Podcast', href: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy84YzkyZTg3MC9wb2RjYXN0L3Jzcw'},
    {logo: anchor, pageTitle: 'Anchor', href: 'https://anchor.fm/glowing-in-tech'},
    {logo: amazonmusic, pageTitle: 'Amazon Music', href: 'https://music.amazon.co.uk/podcasts/00c6fb98-026a-4023-8a59-c12b31317723/glowing-in-tech-the-showcase?refMarker=null&'},
    {logo: youtube, pageTitle: 'YouTube', href: 'https://www.youtube.com/channel/UCZ8JZ5YXZQZ9Z5Z4ZQZ9Z5Z4'},
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#F15C80' : '#0A2A5E',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: 'white',
}));

const ListeningPlatforms = () => {
    return (
    <div>
                <Box sx={{ flexGrow:1,
                margin: 'auto',
      padding:5,
            width: '80%',
  }}>
<Typography variant={"h4"} align={"justify"} gutterBottom>
    Listen to our podcast on your favorite platform
</Typography>
                </Box>
        <Grid container spacing={{s: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="space-around" alignItems="center">
        {platforms.map((platform, index) => (
          <Grid xs={2} sm={4} md={4} key={index} alignItems="center">
            <Item elevation="12" variant="outlined">{platform.pageTitle}</Item>
          </Grid>))}
        </Grid>
        </div>
    );
    };
export default ListeningPlatforms;