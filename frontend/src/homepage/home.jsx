import React from 'react'
import ResponsiveAppBar from '../components/header'
import HeaderImage from './components/headerimage'
import Footer from '../components/footer'
import HomeText from './components/hometext'
import HomeCarousel from './components/homecarousel'
import { Box } from '@mui/material'

const styles = { width: '100%', height: '100%', objectFit: 'cover', margin: 'auto' }

const Home = () => {
  return (
    <div style={{ backgroundColor: '#351c75ff', padding: 3 }}>
      <ResponsiveAppBar pageTitle="Home" />
      <container class={styles}>
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
          <HomeCarousel/>
        <HomeText />
      </Box>
      <Footer />
    </div>
  )
}

export default Home
