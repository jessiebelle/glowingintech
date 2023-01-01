import React from "react";
import ResponsiveAppBar from "../components/header";
import ResponsiveFooter from "../components/footer";
import PodcastImage from "./components/podcastimage";
import PodcastIntro from "./components/podcastintro";
import ListeningPlatforms from "./components/listeningplatforms";



const Podcast = () => {
  return (
    <div >
        <ResponsiveAppBar pageTitle="Podcast" />
        <div align={"center"} >
        <PodcastImage/>
            <ListeningPlatforms/>
            <PodcastIntro/>
            </div>
        <ResponsiveFooter/>
    </div>
);

};
  export default Podcast;