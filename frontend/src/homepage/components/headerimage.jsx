import React from "react";

import styles from "./Picture.module.css";
import image from "../../static/header.jpg";
import {Typography} from "@mui/material";


const HeaderImage = () => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={image} />
        <img src={image} alt="Amber and Jessie in the studio" className={styles.picture} />
      </picture>
            <Typography align={"center"} className={styles.header} variant={"h2"}>Engineering a platform for underrepresented people <b>thrive</b></Typography>
        </article>
  );
};

export default HeaderImage;