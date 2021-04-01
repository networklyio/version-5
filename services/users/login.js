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


export const fueVisto = async datos=>{
  const response = await axios.post(`${publicRuntimeConfig.API_URL}/statements`,datos)
  const data = response.data
  console.log(data,datos)
  return data 
}


