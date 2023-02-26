import React from "react";

import styles from "./Picture.module.css";
import image from "../../static/Untitled.png";
import logoText from "../../static/logo-text.png";


const HeaderImage = () => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={image} />
        <img src={image} alt="Amber and Jessie in the studio" className={styles.picture} />
      </picture>
      <img src={logoText} alt="Glowing in tech logo" className={styles.logoText}/>
    </article>
  );
};

export default HeaderImage;