import axios from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()


export const getAllStates = ()=>{
  return axios.get(`${publicRuntimeConfig.API_URL}/states`).then(response=>{
     const {data} = response
     return data
  })}

export const getState = (id)=>{
    return axios.get(`${publicRuntimeConfig.API_URL}/posts?state=${id}`).then(response=>{
       const {data} = response
       return data
    })}

    export const getStates = async ()=>{
      const resStates = await fetch(`${publicRuntimeConfig.API_URL}/states`)
      const dataStates = await resStates.json()
      return dataStates
    }
  