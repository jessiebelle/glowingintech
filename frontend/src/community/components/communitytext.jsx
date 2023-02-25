import React from "react";
import {Typography, Box
} from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import YoutubeEmbed from "../../components/youtubeembed";


const CommunityText = () =>{
  return (
      <div>
        <Box sx={{ flexGrow:1,
    backgroundColor: '#00ffff1e',
                margin: 'auto',
      padding:5,
            width: '80%',
  }}>
        <Typography variant="h4" component="div" gutterBottom>Community is <b>essential</b> for personal and professional growth. </Typography>
   <YoutubeEmbed embedId="uPCA9q_kbwA" />
            <Typography variant="h6" align="justify">Everyone is welcome to join the Glowing in Tech community</Typography>
    <Typography variant="body1" align="justify" gutterBottom>
    Have support to help you grow and succeed in your tech career. Our community is made up of tech professionals who are passionate about technology and are always willing to share their knowledge and experience with others.
    </Typography>
    <Typography variant="h6" align={"justify"} gutterBottom> What to expect: </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
      Once you've signed up, you should receive an email from us which with information on how to get access to exclusive content, newsletter, and events, to help you stay up-to-date on the latest trends and best practices in the industry.
            You'll also have the opportunity to connect with other members and participate in discussions and forums, to expand your network and build valuable relationships with others.
    </Typography>
      <Typography variant={"h6"} gutterBottom>
        We can't wait to see you there!
      </Typography>
        </Box>
        </div>
  );
  };


export default CommunityText;