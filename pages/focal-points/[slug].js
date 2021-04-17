import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router"
import styles from '../../components/HeaderJobs/Apply.module.css'

import HeaderLogin from '../../components/HeaderLogin/HeaderLogin'
import {security} from '../../constants/index'
import {videos} from '../../constants/iframe'




export default function Point({slug,video,iframe}) {
  console.log(video.pdf)
  const router = useRouter();

 
  return (
    <>
     <HeaderLogin/>
     <div className={styles.toto}>
           <span dangerouslySetInnerHTML={{__html: iframe.video}} />          
     <button className={styles.toto2} onClick={() => {router.push(video.pdf)}} >Download PDF {video.title}</button>
     </div>

     
    </>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.query
  const video = security.filter(s=>s.slug==slug)
  const iframe = videos.filter(s=>s.id==video[0].id)
  // const res = await fetch(`${publicRuntimeConfig.API_URL}/posts?slug=${slug}`)
  // const data = await res.json()

  return {
    props: {
      slug,
      video:video[0],
      iframe:iframe[0]
    }
  }
}

