import React from "react";
import styles from "./About.module.css";
import image from "../../static/ctrlimg.png";
import Typography from "@mui/material/Typography";

const AboutHeader = () => {
  return (
    <article className={styles.article}>
      <picture>
        <source media="(min-width: 0px)" srcSet={image} />
        <img src={image} alt="Amber and Jessie in the studio" className={styles.aboutpicture} />
      </picture>
      <Typography variant={"h4"} className={styles.aboutheader}>Engineers taking on the digital skills shortage and lack of diversity in the tech industry
 </Typography>
    </article>
  );
};

export default AboutHeader;