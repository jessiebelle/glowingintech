import React from "react";

import styles from "./Picture.module.css";
import image from "../../static/header.jpg";
import {Box} from "@mui/material";


const HeaderImage = () => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={image} />
        <img src={image} alt="Amber and Jessie in the studio" className={styles.picture} />
      </picture>
        <Box sx={{display: { xs: 'flex', md: 'none' },
              flexGrow: 1,}}>
            <h1 className={styles.header}>Engineering a platform for underrepresented people <b>thrive</b> in tech</h1>
        </Box>
        </article>
  );
};

export default HeaderImage;