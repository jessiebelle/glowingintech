import styles from "./Picture.module.css";
import {Box, Typography} from "@mui/material";
import {experimentalStyled as styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import * as React from "react";
import Overviewcards from "./overviewcards";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#351c75ff' : '#351c75ff',
  ...theme.typography.body2,
  textAlign: 'center',
  color: 'white',
    boxShadow: 'none',

}));
const HomeText = () => {
    return (
        <div>
    <div className={styles.introdiv}>
                <Box sx={{ flexGrow:1,
                margin: 'auto',
                width: '80%',
  }}>
                    <Item>
                        <Typography variant={"h4"} align={"justify"} gutterBottom className={styles.text}>
Glowing in Tech is a <b>resource-sharing, community-centred platform </b> inspiring and engaging those underrepresented and underserved in tech. Founded when two Black women from non-technical backgrounds wanted to learn how to code and become software engineers but were faced by a lack of resources, representation and encouragement.
                        </Typography>
                    </Item>
                </Box>
    </div>
                                    <Overviewcards/>
    <div className={styles.introdiv}>
                <Box sx={{ flexGrow:1,
                margin: 'auto',
                width: '80%',
  }}>
                    <Item>


                <Typography variant={"h4"} align={"justify"} gutterBottom className={styles.text}>
Now, as successful engineers, they are creating a space that can make the tech field feel more inclusive and accessible and remove unnecessary barriers to entry.

Through events, knowledge-sharing, content creation and a podcast full of inspiring and high-profile speakers, we want to amplify and showcase underrepresented professionals in our industry and hopefully open doors for future talent in tech.
                </Typography>
            </Item>
        </Box>
    </div>
            </div>
        );
};
export default HomeText;