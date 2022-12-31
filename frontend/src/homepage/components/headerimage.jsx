import styles from "./Picture.module.css";

import image from "../../static/ctrlimg.png";


const HeaderImage = () => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={image} />
        <img src={image} alt="Amber and Jessie in the studio" className={styles.picture} />
      </picture>
      <h1 className={styles.header}>Empowering techies to succeed and thrive through podcasts, resources, and community.</h1>

    </article>
  );
};

export default HeaderImage;