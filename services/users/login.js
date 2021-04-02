import axios from 'axios'
import getConfig from 'next/config'


const { publicRuntimeConfig } = getConfig();

const login = async credentials =>{
  const response = await axios.post(`${publicRuntimeConfig.API_URL}/auth/local`,credentials)
  const data = response.data
  console.log(data.user,credentials)
  return data
}

export default {login}


export const fueVisto = async (user,job)=>{
 // console.log(user,job)
 let resp = false
  const url =`${publicRuntimeConfig.API_URL}/statements?user=${user}&job=${job}`
  const response = await axios.get(url)
  const data = response.data
  console.log(data)
  return data  
 }

export const saveVideoSee =  async (user,job)=>{
  const url =`${publicRuntimeConfig.API_URL}/statements`
  const response = await axios.post(url,{user:user,job:job})
  const data = response.data
  //console.log(data)
  return data
}
  




