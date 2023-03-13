import React from 'react'
import ResponsiveAppBar from '../components/header'
import ResponsiveFooter from '../components/footer'
import ResourcesHeader from './components/ResourcesHeader'
import styles from './components/Resources.module.css'

const Resources = () => {
  return (
    <div style={{ backgroundColor: '#351c75ff' }}>
      {' '}
      <ResponsiveAppBar pageTitle="Resources" />
      <ResourcesHeader />
      <h1 className={styles.text}>Coming soon</h1>
      <ResponsiveFooter />
    </div>
  )
}

export default Resources
