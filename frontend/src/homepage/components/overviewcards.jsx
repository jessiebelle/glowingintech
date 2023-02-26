import Grid from "@mui/material/Unstable_Grid2";
import {Box, Typography} from "@mui/material";
import {experimentalStyled as styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import * as React from "react";
import DiamondIcon from "@mui/icons-material/Diamond";
import PeopleIcon from "@mui/icons-material/People";
import styles from "./Picture.module.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#F15C80' : '#0A2A5E',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: 'white',
}));

const cards = [
    {icon: <RecordVoiceOverIcon fontSize={"large"}/> , pageTitle: 'Podcast', href: '/podcast', description: 'A careers focused, award winning podcast, with a variety of guests. Giving you insight into the possibilities of careers in tech.'},
    {icon: <DiamondIcon fontSize={"large"} />, pageTitle: ' Resources', href: '/resources', description: 'Videos, blog posts, downloadable resources, events and more to help you on your journey.'},
    {icon: <PeopleIcon fontSize={"large"} />, pageTitle: ' Community', href: '/community', description: 'A place where all tech enthusiasts can come together to share their experiences.'},
];
const OverviewCards = () => {
    return (
    <Box textAlign={"center"} sx={{
            flexGrow: 1,
            backgroundColor: '#351c75ff',
            height: 300,
            }} >
          <Grid container spacing={{s: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="space-around" alignItems="center">
            {cards.map((card, index) => (
              <Grid xs={2} sm={4} md={4} key={index} alignItems="center" padding={5}>
                <Item elevation="12" className={styles.cardGlow} sx={{
    ':hover': {
      boxShadow: 20,
        transform: 'scale(1.08)', transition: 'all 0.3s ease-in-out',
    },
  }}>
                    {card.icon}
                        <Typography variant={"h4"} >{card.pageTitle}</Typography>
                <br/>
                    <Typography variant={"body1"}>{card.description}</Typography>
                    </Item>
              </Grid>
            ))}

          </Grid>
    </Box>
    );
};
export default OverviewCards;
