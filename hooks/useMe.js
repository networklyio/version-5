import { useState,useEffect } from "react"

export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
}

export default function useMe() {
  const [currentUser, setCurrentUser] =useState([])


useEffect(()=>{
   async function getMyData() {
   const jwt = parseCookies().jwt
  
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
    setCurrentUser(getDataResponse)
  }
   getMyData()
},[])

  return currentUser
}

