import React,{useState,useEffect} from 'react'
import HeaderJobs from '../../components/HeaderJobs/HeaderJobs'
import {loginWithGoogle, logoutGoogle, onAuthStateChanged} from '../../firebase/client'
import Button from '../../components/Button'
import { useRouter } from "next/router"
import useUser, { USER_STATES } from "../../hooks/useUser"
import getConfig from 'next/config'
import { setCookie } from 'nookies'


export default function login() {

  const { publicRuntimeConfig } = getConfig()

  const user = useUser()
  const router = useRouter()


  useEffect(() => {
    
  user && router.replace("/")
  }, [user])
  
  
  const handleClick = ()=>{
    loginWithGoogle().then(()=>{
      //console.log('Dentro de logeado de XXXXX')
    }).catch(err=>{
      console.log(err)
    })
  }

 const logout =()=>{
   logoutGoogle()
 } 


  return (
    <div>
    <HeaderJobs />
    <section>
          <img src='/assets/media/logo-color.png' alt='Logo' width="30px" />
          <h1>Labor Staffer</h1>
          <h2>Your Future<br />in this way</h2>
          
          <div>
            {
              (user === null || user === undefined || user === USER_STATES.NOT_LOGGED || user===USER_STATES.NOT_KNOWN) &&
                <Button onClick={handleClick}>
                  Login with Google
                </Button>
            }
            {
              user && user.avatar && <div>
                <img src={user.avatar} />
                <strong>{user.username}</strong>
                 <Button onClick={logout}>Logout</Button>
              </div>
            }
          </div>
          
        </section>
    </div>
  )
}
