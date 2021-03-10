import {useState,useEffect} from 'react'
import useUser from '../../hooks/useUser'
import USER_STATES from '../../hooks/useUser'
import getConfig from 'next/config'
import Router from 'next/router'
import styles from '../Resume/Resume.module.css'
import {useForm} from 'react-hook-form'
import Swal from 'sweetalert2'


const { publicRuntimeConfig } = getConfig()

export default function Resume(candidate,data) {
 

    const {register, handleSubmit, errors} = useForm()
 
    const [name, setName] = useState('')
    const [email, setEmail] = useState('') 
    const [phone, setPhone] = useState()    
    const [password, setPassword] = useState()
    const [address, setAddress] = useState()
    const [about, setAbout] = useState()
    const [experience, setExperience] = useState()
    const [skills, setSkills] = useState()
    const [plus, setPlus] = useState()
    const [avatar, setAvatar] = useState()
    const [id,setId]=useState()
   
    useEffect(()=>{
      getProfile(candidate).then(d=>{
      //console.log(d[0].name)
      setName(d[0].name)
      setEmail(d[0].email)
      setAddress(d[0].address)
      setPhone(d[0].phone)
      setAbout(d[0].about)
      setExperience(d[0].exprience)
      setSkills(d[0].skills)
      setPlus(d[0].plus)
      setId(d[0].id)
    })
    },[])
    

    const onSubmit = (data) => {
     updateCandidate(data)
      goToApply()      
    }
   
    const  goToApply = ()=>{
      Router.push("/")
      }

      async function updateCandidate(data) {
        const candidateInfo = {
            name: name,
            email: email,
            phone: phone,
            address:address,
            about:about,
            experience:experience,
            plus:plus,
            skills:skills
        }

        const add = await fetch(`${publicRuntimeConfig.API_URL}/candidates/${id}`, {
          method: "PUT",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(candidateInfo)
        }) 

        const addResponse = await add.json()
      if(add.status !== 200){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href>Why do I have this issue?</a>'
        })
        return null

      }else{
        console.log('ADDRESPONSE',addResponse,'ADD',add)
        Swal.fire("Yor Resume is Ok");
      }
       
      }    
    
    
    
  return (
    <>
      
       <h1>Resumen curricular de {candidate.candidate.username}</h1>
       <form onSubmit={handleSubmit(onSubmit)}  enctype =  "multipart/form-data">
      

                <div>
                <label htmlFor="phone">Phone number <span className={styles.span}>*</span></label>
                <input type="phone" 
                onChange={e => setPhone(e.target.value) } 
                value={phone} 
                placeholder="Type a valid phone number"
                ref={register} name="phone" 
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
                ref={register} name="aboutMe"></textarea>
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
                    <input type="submit"  className={styles.btn} value="Buil my resume"/>
            </div>
       </form>
      
      
    </>
  )

  



}  

async function getProfile(candidate)
{
  console.log(candidate.candidate.email)
  const url = `${publicRuntimeConfig.API_URL}/candidates?email=${candidate.candidate.email}`
  const res = await fetch(url)
  const data = await res.json()
  return data
 }