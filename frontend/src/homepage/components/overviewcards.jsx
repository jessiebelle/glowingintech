import Grid from "@mui/material/Unstable_Grid2";
import {Box, Typography} from "@mui/material";
import {experimentalStyled as styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import * as React from "react";
import DiamondIcon from "@mui/icons-material/Diamond";
import PeopleIcon from "@mui/icons-material/People";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#F15C80' : '#0A2A5E',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: 'white',
}));

const cards = [
    {icon: <RecordVoiceOverIcon fontSize={"large"}/> , pageTitle: 'Podcast', href: '/podcast'},
    {icon: <DiamondIcon fontSize={"large"} />, pageTitle: ' Resources', href: '/resources'},
    {icon: <PeopleIcon fontSize={"large"} />, pageTitle: ' Community', href: '/community'},
];
const OverviewCards = () => {
    return (
    <Box textAlign={"center"} sx={{
            flexGrow: 1,
            backgroundColor: '#976391',
            height: 300,}} >
          <Grid container spacing={{s: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="space-around" alignItems="center">
            {cards.map((card, index) => (
              <Grid xs={2} sm={4} md={4} key={index} alignItems="center">
                <Item elevation="12" variant="outlined" sx={{
    ':hover': {
      boxShadow: 20, backgroundColor: '#93C6D6', color: 'white',
        transform: 'scale(1.08)', transition: 'all 0.3s ease-in-out',
    },
  }}>
                    {card.icon}
                        <Typography variant={"h4"}>{card.pageTitle}</Typography>
                <br/>
                    <Typography variant={"body1"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
                    </Item>
              </Grid>
            ))}
          </Grid>
    </Box>
    );
};
export default OverviewCards;
