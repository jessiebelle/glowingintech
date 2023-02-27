import styles from "./Picture.module.css";
import {Typography} from "@mui/material";
import * as React from "react";
import Overviewcards from "./overviewcards";


const HomeText = () => {
    return (
        <div className={styles.bg}>
            <div className={styles.textBackground}>
                <div >
                        <Typography align={"left"} gutterBottom className={styles.text} variant={"h5"}>
Glowing in Tech is a community driven platform, inspiring, empowering, connecting, and encouraging those underrepresented and underserved in tech. Founded by two Black women from non-technical backgrounds who first hand faced a lack of resources, representation and encouragement when looking to launch a coding career.
<br/> <br/>
Glowing in Tech aims to create a safe, empowering and fun space that makes the tech industry feel more inclusive and accessible.
<br/> <br/>
After a successful podcast launched in 2022, season 2 is set to launch this March so watch this space and follow our Linkedin page to become part our growing and active community.

                        </Typography>
    </div>
            </div>
            <div className={styles.bg}> <Overviewcards/> </div>


            </div>
        );
};
export default HomeText;