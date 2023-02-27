import React from "react";
import styles from "./About.module.css";
import image from "../../static/ctrlimg.png";

const AboutHeader = () => {
  return (
    <article className={styles.article}>
      <picture>
        <source media="(min-width: 0px)" srcSet={image} />
        <img src={image} alt="Amber and Jessie in the studio" className={styles.aboutpicture} />
      </picture>
    </article>
  );
};

export default AboutHeader;