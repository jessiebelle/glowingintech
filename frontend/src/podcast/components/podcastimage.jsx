import React from "react";

import image from "../../static/season2thumbnail.png";
import styles from "./podcast.module.css";


const PodcastImage = () => {
  return (
        <article className={styles.article}>
            <h1 className={styles.header}>The award winning podcast, as featured by Spotify, Apple Podcasts and POCIT</h1>
            <div className={styles.bg}>
      <picture>
        <img src={image} alt="The podcast thumbnail with Amber and Jessie in the studio and the Glowing in tech Logo" className={styles.picture} />
      </picture>
            </div>
    </article>
  );
};

export default PodcastImage;