import React from "react";
import ResponsiveAppBar from "../components/header";
import HeaderImage from "./components/headerimage";
import {createTheme} from "@mui/material";
import Footer from "../components/footer";
import HomeText from "./components/hometext";



const styles = {width: '100%', height: '100%', objectFit: 'cover'};

  
const Home = () => {
  return (
    <div style={{backgroundColor: '#351c75ff'}}>
        <ResponsiveAppBar pageTitle="Home" />
        <container class={styles}>
            <HeaderImage />
        </container>
    <HomeText/>
        <Footer/>
    </div>
  );
};
  
export default Home;