import React from "react";
import { Link } from "react-router-dom";
import ResponsiveAppBar from "../../components/header";
import ResponsiveFooter from "../../components/footer";



const Podcast = () => {
  return (
    <div>
        <ResponsiveAppBar pageTitle="Podcast" />
        <h1>Podcast Page</h1>
        <ResponsiveFooter/>
    </div>
);

};
  export default Podcast;