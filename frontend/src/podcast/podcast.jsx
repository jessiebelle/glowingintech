import React from "react";
import ResponsiveAppBar from "../components/header";
import ResponsiveFooter from "../components/footer";
import PodcastImage from "./components/podcastimage";
import PodcastIntro from "./components/podcastintro";



const Podcast = () => {
  return (
    <div >
        <ResponsiveAppBar pageTitle="Podcast" />
        <div align={"center"} >
        <PodcastImage/>
            <PodcastIntro/>
            </div>
        <ResponsiveFooter/>
    </div>
);

};
  export default Podcast;