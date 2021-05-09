import getConfig from 'next/config'
import BgVideo from '../components/BgVideo/BgVideo'
import S1 from '../components/S1/S1'
import S2 from '../components/S2/S2'
import S3 from '../components/S3/S3'
import S4 from '../components/S4/S4'
import S5 from '../components/S5/S5'





const { publicRuntimeConfig } = getConfig()

export default function Home({ jobs,numJobs }) {
  //console.log(jobs,'desde index')
  return (
   <div>
     <BgVideo />
     <S1 />
     <S2 />
     <S3 jobs={jobs} numJobs={numJobs} />
     <S5 />
     <S4 />
   </div>
  )
}

export async function getServerSideProps() {

  const resJobs = await fetch(`${publicRuntimeConfig.API_URL}/posts/count`)
  const numJobs = await resJobs.json()
  const res = await fetch(`${publicRuntimeConfig.API_URL}/posts?_sort=id:DESC&_limit=10`)
  const jobs = await res.json()
  return {
    props: {
      jobs,
      numJobs
    }, // will be passed to the page component as props
    
  }
}
