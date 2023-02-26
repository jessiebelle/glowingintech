import React from "react";

import styles from "./Resources.module.css";
import image from "../../static/leaddev.jpeg";

const ResourcesHeader = () => {
  return (
    <article className={styles.article}>
      <picture>
        <source media="(min-width: 0px)" srcSet={image} />
        <img src={image} alt="Amber and Jessie in the studio" className={styles.aboutpicture} />
      </picture>
      <h1 className={styles.aboutheader}>A hub of community-built resources to help you on your journey to a career in tech
 </h1>
    </article>
  );
};

export default ResourcesHeader;