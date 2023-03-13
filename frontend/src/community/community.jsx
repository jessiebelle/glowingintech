import React from 'react'
import ResponsiveAppBar from '../components/header'
import CommunityForm from './components/communityform'
import { Box } from '@mui/material'
import CommunityText from './components/communitytext'
import Footer from '../components/footer'
import styles from './community.module.css'

const Community = () => {
  return (
    <div>
      <container className={styles.background}>
        <ResponsiveAppBar pageTitle="Community" />
      </container>
      <Box
        textAlign={'center'}
        sx={{
          flexGrow: 1,
          backgroundColor: '#351c75ff',
          height: 'auto',
          width: '100%',
        }}
      >
        <CommunityText />
        <Box
          textAlign={'center'}
          sx={{
            flexGrow: 1,
            backgroundColor: '#351c75ff',
          }}
        >
          <CommunityForm />
        </Box>
      </Box>
      <Footer />
    </div>
  )
}
export default Community
