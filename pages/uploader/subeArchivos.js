import React,{useState} from 'react'
import axios, { post } from 'axios';
import HeaderJobs from '../../components/HeaderJobs/HeaderJobs'
import getConfig from 'next/config'
import { parseCookies  } from 'nookies'

const { publicRuntimeConfig } = getConfig()

export default function subeArchivos() {
  const [file, setFile] =useState()

  function onFormSubmit(e){
    e.preventDefault() // Stop form submit
    fileUpload(file).then((response)=>{
      console.log(response.data);
    })
  }

  function onChange(e) {
    setFile({file:e.target.files[0]})
  }
  const jwt = parseCookies().jwt
  if (!jwt || jwt==='undefined' || jwt === ''){Router.push('/login')}
  function fileUpload(file){
    const url = `${publicRuntimeConfig.API_URL}/cvs`
    const formData = new FormData();
    formData.append('avatar',file)
    formData.append('curriculum',1)
    const config = {
        headers: {
          'Authorization': `Bearer ${jwt}`,
            'content-type': 'multipart/form-data'
        }
    }
    return  post(url, formData,config)
  }


  return (
    <div>
      <HeaderJobs />
       <form onSubmit={onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={onChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  )
}
