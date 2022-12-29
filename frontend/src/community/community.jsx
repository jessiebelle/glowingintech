import React from "react";
import { Link } from "react-router-dom";
import ResponsiveAppBar from "./header";
import HeaderImage from "../homepage/components/headerimage";
import { experimentalStyled as styled } from '@mui/material/styles';
import Home from "../components/home";

const Community = () => {
  return (
    <div>
        <ResponsiveAppBar pageTitle="Home" />
      </div>
    );
};
export default Community;