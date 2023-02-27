import React from "react";

import styles from "./Picture.module.css";
import image from "../../static/homepageheader.png";


const HeaderImage = () => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={image} />
        <img src={image} alt="Amber and Jessie in the studio" className={styles.picture} />
      </picture>
        </article>
  );
};

export default HeaderImage;