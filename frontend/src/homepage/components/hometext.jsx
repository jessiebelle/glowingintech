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
Glowing in tech is a weekly podcast between two black women Software Engineers and guests. We explore how to thrive whilst navigating the tech space and encourage more people from diverse backgrounds to level up in their careers.        </Typography>
        <br/>
                    </Item>
                </Box>

    </div>
        );
};
export default HomeText;