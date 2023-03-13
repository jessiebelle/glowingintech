import React from 'react'
import ResponsiveAppBar from '../components/header'
import ResponsiveFooter from '../components/footer'
import ContactUsInfo from './components/contactusinfo'

const Contact = () => {
  return (
    <div>
      <ResponsiveAppBar pageTitle="Contact" />
      <ContactUsInfo />
      <ResponsiveFooter />
    </div>
  )
}
export default Contact
