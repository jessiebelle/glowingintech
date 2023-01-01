
import image from "../../static/podcastthumbnail.png";
import styles from "./podcast.module.css";
import Box from "@mui/material/Box";


const PodcastImage = () => {
  return (
        <article className={styles.article}>
            <h1 className={styles.header}>The award winning podcast, as featured by Spotify, Apple Podcasts and POCIT</h1>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={image} />
        <img src={image} alt="The podcast thumbnail with Amber and Jessie in the studio and the Glowing in tech Logo" className={styles.picture} />
      </picture>
    </article>
  );
};

export default PodcastImage;