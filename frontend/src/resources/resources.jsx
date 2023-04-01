import React from 'react'
import ResponsiveAppBar from '../components/header'
import ResponsiveFooter from '../components/footer'
import ResourcesHeader from './components/ResourcesHeader'
import styles from './components/Resources.module.css'
import ResourcesCards from "./components/ResourcesCards";
import {Box} from "@mui/material";

const Resources = () => {
  return (
    <div style={{ backgroundColor: '#351c75ff' }}>
      {' '}
      <ResponsiveAppBar pageTitle="Resources" />
      <ResourcesHeader />
        <section>
            <div>
      <h1 className={styles.text}>
        A hub of community-built resources to help you on your journey to a career in tech
      </h1>

                </div>
            </section>
        <section>
        <Box>
            <ResourcesCards></ResourcesCards>
        </Box>
            </section>
      <ResponsiveFooter />
    </div>
  )
}

export default Resources
