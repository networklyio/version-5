import getConfig from 'next/config'
import { useState } from 'react'
import { setCookie } from 'nookies'
import Router from 'next/router'
import styles from '../styles/Home.module.css'
import HeaderLogin from '../components/HeaderLogin/HeaderLogin'
import nodeCookie from 'node-cookie'
import { parseCookies  } from 'nookies'
import Swal from 'sweetalert2'
import jwt_decode from "jwt-decode"
import Cryptr from 'cryptr'


const { publicRuntimeConfig } = getConfig();

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [id, setId] =useState(undefined)
    const [userData, setUserData]=useState(undefined)
    const [currentuserData, setCurrentUserData]=useState([])


    async function handleLogin() {
        const loginInfo = {
            identifier: username,
            password: password
        }

        const login = await fetch(`${publicRuntimeConfig.API_URL}/auth/local`, {
            method: "POST",
            headers: {
            
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
         const loginResponse = await login.json();
         //console.log('desde login',login.status)
         if(login.status !== 200){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: '<a href>Why do I have this issue?</a>'
            })        
          }
          
          if(login.status === 200){
            setCookie(null, 'jwt', loginResponse.jwt , {
              maxAge: 30 * 24 * 60 * 60,
              path: '/',
          })  
           //console.log('ADDRESPONSE',loginResponse,'LOGIN',login)
           const {id} = jwt_decode(loginResponse.jwt)
           //console.log(id)
           //setTheUser(id,loginResponse.jwt)
           Swal.fire(`Welcome to Labor Staffer`);
           Router.push('/')        
        }   
           
   } 

   
        //Router.push('/')
   const setTheUser = async (id)=>{
    const jwt = parseCookies().jwt
//    if (!jwt || jwt==='undefined' || jwt === ''){Router.push('/login')}

    const res = await fetch(`${publicRuntimeConfig.API_URL}/users/${id}`,{
headers: {
        'Authorization': `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      }
    }) 
    const userData = await res.json()
    //console.log('User Data ',userData)

    const cryptr = new Cryptr('edwinhenriquezh@gmail.com')
    
    //console.log('User Data ',userData.id)
    ///console.log('User Data ',userData.email)
    ///console.log('User Data ',userData.username)
    
    const userId = userData.id 
    const userEmail = userData.email
    const username = userData.username 

    // console.log('User Data ',userId)
    // console.log('User Data ',userEmail)
    // console.log('User Data ',username)

    
    const encryptedusername = cryptr.encrypt(username)
    const encrypteduserID = cryptr.encrypt(userId)
    const encrypteduserEmail = cryptr.encrypt(userEmail)

    
    localStorage.setItem('bcript',encrypteduserID)
    localStorage.setItem('ccript',encryptedusername)
    localStorage.setItem('dcript',encrypteduserEmail)

     

    //  const {bcript, ccript, dcript} = parseCookies()
    //  console.log('De cookies', bcript,ccript,dcript)
   }
       
        
   

	return (
		<>
        <HeaderLogin />
            <div>
                <div className={styles.container1}>
                    <div >
                        <p>You need to login to access this page and apply for a job</p>
                    </div>

                    <form className={styles.form}>
                        <input className={styles.input} type="email" placeholder="Your email address"    onChange={e => setUsername(e.target.value) } value={username} required /><br />
                        <input className={styles.input} type="password" placeholder="Your password" onChange={e => setPassword(e.target.value) } value={password} required/><br />
                        <button className={styles.btn2} type="button" onClick={() => handleLogin() }>Login</button>
                    </form>
                </div>
            </div>
		</>
	);
}

//export seteador
export default Login
