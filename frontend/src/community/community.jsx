import React from "react";
import { Link } from "react-router-dom";
import ResponsiveAppBar from "../components/header";
import HeaderImage from "../homepage/components/headerimage";
import { experimentalStyled as styled } from '@mui/material/styles';
import Home from "../homepage/home";
import CommunityForm from "./components/communityform";
import {Box} from "@mui/material";
import CommunityText from "./components/communitytext";
import Footer from "../components/footer";

const styles = {width: '100%', height: '100%', objectFit: 'cover',
    backgroundColor:'#1C1F33',};

const Community = () => {
  return (
        <div>
            <container className={styles}>
            <ResponsiveAppBar pageTitle="Community" />
           </container>
        <Box textAlign={"center"} sx={{
        flexGrow: 1,
        backgroundColor: '#1C1F33',
        height: 'auto',
        width: '100%',
}} >
            <CommunityText/>
            <Box textAlign={"center"} sx={{
                flexGrow: 1,
                backgroundColor: '#FDFFFC',
            }}>
            <CommunityForm/>
        </Box>
        </Box>
        <Footer/>
      </div>
    );
};
export default Community;