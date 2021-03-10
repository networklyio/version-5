import axios from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()


export const getCategoryState = (idCategory, idState)=>{
  return axios.get(`${publicRuntimeConfig.API_URL}/posts?category=${idCategory}&state=${idState}`)
              .then(response=>{
              const {data} = response
              
     console.log('Estados y cata', data, 'id categoria',idCategory,'id stade ', idState)
     return data
  })}