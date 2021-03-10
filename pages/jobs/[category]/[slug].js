import React,{useEffect,useState} from 'react'
import { NextSeo } from 'next-seo'
import HeaderJobs from '../../../components/HeaderJobs/HeaderJobs'
import styles from '../jobs.module.css'
import Router from 'next/router'
import useUser from '../../../hooks/useUser'
import getConfig from 'next/config'
import swal from 'sweetalert2'
import {USES_STATES,currentUser} from '../../../hooks/useUser'
import Swal from 'sweetalert2'
import { parseCookies  } from 'nookies'
import useActual from '../../../hooks/useActual'


const { publicRuntimeConfig } = getConfig()



export default function job({ job }) {
  const SEO = {
    title: `Labor Staffer | ${job.title}`,
    description: job.position,

    openGraph: {
      title: `Labor Staffer | ${job.title}`,
      description: job.title,
    }
  }

const [aplicado, setAplicado]= useState(0) 
const [userName, setUserName] = useState()
  const [userCv,setUserCv] = useState(null)
  const [userId,setUserId] = useState(null)


useEffect(()=>{
  const jwt = parseCookies().jwt
  fetch(`${publicRuntimeConfig.API_URL}/users/me`, {
    method: "GET",
    headers: {
        'Authorization': `Bearer ${jwt}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})
.then((response) =>response.json())
.then((r)=>{
  if(r?.statusCode){
    console.log('Hay StatusCode',r.statusCode)
    Router.push('/login')
  }
  if(r?.statusCode===undefined){
    console.log('No Hay StatusCode',r.id,r.cv)
    if(r.cv===null){
      createResume(r.id)
      setUserCv(r.cv)
      setUserId(r.id)
      setUserName(r.username)
    }
    if(r.cv!==null & r.cv>0){
      setUserCv(r.cv)
      setUserId(r.id)
      setUserName(r.username)
      }

  }
})
  
  
},[])

const  goToApply = (e)=>{
  e.preventDefault()
  // console.log('Aplicando al Job',job)
     job.aspirantes.map( aspirante=>{   
       console.log('por aqui') 
      if (userId == aspirante.id){ 
     Swal.fire({
         icon: 'warning',
         title: 'Oops...',
         text: 'You already applied to this lip service',
         footer: '<a href>Why do I have this issue?</a>'
       })
       Router.back()
      }})
     
 const data={aspirantes:userId}

 const url = `${publicRuntimeConfig.API_URL}/posts/${job.id}`
 const applyJob = async ()=> {
   const applyJobResponse = await fetch(url, {
     method: 'PUT',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify(data) 
   })
    const dataPost = await applyJobResponse.json()
    // console.log('Guardando Id de Candidato')

    Swal.fire({
      icon: 'success',
      text: `great, you applied correctly.
      now, take a look at the legal part of the contract` ,
      title: 'You have applied correctly!',
      footer: '<a href>Why do I have this issue?</a>'
    })
    Router.push('/apply')
  }
applyJob()
}


if(userId ===undefined){
  Swal.fire({
    icon: 'warning',
    text: `You need log in to see this page, go to login or register` ,
    title: 'You need login to applied!',
    footer: '<a href="/register">Or register with a new account</a>'
  })
  // Router.push('/login')
}
  
 

  return (
    <>
      <NextSeo {...SEO} />
      <HeaderJobs />
      <section className={styles.info}>
        <form onSubmit={goToApply}>
        <div className={styles.sectionText}>
          <h2 className={styles.h2}>{job.title}</h2>
          <p className={styles.p}>{job.category.name}</p>
          
          <p className={styles.p}>{job.position}</p>
          <p className={styles.p}>{job.body}</p>
          <p className={styles.p}>{job.body}</p>
          <p className={styles.p}>Responsibilities:{job.responsibilities}</p>
          <p className={styles.p}>Qualifications:{job.qualifications}</p>
          <p className={styles.p}>state:{(job.state && job.state.name)}, city:{job.City}</p>
          <p className={styles.p}>$ {job.min_salary} - $ {job.max_salary}</p>
                    
          <p className={styles.p}>{job.body}</p>
          {(userId && (
          <div className={styles.btnSide}>
            <button  className={styles.btnPage} >apply</button>
          </div>
          ))}
     
         
        </div >
        </form>
        </section>
    </>
  )
}


//console.log('publica', publicRuntimeConfig.API_URL)
const noLogeado = ()=>{
  Router.push('/login')
}

export async function getServerSideProps(context) {
  const { slug } = context.query
  //console.log('Desde ', slug)
  const res = await fetch(`${publicRuntimeConfig.API_URL}/posts?slug=${slug}`)
  const data = await res.json()

  return {
    props: {
      job: data[0]
    }
  }
}

async function getProfile(user)
{
  console.log(user.email)
  const url = `${publicRuntimeConfig.API_URL}/candidates?email=${user.email}`
  const res = await fetch(url)
  const data = await res.json()
  return data
 }

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
      
}

