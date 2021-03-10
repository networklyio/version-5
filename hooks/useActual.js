import { useState,useEffect } from "react"
import { parseCookies  } from 'nookies'
import getConfig from 'next/config'


const { publicRuntimeConfig } = getConfig()
  

export default function useActual(){

const [actual,setActual] = useState([])
const [loading, setLoading] =useState(false)

useEffect(()=>{
  const jwt = parseCookies().jwt
  setLoading(true)
  fetch(`${publicRuntimeConfig.API_URL}/users/me`, {
    method: "GET",
    headers: {
        'Authorization': `Bearer ${jwt}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then(response=>response.json()).then(json=>{
  setActual(json)
  setLoading(false)
  console.log('luego',actual,json)
}) 
if(loading===false) return actual
},[])
}
