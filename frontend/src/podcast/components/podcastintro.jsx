import react from 'react';
import {Link} from "react-router-dom";
import {Box, Button, Typography} from "@mui/material";
import styles from "./podcast.module.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import YoutubeEmbed from "../../components/youtubeembed";


const PodcastIntro = () => {
    return (
    <div>
                <Box sx={{ flexGrow:1,
                margin: 'auto',
      padding:5,
            width: '80%',
  }}>
        <Typography variant={"h4"} align={"justify"} gutterBottom>
            In 2021, we were two black women from non technical backgrounds learning how to code in the hopes of becoming software engineers. We wanted to hear from women who looked like us, who we could identify with and learn technical content from. We found very little.
        </Typography>
                          <YoutubeEmbed embedId="t0r3q60oRCo" />

                    <br/>
                    <Typography variant={"h6"} align={"justify"} gutterBottom>
We were determined to fill this gap using the network we had built through our community work. Our aim was to amplify and showcase the incredible stories of women in tech to encourage more people from diverse backgrounds to pursue technical roles.
        </Typography>
                <br/>
                    <Typography variant={"h6"} align={"justify"} gutterBottom>
            In May 2022, we release our first episode of Glowing in Tech. The podcast has been well received, with listenership consistently growing and an engaged community across our social platforms. We have had listeners contact us to let us know that they have made a career switch as a result, and succeeded in landing roles.
With season 2, we aim to provide deep dives into career development topics, from underrepresented people, to provide honest insight into different career routes and grow our audience across platforms.

        </Typography>
                    <YoutubeEmbed embedId="54bkUMdUa5k" />
                    <br/>
      <Typography variant={'h6'} align={"justify"} gutterBottom> We want to provide a safe platform for marginalised voices in the tech industry to share their experiences and insights. By showcasing the unique perspectives and career paths of people of colour, women, neurodivergent and disabled people, the podcast hopes to inspire and encourage others to pursue careers in tech.</Typography>
                <YoutubeEmbed embedId="G5tkjKuVljg" />
                </Box>
                    <Button style={styles} onClick="https://podcasts.apple.com/gb/podcast/glowing-in-tech-the-showcase/id1626097038">Listen on Apple Podcast</Button>
    </div>
  );
};
export default PodcastIntro;