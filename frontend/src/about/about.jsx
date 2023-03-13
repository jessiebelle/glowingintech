import React from 'react'
import ResponsiveAppBar from '../components/header'
import ResponsiveFooter from '../components/footer'
import AboutHeader from './components/aboutheader'
import TeamInfo from './components/teamInfo'

const About = () => {
  return (
    <div>
      {' '}
      <ResponsiveAppBar pageTitle="About" />
      <AboutHeader />
      <TeamInfo />
      <ResponsiveFooter />
    </div>
  )
}

export default About
