import React, {useState} from 'react'
import {useForm} from 'react-hook-form'
import getConfig from 'next/config'
import Router from 'next/router'
import swal from 'sweetalert2'
import styles from '../../components/Register/Regiter.module.css'
 
const { publicRuntimeConfig } = getConfig()

export default function Register() {

   const {register, handleSubmit, errors} = useForm()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('') 
    const [password, setPassword] = useState('')
    const [avatar, setAvatar] = useState({})
    const [resume, setResume] = useState()
    const [phone, setPhone] = useState('')    
    const [address, setAddress] = useState('')
    const [selectedFile, setSelectedFile] = useState();
	  
  const onSubmit = (data) => {
     //console.log(data,name,email,address)
    addCandidate(data)
     goToApply()      
   }
  
   const  goToApply = ()=>{
     Router.push("/")
     }

    

     async function addCandidate(data) {
      const candidateInfo = {
          name: name,
          email: email,
          password:password,
          phone: phone,
          address:address,
          resume:resume,
          avatar:avatar,
      }    

      const add = await fetch(`${publicRuntimeConfig.API_URL}/candidates`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(candidateInfo)
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
        console.log('ADDRESPONSE',addResponse,'ADD',add)
        swal.fire("Yor Resume is Ok");
      }
      
    return addResponse
    
  }

  const changeHandler = (event) => {
		
			}

  return (
    <div>
     
      <form onSubmit={handleSubmit(onSubmit)}  enctype =  "multipart/form-data">
                <p><span>*</span> Requiered fields</p>
                <div>
                <label htmlFor="name">Name <span className={styles.span}>*</span></label>
                <input className={styles.input} type="text" ref={register({required:true})} name="name" 
                onChange={e => setName(e.target.value) }
                value={name} placeholder="Your name"/>
                <span className={styles.up}>
                {errors.name && <span> this field is required</span>}
                </span>
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
                <label htmlFor="password">password <span className={styles.span}>*</span></label>
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
                <input type="file" name="file" onChange={changeHandler} />
                </div>
               
                
              
                <div className={styles.btnSide, styles.up}>
                    <input type="submit"  className={styles.btn} value="Buil my resume"/>
            </div>
          </form> 
   
    </div>
  )
}


