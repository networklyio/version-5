import axios from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()


export const getAllJobs = ()=>{
  return axios.get(`${publicRuntimeConfig.API_URL}/posts`).then(response=>{
     const {data} = response
     return data
  })}

export const getJob = (id)=>{
    return axios.get(`${publicRuntimeConfig.API_URL}/posts/${id}`).then(response=>{
       const {data} = response
       return data
    })}

    export const getJobsByCategory = (categoryId)=>{
      return axios.get(`${publicRuntimeConfig.API_URL}/posts?category.id=${categoryId}`).then(response=>{
         const {data} = response
         return data
      })}

      export const getJobsByState = (stateId)=>{
        return axios.get(`${publicRuntimeConfig.API_URL}/posts?state.id=${stateId}`).then(response=>{
           const {data} = response
           return data
        })}
      
    
    export const getJobsByCategoryAndState = (categoryId,stateId)=>{
        return axios.get(`${publicRuntimeConfig.API_URL}/posts?category.id=${categoryId}&state=${stateId}`).then(response=>{
           const {data} = response
           return data
        })}


    //${publicRuntimeConfig.API_URL}/posts?_limit=3&_start=${start} 
   

    export const getAllJobsPerPage = (page)=>{
     const limit = 3
     const start = +page == 1 ? 0 : (+page-1) * limit 
     //console.log(page,start, 'pagina,start') 
      return axios.get(`${publicRuntimeConfig.API_URL}/posts?_limit=${limit}&_start=${start}`).then(response=>{
         const {data} = response
         return data
      })}

   export const countJobs = async ()=>{
      const resJobs = await fetch(`${publicRuntimeConfig.API_URL}/posts/count`)
      const numJobs = await resJobs.json()
      return numJobs
   }
    

