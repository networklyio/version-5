import HeaderJobs from '../components/HeaderJobs/HeaderJobs'
import getConfig from 'next/config'
import Router from 'next/router'
import styles from '../styles/Home.module.css'
import {useForm} from 'react-hook-form'
import Swal from 'sweetalert2'
import nookies from 'nookies'
import jwt_decode from "jwt-decode"
import { parseCookies  } from 'nookies'
import React,{useEffect,useState} from 'react'
import Link from 'next/link'



const { publicRuntimeConfig } = getConfig()

export default function Cv() {

  const [resumen, setResumen] = useState(null)
  const [userName, setUserName] = useState()
  const [userCv,setUserCv] = useState(null)
  const [userId,setUserId] = useState(null)
  const jwt = parseCookies().jwt
  if (!jwt || jwt==='undefined' || jwt === ''){Router.push('/login')}

  useEffect(()=>{
    const resultado = getMyData()
    resultado.then(r=>{
      console.log('curriculo', r.cv)
      if(r.cv===null){createResume(r.id)}
      if(r.cv!==null & r.cv>0){
        setUserCv(r.cv)
        setUserId(r.id)
        setUserName(r.username)
        }      
    })
  },[])


  
  const upload = async (e)=>{
  e.preventDefault(); 
  console.log(resumen,userCv,'Desde Upload')
  const formData = new FormData()
  formData.append('files',resumen)
  formData.append('refId',userCv)
  formData.append('ref','cv')
  formData.append('field','resume')
 
 const uploadPdf = await fetch(`${publicRuntimeConfig.API_URL}/upload`, {
    method: 'POST',
    body: formData
  })
  const uploadPdfResponse = await uploadPdf.json()

  if(uploadPdf.ok){
    Swal.fire('Your avatar was stored correctly')
    Router.back()
  }
  if(!uploadPdf.ok){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href>Why do I have this issue?</a>'
    })
  }

  
}



return (
  <div>
    <HeaderJobs />
    <section className={styles.container1}>
      <h1>Upload PDF Resume</h1>
  <form>
  <input type="file" name="files" onChange={e=>(setResumen(e.target.files[0]))} defaultValue={resumen}
  accept="application/pdf"/>
  <input type="text" name="ref" defaultValue="cvs" hidden/>
  <input type="text" name="refId" defaultValue={userCv} hidden/>
  <input type="text" name="field" defaultValue="resume"hidden/>
  <input className={styles.submit} type="submit" value="Submit" onClick={e=>upload(e)} />
</form>
<br/>
       <Link href={'/'}>
        <a href="#">Cancel</a>
       </Link>
       <br/>
      <br/>
       <Link href={'/resume'}>
        <a href="#">Back</a>
       </Link>
       <br/>
       <br/>
</section>
    </div>
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
