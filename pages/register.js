import getConfig from 'next/config'
import { useState } from 'react'
import { setCookie, destroyCookie } from 'nookies'
import jwt_decode from "jwt-decode"
import { parseCookies  } from 'nookies'
import Router from 'next/router'
import styles from '../components/Register/Register.module.css'
import HeaderLogin from '../components/HeaderLogin/HeaderLogin'
import Swal from 'sweetalert2'



const { publicRuntimeConfig } = getConfig();

function Register() {
    destroyCookie(null, 'jwt')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function handleRegister() {
        const registerInfo = {
            username: username,
            email: email,
            password: password
        }

        const register = await fetch(`${publicRuntimeConfig.API_URL}/auth/local/register`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerInfo)
        })
        const registerResponse = await register.json();
        if(register.status !== 200){
          const errorMessage =(registerResponse.message[0].messages[0].message)
          Swal.fire({
              icon: 'error',
              title: `Oops... ${errorMessage}`,
              text: 'Something went wrong!',
              footer: '<a href>Why do I have this issue?</a>'
            })        
          }
          
          if(register.status === 200){
           Swal.fire(`Welcome to Labor Staffer...please login now`);
           //Router.back()   
           Router.push('/login')       
        }   

       //Router.push('/')
    }

	return (
		<>
        <HeaderLogin/>
            <div>
                <div className={styles.container1}>
                    <div>
                        <p>Register here</p>
                    </div>

                    <form className={styles.form}>
                        <input className={styles.input}  className={styles.input} type="text" onChange={e => setUsername(e.target.value) } value={username} placeholder="Username"/><br />
                        <input className={styles.input}  type="email" onChange={e => setEmail(e.target.value) } value={email} placeholder="Email" /><br />
                        <input className={styles.input}  type="password" onChange={e => setPassword(e.target.value) } value={password} placeholder="Password"/><br />
                        <button className={styles.btn2} type="button" onClick={() => handleRegister() }>Register</button>
                    </form>
                </div>
            </div>
		</>
	);
}


export default Register;