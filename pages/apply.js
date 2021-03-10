import React,{useState,useEffect} from 'react'
import HeaderLogin from '../components/HeaderLogin/HeaderLogin'
import styles from '../components/HeaderJobs/Apply.module.css'
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { useRouter } from 'next/router'
import useUser, { USER_STATES } from "../hooks/useUser"
import Link from 'next/link'
import { parseCookies  } from 'nookies'
import getConfig from 'next/config'
import Swal from 'sweetalert2';
//import Router from 'next/router'




const { publicRuntimeConfig } = getConfig()


export default function ApplyMe() {

   const user = useUser()
   const router = useRouter();

  const [userName, setUserName] = useState()
  const [document, setDocument] = useState(null)
  const [userCv,setUserCv] = useState(null)
  const [userId,setUserId] = useState(null)
  const [userResumen, setUserResumen] = useState([])


  const jwt = parseCookies().jwt

  useEffect(()=>{
    const resultado = getMyData()
    resultado.then(r=>{
      console.log('curriculo', r)
      if(r.cv===null){createResume(r.id)}
      if(r.cv!==null & r.cv>0){
        setUserCv(r.cv)
        setUserId(r.id)
        setUserName(r.username)
        }
        const getResumen = getMyResume(r.cv)
        getResumen.then(res=>{
          console.log(res, 'desde promesa')
          setUserResumen(res)
        })
    })
  },[])
  
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
 
  
  return (
    <div>
      <HeaderLogin />
      <section className={styles.container}>
      <h2 className={styles.h2}>Legal Documents for Hiring</h2>
      <h3>Please download and fill out these forms and you send them by mail to start our employment relationship once you have been selected.</h3>
        <div className={styles.pdfs}>
      <a href="/assets/pdf/I-9 Form .pdf" target="_blank" download className={styles.pdf1}><PictureAsPdfIcon />Download Form I-9</a>
      
      <a href="/assets/pdf/w-4 Form.pdf" target="_blank" download className={styles.pdf1}><PictureAsPdfIcon/>Download Form W-4</a>
      </div>
        <h2>Watch the security videos is mandatory to be considered for the job</h2>
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
  <h2>Upload your resume or to create a resume click here</h2>

{/* {userResumen.avatar && <img className={styles.img} src={`${publicRuntimeConfig.API_URL}${userResumen.avatar.url}` } alt={userResumen.name} width="30px"/>} */}
<h3>{userResumen.name}</h3>
<p>phone {userResumen.phone}</p>
<p>address {userResumen.address}</p>
<p>about me {userResumen.about}</p>
<p>skills {userResumen.skills}</p>
<p>experience {userResumen.experience}</p>
<p>plus {userResumen.plus}</p>
{userResumen.resume &&  (<a className={styles.pdf1} href={`${publicRuntimeConfig.API_URL}${userResumen.resume.url}`} target="_blank" download><PictureAsPdfIcon />Download resume: {userResumen.name}</a>)
        }
        
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


</section>




 </div>
  )

  

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
 
  //console.log('Data Response', getDataResponse)
  return getDataResponse    
}

const createResume = async (id) =>{
  const jwt = parseCookies().jwt
  const addResume = await fetch(`${publicRuntimeConfig.API_URL}/cvs`, {
             method: "POST",
             headers: {
                 'Authorization': `Bearer ${jwt}`,
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





