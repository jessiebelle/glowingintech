import React from "react";
import {Box, Link, Typography} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Grid from "@mui/material/Unstable_Grid2";
import applepodcast from "../../static/podcastplatform/applepod.png";
import spotify from "../../static/podcastplatform/spotify.png";
import googlepodcast from "../../static/podcastplatform/googlepodcast.png";
import anchor from "../../static/podcastplatform/anchor.png";
import amazonmusic from "../../static/podcastplatform/amazonmusic.png";
import youtube from "../../static/podcastplatform/youtube.png";
import {experimentalStyled as styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import styles from "./podcast.module.css";

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
    <div className={styles.carousel}>
                <Box sx={{ flexGrow:1,
                margin: 'auto',
                padding:5,
                width: '80%',
  }}>
<Typography variant={"h4"} align={"justify"} fontWeight={10} >
    Listen on your favorite platform
</Typography>
                    <br/>
        <Grid container spacing={2} columns={{ xs: 4, sm: 12, md: 12 }} justifyContent="space-around" alignItems="center">
        {platforms.map((platform, index) => (
            <a href={platform.href}>
          <Grid item xs key={index} alignItems="center" >
            <Item elevation="12" variant="outlined" sx={{
    ':hover': {
      boxShadow: 20, backgroundColor: '#EF9CDA', color: 'white',
        transform: 'scale(1.08)', transition: 'all 0.3s ease-in-out',
    },
  }}>
                <picture className={styles.platformpicture}>
                    <source srcSet={platform.logo} />
                    <img src={platform.logo} alt={platform.pageTitle} className={styles.platformpicture} />
                </picture>

            </Item>
          </Grid>
                </a>))}
        </Grid>
                    <Typography variant={"h4"} align={"justify"} fontWeight={10} >
                    <br/>
                        <Link href={"https://lnk.to/glowingintech"}>Click here for a full list of streaming platforms </Link></Typography>
        </Box>
        </div>
    );
    };
export default ListeningPlatforms;