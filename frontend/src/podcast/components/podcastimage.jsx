import React from "react";

import image from "../../static/season2thumbnail.png";
import styles from "./podcast.module.css";
import Typography from "@mui/material/Typography";

const PodcastImage = () => {
  return (
        <article className={styles.article}>
            <div className={styles.bg}>
      <picture>
        <img src={image} alt="The podcast thumbnail with Amber and Jessie in the studio and the Glowing in tech Logo" className={styles.picture} />
      </picture>
                            <Typography variant={"h4"} className={styles.header}>The award winning podcast, as featured by Spotify, Apple Podcasts and POCIT</Typography>

            </div>
    </article>
  );
};

export default PodcastImage;