import React from "react";
import { Link } from "react-router-dom";
import ResponsiveAppBar from "../components/header";
import HeaderImage from "./components/headerimage";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import {Button, createTheme, ThemeProvider} from "@mui/material";
import buttonStyles from "./components/Picture.module.css";
import Footer from "../components/footer";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#F15C80' : '#0A2A5E',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: 'white',
}));
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

    <Box textAlign={"center"} sx={{
        flexGrow: 1,
        backgroundColor: '#1C1F33',
        height: 300,}} >
      <Grid container spacing={{s: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="space-around" alignItems="center">
        {Array.from(Array(3)).map((_, index) => (
          <Grid xs={2} sm={4} md={4} key={index} alignItems="center">
            <Item elevation="12" variant="outlined">item</Item>
          </Grid>
        ))}
      </Grid>
              <ThemeProvider theme={theme}>
        <Button color="secondary" variant="contained" size="large" classes={buttonStyles.button}>Join the community</Button>
        </ThemeProvider>
    </Box>
        <Footer/>
    </div>
  );
};
  
export default Home;