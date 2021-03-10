import React from 'react'
import { parseCookies  } from 'nookies'
import getConfig from 'next/config'


const { publicRuntimeConfig } = getConfig();



export default function me() {

  console.log('me')
 
async function getMyData() {
  const jwt = parseCookies().jwt
  if (!jwt || jwt==='undefined' || jwt === ''){Router.push('/login')}

  const getData = await fetch(`${publicRuntimeConfig.API_URL}/users/me`, {
      method: "GET",
      headers: {
          'Authorization': `Bearer ${jwt}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
  })

  const getDataResponse = await getData.json()
 
  console.log('Data Response', getDataResponse)
  
}
 getMyData()

  return (
    <div>
      
    </div>
  )
}
