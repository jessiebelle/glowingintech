import React from "react";
import { Link } from "react-router-dom";
import ResponsiveAppBar from "./header";
import HeaderImage from "../homepage/components/headerimage";
import { experimentalStyled as styled } from '@mui/material/styles';
import Home from "../homepage/home";

const Community = () => {
  return (
    <div>
        <ResponsiveAppBar pageTitle="Home" />
        <h1>Community Page</h1>
      </div>
    );
};
export default Community;