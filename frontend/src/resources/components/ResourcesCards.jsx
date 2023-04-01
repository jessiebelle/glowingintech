import React from 'react'

import JessieCard from "./JessieCard";
import Grid from "@material-ui/core/Grid";
import GITCard from "./GITCard";
import EpisodeShownotes from "./EpisodeShownotes";

const ResourcesCards = () => {
  return (
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  <Grid item xs={2} sm={4} md={4}>
        <JessieCard></JessieCard>
  </Grid>
    <Grid item xs={2} sm={4} md={4}>
        <GITCard></GITCard>
      </Grid>
            <Grid item xs={2} sm={4} md={4}>
                <EpisodeShownotes></EpisodeShownotes>
            </Grid>
    </Grid>
  )
}

export default ResourcesCards