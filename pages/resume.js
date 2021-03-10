import React,{useEffect,useState} from 'react'
import HeaderJobs from '../components/HeaderJobs/HeaderJobs'
import styles from '../styles/Home.module.css'
import { parseCookies  } from 'nookies'
import getConfig from 'next/config'
import {useForm} from 'react-hook-form'
import Link from 'next/link'
import Swal from 'sweetalert2'
import Router from 'next/router'


const { publicRuntimeConfig } = getConfig();

export default function CreateResume() {
  const {register, handleSubmit, errors} = useForm()
  const [phone, setPhone] = useState('')    
  const [address, setAddress] = useState()
  const [about, setAbout] = useState()
  const [experience, setExperience] = useState()
  const [skills, setSkills] = useState()
  const [plus, setPlus] = useState()
  const [userName, setUserName] = useState()
  const [userCv,setUserCv] = useState(null)
  const [userId,setUserId] = useState(null)
  const [userResume,setUserResume] = useState([])
  
  
  useEffect(()=>{
    const resultado = getMyData()
    resultado.then(r=>{
      //console.log('curriculo',r, r.cv, r.id)
       if(r.cv===null){
         console.log('Creando Resumen', r.id)
         createResume(r.id).then(resumenCreado=>{
           console.log(resumenCreado, 'nuevo') 
               setPhone(resumenCreado.phone)
               setAddress(resumenCreado.address)
               setAbout(resumenCreado.about)
               setExperience(resumenCreado.experience)
               setSkills(resumenCreado.skills)
               setPlus(resumenCreado.plus)
               setUserCv(r.cv)
               setUserId(r.id)
               setUserName(r.username)

         }).catch(error=>{
           console.log(error)
         })
        }
   if(r.cv !== null) {
     //console.log('No es Nulo', r.cv)
         setUserCv(r.cv)
         setUserId(r.id)
         setUserName(r.username)
         const myUserResume = getMyResume(r.cv)
               myUserResume.then(res=>{
                 console.log(res,'res')
                  setPhone(res.phone)
                  setAddress(res.address)
                  setAbout(res.about)
                  setExperience(res.experience)
                  setSkills(res.skills)
                  setPlus(res.plus)
               })
         }      
    })
  },[])

  const onSubmit = (data) => {  
   //console.log(data)
   const resultado = updateResume(userId,userCv, data, userName)
   resultado.then(res=>{
      //.log(res)
      Swal.fire('summary correctly updated')
      Router.push('/')
   })
  
         
 }  


const inputChange= (e)=>{
e.preventDefault()
e => setPhone(e.target.value)
}
 
  return (
    <>
     <HeaderJobs/>
     <br/>
      <br />
      <section className={styles.contenedor}>

     <form onSubmit={handleSubmit(onSubmit)}  encType =  "multipart/form-data">
                <div className={styles.intro}>
                <label className={styles.label} htmlFor="phone">Phone number <span className={styles.span}>*</span></label>
                <input className={styles.input} type="text" onChange={e =>setPhone(e.target.value)} value={phone} 
                placeholder="Type a valid phone number" ref={register}
                name="phone"/>
                </div>
                <div className={styles.intro}>
                <label className={styles.label} htmlFor="address">My Address <span className={styles.span}>*</span></label>
                <textarea onChange={e => setAddress(e.target.value) } 
                value={address} rows="1" placeholder="Type your address" className={styles.area}
                ref={register} name="address"></textarea>
                </div>
                <div className={styles.intro}>
                <label className={styles.label} htmlFor="about">About me <span className={styles.span}>*</span></label>
                <textarea onChange={e => setAbout(e.target.value) } 
                value={about} rows="3" placeholder="Type your about Me" className={styles.area}
                ref={register} name="about"></textarea>
                </div>
                <div className={styles.intro}>
                <label className={styles.label} htmlFor="skills">My Skills <span className={styles.span}>*</span></label>
                <textarea onChange={e => setSkills(e.target.value) } 
                value={skills} rows="3" placeholder="Type your skills" className={styles.area}
                ref={register} name="skills"></textarea>
                </div>
                <div className={styles.intro}>
                <label className={styles.label} htmlFor="experience">My Experience <span className={styles.span}>*</span></label>
                <textarea onChange={e => setExperience(e.target.value) } 
                value={experience} rows="3" placeholder="Type your experience" className={styles.area}
                ref={register} name="experience"></textarea>
                </div>
                <div className={styles.intro}>
                <label className={styles.label} htmlFor="plus">Other plus <span className={styles.span}>*</span></label>
                <textarea onChange={e => setPlus(e.target.value) } 
                value={plus} rows="3" placeholder="Type your plus" className={styles.area}
                ref={register} name="plus"></textarea>
                </div>
                <div className={styles.btnSide}>
                    <input type="submit"  className={styles.btn3} value="Update my resume"/>
               </div>
        </form>
  
       <Link href={'/cv'}>
        <a href="#" className={styles.btn1}>Upload PDF</a>
       </Link>

       <Link href={'/avatar'}>
        <a href="#" className={styles.btn1}>Upload Profile Pic</a>
       </Link>
        </section>
        </>
  )
}

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
 
  //console.log('Data Response', getDataResponse)
  return getDataResponse    
}

const createResume = async (id) =>{
  const jwt = parseCookies().jwt
  if (!jwt || jwt==='undefined' || jwt === ''){Router.push('/login')}
  const addResume = await fetch(`${publicRuntimeConfig.API_URL}/cvs`, {
             method: "POST",
             headers: {
                 'Authorization': `Bearer ${jwt}`,
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({
             phone: 'N/A',
             address:'N/A',
             experience:'N/A',
             plus:'N/A',
             about:'N/A',
             skills:'N/A',
             'curriculum':id,
             user:id
             })
           })   
         const addResponse = await addResume.json()
         return addResponse  
      
}

const updateResume = async (id,cv,data,userName) =>{
  //console.log(userName)
  const jwt = parseCookies().jwt
  if (!jwt || jwt==='undefined' || jwt === ''){Router.push('/login')}
  
  const updateR = await fetch(`${publicRuntimeConfig.API_URL}/cvs/${cv}`, {
             method: "PUT",
             headers: {
                 'Authorization': `Bearer ${jwt}`,
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({
             name:userName,  
             phone: data.phone,
             address: data.address,
             experience: data.experience,
             plus: data.plus,
             about: data.about,
             skills: data.skills,
             'curriculum':id,
              user:id
             })
           })   
        const UpdateResponse = await updateR.json()
        return UpdateResponse
}

async function getMyResume(cv){
  const jwt = parseCookies().jwt
  if (!jwt || jwt==='undefined' || jwt === ''){Router.push('/login')}
  const getResume = await fetch(`${publicRuntimeConfig.API_URL}/cvs/${cv}`, {
      method: "GET",
      headers: {
          'Authorization': `Bearer ${jwt}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
  })
  if(getResume.status===404){
    return null
  }
  const getResumeResponse = await getResume.json()
  //console.log(getResume)
  return getResumeResponse  
}






