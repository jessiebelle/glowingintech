import React from "react";
import ResponsiveAppBar from "../components/header";
import ResponsiveFooter from "../components/footer";
import AboutHeader from "./components/aboutheader";

const About = () => {
  return (
    <div>        <ResponsiveAppBar pageTitle="About" />
        <AboutHeader/>
              <h1>About Page</h1>
        <ResponsiveFooter/>

    </div>
  );
};
  
export default About;