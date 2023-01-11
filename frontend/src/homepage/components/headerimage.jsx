import styles from "./Picture.module.css";
import image from "../../static/img_1.png";



const HeaderImage = () => {
  return (
    <article className={styles.article}>
      <picture className={styles.picture}>
        <source media="(min-width: 0px)" srcSet={image} />
        <img src={image} alt="Amber and Jessie in the studio" className={styles.picture} />
      </picture>
      <h1 className={styles.header}>Empowering you to glow in tech</h1>
    </article>
  );
};

export default HeaderImage;