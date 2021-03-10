import React from 'react'
import styles from "../Employers/Employers.module.css"
import getConfig from 'next/config'
import { useState } from 'react'
import { parseCookies  } from 'nookies'
import {useForm} from 'react-hook-form'
import Link from 'next/link'

const { publicRuntimeConfig } = getConfig()
// onClick={() => addMessage() }

export default function Contact({states}) {

    console.log(states,publicRuntimeConfig.API_URL)

    const {register, handleSubmit, errors} = useForm()

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [job, setJob] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [email, setEmail] = useState('')    
    const [phone, setPhone] = useState('')    
    const [location, setLocation] = useState('')
    const [service, setStaff] = useState('')
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
      };
     
  //console.log('errores',errors); 
  function toPolicies(){
    Router.push('/policies')
}

return (
    <>
    <div>
    <section className={styles.info}>
    <header className={styles.header, styles.contactus-header}>
        <div className={styles.container}>
            <div className={styles.title}>
            <h1>Contact Us Today.</h1>
            <p>We will be happy to assist you as soon as possible.</p>
    </div></div>
    </header>
        <div className={styles.sectionText,styles.up}>
        <h2>Don’t be a stranger, get in touch!</h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <p><span>*</span> Requiered fields</p>
                <div className={styles.separator, styles.martop}>
                <div>
                <label for="labor">Are you hiring or applying? <span>*</span></label>
                <select name="labor"  onChange={e=>setLabor(e.target.value)}>
                    <option hidden="" disabled="" value={e=>e.target.value} >Select from the list</option>
                    <option value={"I Need Staffing Services"}>I Need Staffing Services</option>
                    <option value={"I want  to apply for a job"}>I want  to apply for a job</option>
                </select>
                </div>
                <div className={styles.left}>
               <label for="service">What shift are you looking for? <span>*</span></label>
                <select name="service" onChange={e=>setService(e.target.value)}>
                    <option hidden="" disabled="" defaultValue="">Select from the list</option>
                    <option value={"1st Shift"}>1st Shift</option>
                    <option value={"2nd Shift"}>2nd Shift</option>
                    <option value={"3rd Shift"}>3rd Shift</option>
                    <option value={"Any Shift Available"}>Any Shift Available</option>
                </select>
                </div>
                </div>
                <div className={styles.separator, styles.martop}>
                <div>
                <label htmlFor="firstName">First name <span>*</span></label>
                <input
                type="text"
                ref={register({required:true})}
                name="firstName" 
                onChange={e => setFirstName(e.target.value) }
                value={firstName} placeholder="Your name"
                />
                <span className="styles.up">
                {errors.firstName && <span> this field is required</span>}
                </span>
                </div>
                <div className="left">
                <label htmlFor="lastName">Last name <span>*</span></label>
                <input type="text"
                onChange={e => setLastName(e.target.value) } 
                value={lastName} 
                placeholder="Your last name"
                ref={register({required:true})}
                name="lastName" 
                />
                 </div>
                </div>

                <div className={styles.separator}>
                <div>
                <label htmlFor="job">Job title <span>*</span></label>
                <input type="text" 
                onChange={e => setJob(e.target.value) } 
                value={job} 
                placeholder="Type job title"
                ref={register({required:true})}
                name="job" 
                />
                </div>
                <div className="left">
                <label htmlFor="company">Company name <span>*</span></label>
                <input type="text" 
                onChange={e => setCompanyName(e.target.value) } 
                value={companyName} 
                placeholder="Company's name"
                ref={register({required:true})}
                name="company" 
                />
                </div>
                </div>
                <div className={styles.separator}>
                <div>
                <label htmlFor="email">Email address <span>*</span></label>
                <input type="text" 
                onChange={e => setEmail(e.target.value) } 
                value={email} 
                placeholder="Email@sample.com"
                ref={register({required:true})}
                name="email" 
                />
                </div>
                <div className="left">
                <label htmlFor="company">Phone number <span>*</span></label>
                <input type="phone" 
                onChange={e => setPhone(e.target.value) } 
                value={phone} 
                placeholder="Type a valid phone number"
                ref={register({required:true})}
                name="phone" 
                />
                </div>
                </div>
                <div className={styles.separator}>
                <div>
                <label htmlFor="staff">Service needed <span>*</span></label>
                <select name="staff" onChange={e => setStaff(e.target.value) } value={service} className={styles.select}>
                    <option value="Temporary staffing">Temporary staffing</option>
                    <option value="Temp-to-hire">Temp-to-hire</option>
                    <option value="Direct hire">Direct hire</option>
                    <option value="On-Site">On-Site</option>
                    <option value="Payrolling">Payrolling</option>
                </select>
                </div>
                <div className="left">
               <label htmlFor="location" >Location <span>*</span></label>
                <select name="location" onChange={e => setLocation(e.target.value) } value={location} className={styles.select}>
                {
                     states.map(state => <option value={state.name} key={state.id}>{state.name}</option>)
                 }
                   </select>
                </div>
                </div>
                <div className={styles.separator}>
                <div>
                <label htmlFor="message">Message <span>*</span></label>
                <textarea 
                onChange={e => setMessage(e.target.value) } 
                value={message} rows="7" 
                placeholder="Type your message"
                className={styles.MyTextArea}
                ref={register({required:true})}
                name="message" 
                ></textarea>
                </div>
                </div>
                <p>Policy privacy <span>*</span></p>
               <input 
               onChange={e => setPolicy(e.target.value) } value={policy}
                type="checkbox" id="policy"
                 name="policy"
                 value={policy} className={styles.check}
                 />
                 
                   <label htmlFor="policy" className={styles.policy}  onClick={toPolicies}>
                      I have read and agree with the 
                       <span   className={styles.span} onClick={toPolicies}>terms of use</span>,
                       <span   className={styles.span} onClick={toPolicies}>privacy policy</span>, and 
                       <span   className={styles.span} onClick={toPolicies}>cookie policy</span>.
                     </label> 

                  <div className={styles.btnSide, styles.up}>
                    <input type="submit"  className={styles.btn, styles.btnPage} value="send message"/>
            </div>
          </form>  
        </div>
        <div className={styles.sectionText,styles.margin}>
        <h2>How can we help you?</h2>
    </div>
    <div className="servicesSection">
        <div className="servicesIcon">
            <img src="/assets/media/candidate-icon.svg" alt="candidate icon"/>
            <h3>Great Candidates</h3>
            <p>Labor Staffers provides its clients with world-class recruiting and hiring services - to help fill important needs at your company.</p>
        </div>
        <div className={styles.servicesIcon}>
            <img src="/assets/media/services-icon.svg" alt="services icon"/>
            <h3>Staffing Services</h3>
            <p>Everything from temporary, On-Site, temp-to-hire and permanent solutions to payrolling services.</p>
        </div>
        <div className="servicesIcon">
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


