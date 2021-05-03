import React,{useState,useEffect,useContext} from 'react'
import HeaderLogin from '../components/HeaderLogin/HeaderLogin'
import styles from '../components/HeaderJobs/Apply.module.css'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf'
import {parseCookies, setCookie} from 'nookies'
import { useRouter } from 'next/router'
import getConfig from 'next/config'
import Swal from 'sweetalert2';
import axios from 'axios'
import {fueVisto,saveVideoSee} from '../services/users/login'
import CheckIcon from '@material-ui/icons/Check';
import Link from 'next/link'


import myData from '../helpers/helpMyData'

const { publicRuntimeConfig } = getConfig()

export default function Legal() {
  const router = useRouter()

  const [isViewed, setIsViewed] = useState('no')
  const [userResumen, setUserResumen] = useState([])
  const [document, setDocument] = useState(null)
  const [userCv,setUserCv] = useState(null)
  const [userId,setUserId] = useState(null)
  const [userName, setUserName] = useState('')


  
  const jwt = parseCookies().jwt
  const url = `${publicRuntimeConfig.API_URL}/users/me`
  const HeaderAuth = {
    'Authorization': `Bearer ${jwt}`,
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

   
// const {id,username,email,cv} = myData(jwt,url) 
 

  /* const getMyResume = (cv) =>{
    const urlCv = `${publicRuntimeConfig.API_URL}/cvs/${cv}`
    const getCV = async ()=>{
    const curriculum = await  axios.get(urlCv,{  method: "GET",
    headers: HeaderAuth})
    console.log(curriculum.data)}
    getCV(cv)
  }
 */
//    console.log(cv)
  /*   if(cv === null || cv == 'undefined'){
      Swal.fire({
        title: 'Personal information',
        text: "You do not have a registered CV, if you prefer to fill out a template with your data, click 'OK'",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: "No, i will upload my template!",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#0b8d45',
        confirmButtonText: 'OK, i will fill my template!'
      }).then((result) => {
        if (result.isDismissed) {
          console.log(result)
          Swal.fire(
            'Upload File',
            'I will upload a pdf file with my resume',
            'success'
          )
        }
        if (result.isConfirmed) {
          console.log(result)
          Swal.fire(
            'Fill Template',
            'I fill my resume',
            'success'
          ).then((result) => {
            console.log(result);
            if(result) {
             window.location = "/resume";
            }
          });
          
        }

      })
    }else{
           getMyResume(cv)  
    }
 */
async function getMyData() {
      const jwt = parseCookies().jwt
      const getData = await fetch(`${publicRuntimeConfig.API_URL}/users/me`, {
          method: "GET",
          headers: HeaderAuth
      })
      const getDataResponse = await getData.json()
      return getDataResponse    
    }
    
    
    
  
const upload = async (e)=>{
      e.preventDefault(); 
      console.clear()
      console.log(document,userCv,'Desde Upload document')
      const formData = new FormData()
      formData.append('files',document)
      formData.append('refId',userCv)
      formData.append('ref','cv')
      formData.append('field','document')
     const uploadPdf = await fetch(`${publicRuntimeConfig.API_URL}/upload`, {
        method: 'POST',
        body: formData
      })
      const uploadPdfResponse = await uploadPdf.json()
    
      if(uploadPdf.ok){
        Swal.fire('Your legal document was stored correctly')
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
     
    
    
  
  function viewed(e){
    e.preventDefault()
    console.log('Desde Viedwed')
    setIsViewed('yes');
    setCookie(null, 'isViewed', 'yes' , {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
  })

    Swal.fire(`Labor Staffers`, 'On behalf of Labor Staffers we thank you for watching the safety videos, that way we comply with the law with ourselves.', 'success')
    .then((result) => {
      console.log(result);
      if(result) {
     
      }
    });    

  }

  useEffect(()=>{
    const jwt = parseCookies().jwt
    const isView = parseCookies().isViewed
    if(isViewed){
      setIsViewed(isView) 
    }else{setIsViewed('no')
    setCookie(null, 'isViewed', 'no' , {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
  })}  

  const resultado = getMyData()
    resultado.then(r=>{
      if(r.cv===null){createResume(r.id)}
      if(r.cv!==null & r.cv>0){
        setUserCv(r.cv)
        setUserId(r.id)
        setUserName(r.username)
        }
        const getResumen = getMyResume(r.cv)
        getResumen.then(res=>{
        setUserResumen(res)
        })
    })

     

  },[isViewed])


  
  

  return (
    <>
    <HeaderLogin />
    <section className={styles.container}>
      <h2 className={styles.h2}>Legal Documents for Hiring</h2>
      <h3>Please download and fill out these forms and you send them by mail to start our employment relationship once you have been selected.</h3>
        <div className={styles.pdfs}>
      <a href="/assets/pdf/I-9 Form .pdf" target="_blank" download className={styles.pdf1}><PictureAsPdfIcon />Download Form I-9</a>
      
      <a href="/assets/pdf/w-4 Form.pdf" target="_blank" download className={styles.pdf1}><PictureAsPdfIcon/>Download Form W-4</a>


      <a href="/assets/pdf/MP-Timecard.pdf" target="_blank" download className={styles.pdf1}><PictureAsPdfIcon/>Download Timesheet</a>
      </div>
        <h2>Watch the security videos is mandatory to be considered for the job</h2>
        <h2>We highly recommend to watch our <a className={styles.aa} href="/focal-points">Focal Points</a> with all the security videos</h2>
        <div className={styles.videos}>
 <video width="320" height="240" controls className={styles.video1}>
  <source src={("/assets/media/jobs/video1.mp4")} type="video/mp4"/>
  Your browser does not support the video tag.
 
</video>
<video width="320" height="240" controls className={styles.left}>
  <source src={("/assets/media/jobs/video2.mp4")}  type="video/mp4"/>
  Your browser does not support the video tag.
</video>
</div>
{
 (isViewed=='yes' && 
<form>
  <h3>I declare that I watched the safety videos to be considered for the job <CheckIcon/></h3>
</form>)
}
{
  (isViewed=='no' && <form onSubmit={viewed}>
  <button>I declare that I saw the security videos</button>
</form>

 )
}

<Link href="/resume">
<a href="#">
<h2>create, update or upload a pdf file of your resume, click here</h2>
</a>
</Link>

<div>
<h3>{userResumen.name}</h3>
<p>phone {userResumen.phone}</p>
<p>address {userResumen.address}</p>
<p>about me {userResumen.about}</p>
<p>skills {userResumen.skills}</p>
<p>experience {userResumen.experience}</p>
<p>plus {userResumen.plus}</p>
{userResumen.resume &&  (<a className={styles.pdf1} href={`${publicRuntimeConfig.API_URL}${userResumen.resume.url}`} target="_blank" download><PictureAsPdfIcon />Download resume: {userResumen.name}</a>)
        }
</div>
<div>
<h1>Upload a PDF file with your I-94 or W-4 filled out</h1>
  <form className={styles.form}>
  <input className={styles.submit2} type="file" name="files" onChange={e=>(setDocument(e.target.files[0]))} defaultValue={document}
  accept="application/pdf" required/>
  <input className={styles.submit} type="text" name="ref" defaultValue="cvs" hidden/>
  <input className={styles.submit} type="text" name="refId" defaultValue={userCv} hidden/>
  <input className={styles.submit} type="text" name="field" defaultValue="document"hidden/>
  <input className={styles.submit} type="submit" value="Submit" onClick={(e)=>upload(e)} />
</form>
<br/>
</div>

</section>
    </>
  )
}


const createResume = async (id) =>{
  const jwt = parseCookies().jwt
  const addResume = await fetch(`${publicRuntimeConfig.API_URL}/cvs`, {
             method: "POST",
             headers: {
              'Authorization': `Bearer ${jwt}`,
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
             body: JSON.stringify({
             phone: 'N/A  ',
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

async function getMyResume(cv){
  //console.log('fecht',cv)
  const jwt = parseCookies().jwt
  const getResume = await fetch(`${publicRuntimeConfig.API_URL}/cvs/${cv}`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${jwt}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  })
  const getResumeResponse = await getResume.json()
  //console.log('resultado de fecht',getResumeResponse)
  return getResumeResponse
}


