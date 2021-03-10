import React from 'react'
import styles from "../ContactUs/ContactUs.module.css"
import getConfig from 'next/config'
import { useState } from 'react'
import { parseCookies  } from 'nookies'
import {useForm} from 'react-hook-form'
import Router from 'next/router'
import Swal from 'sweetalert2'


const { publicRuntimeConfig } = getConfig()
// onClick={() => addMessage() }

function toPolicies(){
    Router.push('/policies')
}

export default function ContactUS({states}) {

    console.log(states,publicRuntimeConfig.API_URL)

    const {register, handleSubmit, errors} = useForm()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [job, setJob] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [email, setEmail] = useState('')    
    const [phone, setPhone] = useState('')    
    const [location, setLocation] = useState('')
    const [service, setService] = useState('')
    const [message, setMessage] = useState('')
    const [policy, setPolicy] = useState('')

    async function addMessage() {
        const jwt = parseCookies().jwt      
        const messageInfo = {
            First_Name: firstName,
            Last_Name: lastName,
            Job: job,
            Company: companyName,
            Email: email,
            Phone: phone,
            Location:location,
            service:service,
            Message:message,
            Active:true
        }      
        const add = await fetch(`${publicRuntimeConfig.API_URL}/messages`, {
            method: "POST",
            headers:
            {
                //    'Authorization': `Bearer ${jwt}`,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                
            },
            body: JSON.stringify(messageInfo)
        })
        const addResponse = await add.json()
        console.log(addResponse,messageInfo)
    }
    
    const onSubmit = (data) => {
         addMessage() 
         Swal.fire("Yor Message was sent");
         goToApply()
              
      };
     
      const  goToApply = ()=>{
        Router.push("/");
        
      }
  //console.log('errores',errors); 

return (
    <>

    <section className={styles.info}>
        <div className={styles.sectionText}>
            <h2>Don’t be a stranger, get in touch!</h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <p><span>*</span> Requiered fields</p>
                <div className={styles.separator2}>

                <div className={styles.primero}>
                <label htmlFor="firstName">First name <span className={styles.span}>*</span></label>
                <input className={styles.input} type="text" ref={register({required:true})}
                name="firstName" 
                onChange={e => setFirstName(e.target.value) }
                value={firstName} placeholder="Your name"/>
                <span className={styles.up}>
                {errors.firstName && <span> this field is required</span>}
                </span>
                </div>

                <div className={styles.left}>
                <label htmlFor="lastName">Last name <span className={styles.span}>*</span></label>
                <input className={styles.input} type="text" onChange={e => setLastName(e.target.value) } 
                value={lastName} 
                placeholder="Your last name" ref={register({required:true})}
                name="lastName"/>
                 </div>
                </div>
                
                <div className={styles.separator}>
                <div>
                <label htmlFor="email">Email address <span className={styles.span}>*</span></label>
                <input className={styles.input} type="text" onChange={e => setEmail(e.target.value) } 
                value={email} 
                placeholder="Email@sample.com"
                ref={register({required:true})}
                name="email"/>
                </div>
                <div className={styles.left}>
                <label htmlFor="company">Phone number <span className={styles.span}>*</span></label>
                <input className={styles.input} type="phone" 
                onChange={e => setPhone(e.target.value) } 
                value={phone} 
                placeholder="Type a valid phone number"
                ref={register({required:true})}
                name="phone"/>
                </div>
                </div>
                <div className={styles.separator}>
                <div>
                <label htmlFor="service">Service needed <span className={styles.span}>*</span></label>
                <select name="service" onChange={e => setService(e.target.value) } value={service} className={styles.select}>
                    
                    <option value="Service not selected" selected hidden>Select Service</option>
                    <option value="I Need Service">I Need Service</option>
                    <option value="I Need a Job">I'm Need a Job</option>
                    
                </select>
                </div>
                <div className={styles.left}>
               <label htmlFor="location" >Location <span className={styles.span}>*</span></label>
                <select name="location" onChange={e => setLocation(e.target.value) } value={location} className={styles.select}>
                {
                     states.map(state => <option value={state.name} key={state.id}>{state.name}</option>)
                 }
                   </select>
                </div>
                </div>
                <div className={styles.separator}>
                <div className={styles.text}>
                <label htmlFor="message">Message <span className={styles.span}>*</span></label>
                <textarea onChange={e => setMessage(e.target.value) } 
                value={message} rows="7" placeholder="Type your message" className={styles.MyTextArea}
                ref={register({required:true})} name="message"></textarea>
                </div>
                </div>
                <p>Policy privacy <span className={styles.span}>*</span></p>
                   <label htmlFor="policy" className={styles.policy}>
                      I agree with the 
                      <span className={styles.span} onClick={toPolicies}> terms of use</span>,
                       <span className={styles.span} onClick={toPolicies}> privacy policy</span>, and 
                       <span className={styles.span} onClick={toPolicies}> cookie policy</span> by sending my message.
                       </label>
                <div className={styles.btnSide, styles.up}>
                    <input type="submit"  className={styles.btn} value="send message"/>
            </div>
          </form>  
        </div>
        
    </section>
    </>
  )
}


