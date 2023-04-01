import Grid from '@mui/material/Unstable_Grid2'
import { Box, Typography } from '@mui/material'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
import * as React from 'react'
import DiamondIcon from '@mui/icons-material/Diamond'
import PeopleIcon from '@mui/icons-material/People'
import styles from './Picture.module.css'

const cards = [
  {
    icon: <RecordVoiceOverIcon fontSize={'large'} />,
    pageTitle: 'Podcast',
    href: '/podcast',
    description:
      'An award winning podcast, with a variety of guests. Giving you insight into different careers.',
  },
  {
    icon: <DiamondIcon fontSize={'large'} />,
    pageTitle: ' Resources',
    href: '/resources',
    description:
      'Videos, blog posts, downloadable resources, events and more to help you on your journey.',
  },
  {
    icon: <PeopleIcon fontSize={'large'} />,
    pageTitle: ' Community',
    href: '/community',
    description:
      'A place where all tech enthusiasts can come together to share their experiences.',
  },
]
const OverviewCards = () => {
  return (
    <Box
      textAlign={'center'}
      sx={{
        flexGrow: 1,
        backgroundColor: '#351c75ff',
        height: 'auto',
        padding: 2,
      }}
    >
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {cards.map((card, index) => (
          <Grid xs={6} sm={4} md={4} key={index} alignItems="center" padding={5}>
            <div className={styles.cards}>
              <Typography className={styles.text}>{card.icon}</Typography>
              <Typography className={styles.text} variant={'h4'}>
                {card.pageTitle}
              </Typography>
              <br />
              <Typography className={styles.text} variant={'body1'}>
                {card.description}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
export default OverviewCards
