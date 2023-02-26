import React from "react";
import ResponsiveAppBar from "../../components/header";
import AboutHeader from "../../about/components/aboutheader";
import ResponsiveFooter from "../../components/footer";


const Resources = () => {
  return (
    <div style={{backgroundColor: "#351c75ff"}}>        <ResponsiveAppBar pageTitle="Resources" />
        <AboutHeader/>
              <h1>Coming soon</h1>

        <ResponsiveFooter/>

    </div>
  );
};

export default Resources;