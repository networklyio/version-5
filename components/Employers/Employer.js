import React from 'react'
import styles from "../Employers/Employers.module.css"
import getConfig from 'next/config'
import { useState } from 'react'
import { parseCookies  } from 'nookies'
import {useForm} from 'react-hook-form'
import Router from 'next/router'
import Swal from 'sweetalert2'


const { publicRuntimeConfig } = getConfig()
// onClick={() => addMessage() }

export default function Employer({states}) {

   // console.log(states,publicRuntimeConfig.API_URL)

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
         Swal.fire("Yor Message is Ok");
         goToApply()
              
      };
     
      const  goToApply = ()=>{
        Router.push("/");
        
      }
  //console.log('errores',errors); 
function toPolicies(){
   
    Router.push('/policies')
}

return (
    <>
    <div>
    <section className={styles.info}>
        <div className={styles.sectionText}>
            <h2>Let’s talk about the employees you need.</h2>
            <p>How many do you need? What do you need them to do? When do you need them? Whether it's temporary or permanent employees, 5 people or 100, we’ll come up with a plan—a plan just for you—that makes sense for your budget and can be scaled up or down at any point. Then we’ll dive into our enormous candidate database to get you some great people right away.</p>
        </div>
        <div className={styles.sectionText}>
            <h2>Employers, get in touch!</h2>
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
                <label htmlFor="job">Job title <span className={styles.span}>*</span></label>
                <input className={styles.input} type="text" onChange={e => setJob(e.target.value) } 
                value={job} placeholder="Type job title" ref={register({required:true})}
                name="job"/>
                </div>
                <div className={styles.left}>
                <label htmlFor="company">Company name <span className={styles.span}>*</span></label>
                <input className={styles.input} type="text" onChange={e => setCompanyName(e.target.value) } 
                value={companyName} 
                placeholder="Company's name"
                ref={register({required:true})}
                name="company" />
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
                    <option value="Temporary serviceing">Temporary serviceing</option>  
                    <option value="Temp-to-hire">Temp-to-hire</option>
                    <option value="Direct hire">Direct hire</option>
                    <option value="On-Site">On-Site</option>
                    <option value="Payrolling">Payrolling</option>
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
                   <label htmlFor="policy" className={styles.policy} onClick={toPolicies}>
                      I agree with the 
                      <span className={styles.span}  onClick={toPolicies}> terms of use</span>,
                       <span className={styles.span} onClick={toPolicies}> privacy policy</span>, and 
                       <span className={styles.span} onClick={toPolicies}> cookie policy</span> by sending my message.
                       </label>
                <div className={styles.btnSide, styles.up}>
                    <input type="submit"  className={styles.btn} value="send message"/>
            </div>
          </form>  
        </div>
        <div className={styles.sectionText}>
        <h2>How can we help you?</h2>
    </div>
    <div className={styles.servicesSection}>
        <div className={styles.servicesIcon}>
            <img src="/assets/media/candidate-icon.svg" alt="candidate icon"/>
            <h3>Great Candidates</h3>
            <p>Labor Serviceers provides its clients with world-class recruiting and hiring services - to help fill important needs at your company.</p>
        </div>
        <div className={styles.servicesIcon}>
            <img src="/assets/media/services-icon.svg" alt="services icon"/>
            <h3>Serviceing Services</h3>
            <p>Everything from temporary, On-Site, temp-to-hire and permanent solutions to payrolling services.</p>
        </div>
        <div className={styles.servicesIcon}>
            <img src="/assets/media/search-icon.svg" alt="seach icon"/>
            <h3>Partnership Solutions</h3>
            <p>Let’s look at the big picture and see how we can make your workforce more productive.</p>
        </div>
    </div>
    </section>
    </div>
    </>
  )
}


