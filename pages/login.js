import getConfig from 'next/config'
import React,{ useState,useContext } from 'react'
import { setCookie } from 'nookies'
import Router from 'next/router'
import styles from '../styles/Home.module.css'
import HeaderLogin from '../components/HeaderLogin/HeaderLogin'
import nodeCookie from 'node-cookie'
import { parseCookies  } from 'nookies'
import Swal from 'sweetalert2'
import jwt_decode from "jwt-decode"
import Cryptr from 'cryptr'
import {UserContext} from '../context/UserContext'
import loginServices from '../services/users/login'
import redirect from 'nextjs-redirect'



const { publicRuntimeConfig } = getConfig();

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [id, setId] =useState(undefined)
    const [userData, setUserData]=useState(undefined)
    const [currentuserData, setCurrentUserData]=useState(null)
    const [errores, setErrores]=useState('')


    // let {logear,setUsuario,usuario} = useContext(UserContext)


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
           setTheUser(id)
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
    logear(userData)
    
    // localStorage.setItem('bcript',encrypteduserID)
    // localStorage.setItem('ccript',encryptedusername)
    // localStorage.setItem('dcript',encrypteduserEmail)
   }

   const handLogin = async (e)=>{
       e.preventDefault()
try {
       const userResult = await loginServices.login({
        identifier: username,
        password: password
       })
       //console.log(userResult.user)
       setCurrentUserData(userResult.user)
       window.localStorage.setItem('logedUser',JSON.stringify(userResult.user.cv))
       setUsername('')
       setPassword('')
       console.log(currentuserData,userResult.jwt)
       setCookie(null, 'jwt', userResult.jwt , {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
    })  
        Router.push('/')
Swal.fire(`Welcome to Labor Staffer`);

} catch (error) {
    setErrores('wrong credentials')
    console.log(error,errores)
    setTimeout(()=>{
        setErrores(null)
    },2000)
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
                        <input className={styles.input} type="email" placeholder="Your email address"    onChange={e => setUsername(e.target.value) } value={username} required /><br />
                        <input className={styles.input} type="password" placeholder="Your password" onChange={e => setPassword(e.target.value) } value={password} required/><br />
                        <button className={styles.btn2} type="submit">Login</button>
                <p className={styles.register}>Or <a className={styles.register2} href="/register">create your account</a></p>
                </form>
                </div>
            </div>
		</>
	);
}

//export seteador
export default Login
