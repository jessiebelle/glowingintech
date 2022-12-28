import styles from "./Picture.module.css";

import image from "../../static/ctrlimg.png";
import {Button, createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#0A2A5E',
    },
    secondary: {
      main: '#F15C80',
      textColorPrimary: '#00AEEF'
    },
  },
});
const HeaderImage = () => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={image} />
        <img src={image} alt="Amber and Jessie in the studio" className={styles.picture} />
      </picture>
      <h1 className={styles.header}>Empowering techies to succeed and thrive through podcasts, resources, and community.</h1>
      <ThemeProvider theme={theme}>
        <Button color="secondary" variant="contained" size="large" classes={styles.button}>Join the community</Button>
        </ThemeProvider>

    </article>
  );
};

export default HeaderImage;