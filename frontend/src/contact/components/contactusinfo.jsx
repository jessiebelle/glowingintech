import React from "react";
import {Typography, Box
} from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import YoutubeEmbed from "../../components/youtubeembed";


const ContactUsInfo = () =>{
  return (
      <div color={"black"}>
        <Box sx={{ flexGrow:1,
    backgroundColor: '#00ffff1e',
                margin: 'auto',
      padding:5,
            width: '80%',
  }}>
        <Typography variant="h4" component="div" gutterBottom>Get in touch with us </Typography>
            <Typography variant="h6" align="justify">We would love to hear your feedback</Typography>
    <Typography variant="body1" align="justify" gutterBottom>
        For general questions and feedback, contact us across any of our social channels <b>@GlowingInTech</b>    </Typography>
    <Typography variant="h6" align={"justify"} gutterBottom> For collaboration enquiries: </Typography>
        <Typography variant="body1" align="justify" gutterBottom>
            Send us an email <b>hello@glowingintech.com</b> and we will get back to you as soon as possible.
    </Typography>
      <Typography variant={"h6"} gutterBottom>
        We look forward to hearing from you!
      </Typography>
        </Box>
        </div>
  );
  };


export default ContactUsInfo;