import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

import {Box, Typography} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AboutAmber from "./AboutAmber";
import AboutJessie from "./AboutJessie";
import styles from "./About.module.css";
import AboutAdodoola from "./AboutAdodoola";

const TeamInfo = () =>{
  return (
      <div style={{backgroundColor: '#351c75ff'}}>
          <div className={styles.bg}>
        <Box className={styles.box}>
            <Typography className={styles.text} variant="h3" component="div" gutterBottom>Meet the Team</Typography>
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid xs={6} sm={4} md={4} alignItems="center" padding={5}>
              <AboutAmber/>
                                </Grid>
                <Grid xs={6} sm={4} md={4} alignItems={"auto"} padding={5}>
                                <AboutJessie/>
                                  </Grid>
                    <Grid xs={6} sm={4} md={4} alignItems={"auto"} padding={5}>
                                <AboutAdodoola/>
                                  </Grid>
              </Grid>

        </Box>
          </div>
        </div>
  );
  };


export default TeamInfo;