import { useEffect, useState } from "react"
import { onAuthStateChanged } from "../firebase/client"
import { useRouter } from "next/router"
import {seteador} from "../pages/login"
import nookies from 'nookies'
import jwt_decode from "jwt-decode"
import { parseCookies  } from 'nookies'
import getConfig from 'next/config'



const { publicRuntimeConfig } = getConfig()


export const USER_STATES = {
  NOT_LOGGED: null,
  NOT_KNOWN: undefined,
}

export default function useUser() {
  const [user, setUser] = useState(USER_STATES.NOT_KNOWN)
  const [loading, setLoading] =useState(false)

  const router = useRouter()

  useEffect(() => {
    const jwt = parseCookies().jwt
    setLoading(true)
  fetch(`${publicRuntimeConfig.API_URL}/users/me`, {
      method: "GET",
      headers: {
          'Authorization': `Bearer ${jwt}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
  }).then(response=>{
    if (!response.ok) throw Error(response.status)
    setUser(USER_STATES.NOT_LOGGED)
    return response
  }).then(response => (r)=> {
    console.log("ok")
    setUser('LOGGED')
    const resultado = response.json()
  }) 
  .catch(error => console.log(error))

  }, [])

  /* useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push("/login")
  }, [user])
 */
  return user
}