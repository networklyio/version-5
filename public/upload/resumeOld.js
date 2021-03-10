import React from 'react'
import HeaderJobs from '../../components/HeaderJobs/HeaderJobs'
import Resume from '../../components/Resume/Resume'
import useUser from '../../hooks/useUser'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export default function buildResume() {

 const user = useUser()


  return (
    <>
    <HeaderJobs />
    { user && <Resume candidate={user}/>}
     </>
  )
}

