import React from "react";
import ResponsiveAppBar from "../components/header";
import HeaderImage from "./components/headerimage";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {Button, createTheme, ThemeProvider} from "@mui/material";
import buttonStyles from "./components/Picture.module.css";
import Footer from "../components/footer";
import Overviewcards from "./components/overviewcards";
import HomeText from "./components/hometext";



const styles = {width: '100%', height: '100%', objectFit: 'cover'};
const theme = createTheme({
  palette: {
    primary: {
      main: '#0A2A5E',
    },
    secondary: {
      main: '#F15C80',
      textColorPrimary: '#00AEEF'
    },
  },
});

  
const Home = () => {
  return (
    <div>
        <ResponsiveAppBar pageTitle="Home" />
        <container class={styles}>
            <HeaderImage />
        </container>
    <HomeText/>
    <Overviewcards/>
        <Box textAlign={"center"} >

              <ThemeProvider theme={theme}>
        <Button color="secondary" variant="contained" size="large" classes={buttonStyles.button}>Join the community</Button>
        </ThemeProvider>
    </Box>
        <Footer/>
    </div>
  );
};
  
export default Home;