
import image from "../../static/podcastthumbnail.png";
import styles from "./podcast.module.css";


const PodcastImage = () => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={image} />
        <img src={image} alt="Amber and Jessie in the studio" className={styles.picture} />
      </picture>
    </article>
  );
};

export default PodcastImage;