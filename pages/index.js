import getConfig from 'next/config'
import BgVideo from '../components/BgVideo/BgVideo'
import S1 from '../components/S1/S1'
import S2 from '../components/S2/S2'
import S3 from '../components/S3/S3'
import S4 from '../components/S4/S4'
import S5 from '../components/S5/S5'





const { publicRuntimeConfig } = getConfig()

export default function Home({ jobs }) {
  return (
   <div>
     <BgVideo />
     <S1 />
     <S2 />
     <S3 jobs={jobs} />
     <S5 />
     <S4 />
   </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/posts`)
  const jobs = await res.json()
  return {
    props: {
      jobs
    }, // will be passed to the page component as props
    
  }
}
