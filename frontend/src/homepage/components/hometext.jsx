import styles from "./Picture.module.css";
import {Box, Typography} from "@mui/material";
import * as React from "react";
import Overviewcards from "./overviewcards";


const HomeText = () => {
    return (
        <div className={styles.bg}>
            <div className={styles.textBackground}>
                <div className={styles.introdiv}>
                <Box sx={{ flexGrow:1,
                margin: 'auto',
                width: '80%',
  }}>
                        <Typography variant={"h4"} align={"justify"} gutterBottom className={styles.text}>
Glowing in Tech is a <b>resource-sharing, community-centred platform </b> inspiring and engaging those underrepresented and underserved in tech. Founded when two Black women from non-technical backgrounds wanted to learn how to code and become software engineers but were faced by a lack of resources, representation and encouragement.
                        </Typography>
                </Box>
    </div>
            </div>
                                    <Overviewcards/>

            <div className={styles.textBackground}>

    <div className={styles.introdiv}>
                <Box sx={{ flexGrow:1,
                margin: 'auto',
                width: '80%',
  }}>


                <Typography variant={"h4"} align={"justify"} gutterBottom className={styles.text}>
Now, as successful engineers, they are creating a space that can make the tech field feel more inclusive and accessible and remove unnecessary barriers to entry.

Through events, knowledge-sharing, content creation and a podcast full of inspiring and high-profile speakers, we want to amplify and showcase underrepresented professionals in our industry and hopefully open doors for future talent in tech.
                </Typography>
        </Box>
    </div>
            </div>
            </div>
        );
};
export default HomeText;