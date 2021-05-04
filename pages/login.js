import React, { useState } from 'react'
import HeaderLogin from '../components/HeaderLogin/HeaderLogin'
import styles from '../styles/Home.module.css'
import getConfig from 'next/config'
import { setCookie } from 'nookies'

import Swal from 'sweetalert2';




const { publicRuntimeConfig } = getConfig();

export default function Login() {
  const [username, setUsername] = useState(' ')
  const [password, setPassword] = useState(' ')
  const [errores, setErrores] = useState('')
  const [resultadLogin, setResultadLogin] = useState({})



  const handLogin = async (e) => {
    e.preventDefault()
    const loginInfo = { identifier: username, password: password }
    const login = await fetch(`${publicRuntimeConfig.API_URL}/auth/local`,
      {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginInfo)
      })
    const respuesta = await login.json()  
    if(respuesta.statusCode){
      setErrores('wrong credentials')
          setTimeout(()=>{
          setErrores(null)
      },1000)}else{
        //console.log(respuesta.jwt)
        setCookie(null, 'jwt', respuesta.jwt , {
          maxAge: 30 * 24 * 60 * 60,
          path: '/',
      })
      
      Swal.fire(`Welcome to Labor Staffer`, 'please click ok so that you know the policies established by law and to fill out the forms and update your curriculum', 'success')
 .then((result) => {
   //console.log(result);
   if(result) {
    window.location = "/legal";
   }
 });
      
      }
  }

  return (
    <>
      <HeaderLogin />
      <div>
        <div className={styles.container1}>
          <div >
            {(errores && <h3>{errores}</h3>)}
            <p>You need to login to access this page and apply for a job</p>
          </div>
          <form className={styles.form} onSubmit={handLogin}>
            <input className={styles.input} type="email" placeholder="Your email address" onChange={e => setUsername(e.target.value)} value={username} required /><br />
            <input className={styles.input} type="password" placeholder="Your password" onChange={e => setPassword(e.target.value)} value={password} required /><br />
            <button className={styles.btn2} type="submit">Login</button>
            <p className={styles.register}>Or <a className={styles.register2} href="/register">create your account</a></p>
          </form>
        </div>
      </div>
    </>
  );
}
