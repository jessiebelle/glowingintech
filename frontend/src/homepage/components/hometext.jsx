import styles from "./Picture.module.css";
import {Box, Typography} from "@mui/material";
import {experimentalStyled as styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#F15C80' : '#0A2A5E',
  ...theme.typography.body2,
  textAlign: 'center',
  color: 'white',
    boxShadow: 'none',

}));
const HomeText = () => {
    return (
    <div className={styles.introdiv}>
                <Box sx={{ flexGrow:1,
                margin: 'auto',
                width: '80%',
  }}>
                    <Item>
        <Typography variant={"h4"} align={"justify"} gutterBottom className={styles.text}>
Glowing in Tech is a resource-sharing community-centred platform, inspiring and engaging those underrepresented and underserved in tech. Founded when two Black women from non-technical backgrounds wanted to learn how to code and become software engineers but were faced by a lack of resources, representation and encouragement.
       </Typography>
          <Typography variant={"h4"} align={"justify"} gutterBottom className={styles.text}>
Now as successful engineers, they want to launch a space that can make the tech field feel more inclusive and accessible and remove unnecessary barriers to entry.

Through events, knowledge-sharing, content creation and a podcast full of inspiring and high-profile speakers, we want to amplify and showcase underrepresented professionals in our industry and hopefully open doors for future talent in tech.

       </Typography>
        <br/>
                    </Item>
                </Box>

    </div>
        );
};
export default HomeText;