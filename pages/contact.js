import React from 'react'
import HeaderContact from '../components/HeaderContact/HeaderContact'
import ContactUs from '../components/ContactUs/ContactUs'


export default function ContactUS({states}) {
  return (
    <div>
      <HeaderContact/>
      <ContactUs states={states}/>
    </div>
  )
}

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export async function getServerSideProps() {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/states`)
  const states = await res.json()
  return {
    props: {
      states:states
    }, // will be passed to the page component as props
    
  }
}