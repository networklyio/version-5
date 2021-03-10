import axios from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()


export const getAllCategories = ()=>{
  return axios.get(`${publicRuntimeConfig.API_URL}/categories`).then(response=>{
     const {data} = response
     return data
  })}