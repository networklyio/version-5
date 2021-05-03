import useSWR from 'swr'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const myCv = (jwt,url)=>{
  const fetcher = (...args) => fetch(url, {
    method: "GET",
    headers: {
        'Authorization': `Bearer ${jwt}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  }).then(res => res.json())

  const { data, error, isLoading } = useSWR(url, fetcher)
  
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  const {id,username,email,cv} = data
  return {
   data
  }  
}

export default myCv