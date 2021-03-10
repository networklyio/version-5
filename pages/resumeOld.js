import React from 'react'
import {useState,useEffect} from 'react'
import getConfig from 'next/config'
import Router from 'next/router'
import styles from '../styles/Home.module.css'
import {useForm} from 'react-hook-form'
import Swal from 'sweetalert2'
import nookies from 'nookies'
import jwt_decode from "jwt-decode"
import { parseCookies  } from 'nookies'
import HeaderJobs from '../components/HeaderJobs/HeaderJobs'
import useMe from '../hooks/useUser'

const { publicRuntimeConfig } = getConfig()


export default function MyResume() {
  const {register, handleSubmit, errors} = useForm()
  const [phone, setPhone] = useState('Phone 78655')    
  const [address, setAddress] = useState('Adress 7895 gtr huy67')
  const [about, setAbout] = useState(' About Me Loren pisimu')
  const [experience, setExperience] = useState(' 1.- Errr, 2.- $555 , 3.  Bicoca')
  const [skills, setSkills] = useState('Skill De Bdc')
  const [plus, setPlus] = useState('Plus de Bdc')
  const [avatar, setAvatar] = useState()
  const [resume, setResume] = useState()
  const [id,setId]=useState()
  const [ref,setRef]=useState('cv')
  const [refId,setRefId]=useState()
  const [field,seField]=useState('resume')
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
      //console.log('Data Response', getDataResponse)
      setCurrentUser(getDataResponse)
    }
     getMyData()     
  },[])

  

const verificaResumen = (currentUser)=>{
  const jwt = parseCookies().jwt
  async function buscarCv(currentUser){

    const getCv = await fetch(`${publicRuntimeConfig.API_URL}/cvs?curriculum=1`,{
      method: "GET",
      headers: {
          'Authorization': `Bearer ${jwt}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    })
    const cv = await getCv.json()
    console.log('cv', cv,'currentUser',currentUser)
  }
  buscarCv()
}  
//console.log('usuario',currentUser)  
if(currentUser){verificaResumen(currentUser)}


 
 const onSubmit = (data) => {   
       updateUser(data)
      //goToApply()      
    }  

//  const setTheFile =(e)=>{
//   setResume('files',e.target.files[0])
//   setRefId(id)
//  }

//  
  
//    const  goToApply = ()=>{
//      Router.push("/")
//      }



//   async function updateUser(data){
//     // const cookies = nookies.get('jwt')
//     // const {id, username} = jwt_decode(cookies.jwt);
//     // console.log('cookies',id)
// const Userjwt = parseCookies().bcript
// console.log(Userjwt)

//     const  userInfo ={
//       phone: phone,
//       address:address,
//       experience:experience,
//       plus:plus,
//       about:about,
//       skills:skills,
//       resume:resume,
//       avatar:avatar,
//       'curriculum':id
//   }  

  

//     const add = await fetch(`${publicRuntimeConfig.API_URL}/cvs/51`, {
//       method: "PUT",
//       headers: {
//         'Authorization': `Bearer ${jwt}`,
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//       phone: phone,
//       address:address,
//       experience:experience,
//       plus:plus,
//       about:about,
//       skills:skills,
//       'curriculum':id,
//       user:id
//       })
//     })   
//   const addResponse = await add.json()

//   }   

  return (
    <>
     <HeaderJobs/>
     <br/>
     <br/>
     <form onSubmit={handleSubmit(onSubmit)}  encType =  "multipart/form-data">
                <div>
                <label htmlFor="phone">Phone number <span className={styles.span}>*</span></label>
                <input type="phone" 
                onChange={e => setPhone(e.target.value) } 
                value={phone} 
                placeholder="Type a valid phone number"
                ref={register}
                name="phone" 
                />
                </div>
                <div>
                <label htmlFor="address">My Address <span className={styles.span}>*</span></label>
                <textarea onChange={e => setAddress(e.target.value) } 
                value={address} rows="7" placeholder="Type your address" className={styles.MyTextArea}
                ref={register} name="address"></textarea>
                </div>
                <div>
                <label htmlFor="about">About me <span className={styles.span}>*</span></label>
                <textarea onChange={e => setAbout(e.target.value) } 
                value={about} rows="7" placeholder="Type your about Me" className={styles.MyTextArea}
                ref={register} name="about"></textarea>
                </div>
                <div>
                <label htmlFor="skills">My Skills <span className={styles.span}>*</span></label>
                <textarea onChange={e => setSkills(e.target.value) } 
                value={skills} rows="7" placeholder="Type your skills" className={styles.MyTextArea}
                ref={register} name="skills"></textarea>
                </div>
                <div>
                <label htmlFor="experience">My Experience <span className={styles.span}>*</span></label>
                <textarea onChange={e => setExperience(e.target.value) } 
                value={experience} rows="7" placeholder="Type your experience" className={styles.MyTextArea}
                ref={register} name="experience"></textarea>
                </div>
                <div>
                <label htmlFor="plus">Other plus <span className={styles.span}>*</span></label>
                <textarea onChange={e => setPlus(e.target.value) } 
                value={plus} rows="7" placeholder="Type your plus" className={styles.MyTextArea}
                ref={register} name="plus"></textarea>
                </div>
                <div className={styles.btnSide, styles.up}>
                    <input type="submit"  className={styles.btn} value="my resume"/>
               </div>
      </form>
        </>
  )
}
