import React from 'react'
import Employer from "../components/Employers/Employer";
import HeaderEmployers from '../components/HeaderEmployers/HeaderEmployers'

export default function Employers({states}) {
  return (
    <div>
      <HeaderEmployers /> 
      <Employer states={states}/>
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
