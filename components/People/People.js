import React from 'react'
import styles from "../People/People.module.css"
import getConfig from 'next/config'
import { useState, useEffect } from 'react'
import { parseCookies  } from 'nookies'
import {useForm} from 'react-hook-form'
import Router from 'next/router'
import swal from 'sweetalert2'
import useUser from '../../hooks/useUser'
import useLogeado from '../../hooks/useLogeado'

import { useRouter } from "next/router"
import Button from '../Button/index'
import {logoutGoogle} from '../../firebase/client'

const { publicRuntimeConfig } = getConfig()


export default function People() {

   const {register, handleSubmit, errors} = useForm()
  const user = useUser()
  const router = useRouter()
  const logeado = useLogeado()

    console.log(logeado)

    const [firstName, setFirstName] = useState('cc')
    const [lastName, setLastName] = useState('Last Name')
    const [email, setEmail] = useState('edwinhenriquezh@hm.com')    
    const [phone, setPhone] = useState('78899')    
    const [password, setPassword] = useState('password')
    const [address, setAddress] = useState('address')
    const [aboutMe, setAboutMe] = useState('aboutMe')
    const [experience, setExperience] = useState('experience')
    const [skills, setSkills] = useState('skills')
    const [plus, setPlus] = useState('plus')
    const [name, setName] = useState()
    const [avatar, setAvatar] = useState()
   

    async function addPeople() {
        const jwt = parseCookies().jwt      
        const peopleInfo = {
            First_Name: firstName,
            Last_Name: lastName,
            Email: email,
            Password:password,
            Phone: phone,
            Address:address,
            About_Me:aboutMe,
            Experience:experience,
            Skills:skills,
            Plus:plus
           
        }      
        const add = await fetch(`${publicRuntimeConfig.API_URL}/people`, {
            method: "POST",
            headers:
            {
                //    'Authorization': `Bearer ${jwt}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                
            },
            body: JSON.stringify(peopleInfo)
        })
        const addResponse = await add.json()
        if(add.status !== 200){
          swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href>Why do I have this issue?</a>'
          })
          return null

        }else{
          swal.fire("Yor Resume is Ok");
        }
        

      return addResponse
        //console.log(addResponse,peopleInfo)
    }
    
    const onSubmit = (data) => {
         if(addPeople())
         goToApply()
              
      };
     
      const  goToApply = ()=>{
        Router.push("/");
        
      }

      const logout =()=>{
        logoutGoogle()
      } 


  return (
    <>
  {
              user && user.avatar && <div>
                <img src={user.avatar} />
                <strong>{user.username}</strong>
                <Button onClick={logout}>Logout</Button>
            

              <form onSubmit={handleSubmit(onSubmit)}>
                <p><span>*</span> Requiered fields</p>
               

                <div>
                <label htmlFor="firstName">First name <span className={styles.span}>*</span></label>
                <input 
                type="text"
                ref={register({required:true})}
                name="firstName" 
                onChange={e => setFirstName(e.target.value) }
                value={firstName} placeholder="Your name"/>
                <span className={styles.up}>
                {errors.firstName && <span> this field is required</span>}
                </span>
                </div>

                <div>
                <label htmlFor="lastName">Last name <span className={styles.span}>*</span></label>
                <input type="text" onChange={e => setLastName(e.target.value) } 
                value={lastName} 
                placeholder="Your last name"
                ref={register({required:true})}
                name="lastName" 
                />
                 </div>
              
                <div>
                <label htmlFor="email">Email address <span className={styles.span}>*</span></label>
                <input type="text" onChange={e => setEmail(e.target.value) } 
                value={email} 
                placeholder="Email@sample.com"
                ref={register({required:true})}
                name="email" 
                />
                </div>

                <div>
                <label htmlFor="password">password address <span className={styles.span}>*</span></label>
                <input type="text" onChange={e => setPassword(e.target.value) } 
                value={password} 
                placeholder="password@sample.com"
                ref={register({required:true})}
                name="password" 
                />
                </div>

                <div>
                <label htmlFor="phone">Phone number <span className={styles.span}>*</span></label>
                <input type="phone" 
                onChange={e => setPhone(e.target.value) } 
                value={phone} 
                placeholder="Type a valid phone number"
                ref={register({required:true})}
                name="phone" 
                />
                </div>
              
                
                <div>
                <label htmlFor="address">My Address <span className={styles.span}>*</span></label>
                <textarea onChange={e => setAddress(e.target.value) } 
                value={address} rows="7" placeholder="Type your address" className={styles.MyTextArea}
                ref={register({required:true})} name="address"></textarea>
                </div>
               
               
                <div>
                <label htmlFor="aboutMe">About me <span className={styles.span}>*</span></label>
                <textarea onChange={e => setAboutMe(e.target.value) } 
                value={aboutMe} rows="7" placeholder="Type your aboutMe" className={styles.MyTextArea}
                ref={register({required:true})} name="aboutMe"></textarea>
                </div>

                <div>
                <label htmlFor="skills">My Skills <span className={styles.span}>*</span></label>
                <textarea onChange={e => setSkills(e.target.value) } 
                value={skills} rows="7" placeholder="Type your skills" className={styles.MyTextArea}
                ref={register({required:true})} name="skills"></textarea>
                </div>

                <div>
                <label htmlFor="experience">My Experience <span className={styles.span}>*</span></label>
                <textarea onChange={e => setExperience(e.target.value) } 
                value={experience} rows="7" placeholder="Type your experience" className={styles.MyTextArea}
                ref={register({required:true})} name="experience"></textarea>
                </div>

                <div>
                <label htmlFor="plus">Other plus <span className={styles.span}>*</span></label>
                <textarea onChange={e => setplus(e.target.value) } 
                value={plus} rows="7" placeholder="Type your plus" className={styles.MyTextArea}
                ref={register({required:true})} name="plus"></textarea>
                </div>
               
                
              
                <div className={styles.btnSide, styles.up}>
                    <input type="submit"  className={styles.btn} value="Buil my resume"/>
            </div>
          </form> 
          </div>}

       
    </>
  )
}
