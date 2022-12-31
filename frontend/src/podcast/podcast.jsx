import React from "react";
import ResponsiveAppBar from "../components/header";
import ResponsiveFooter from "../components/footer";
import PodcastImage from "./components/podcastimage";



const Podcast = () => {
  return (
    <div>
        <ResponsiveAppBar pageTitle="Podcast" />
        <h1>Award winning podcast, as featured by Spotify, Apple Podcasts and POCIT</h1>
        <div align={"center"}>
        <PodcastImage/>
            </div>
        <ResponsiveFooter/>
    </div>
);

};
  export default Podcast;