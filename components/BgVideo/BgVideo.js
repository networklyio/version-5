import React from 'react'
import { useRouter } from "next/router"
import styles from '../BgVideo/BgVideo.module.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from 'next/link'


function BgVideo() {

  const router = useRouter();
  return (
    <>
      <video
        muted
        autoPlay
        loop
        playsInline
        className={styles.bgVideo}
        id={styles.myvideo}
        width="100%"
        height="auto"
        poster="/assets/media/home/pre-video.jpg"
      >
        <source
          src="/assets/media/home/video-bg.mp4"
          type="video/mp4"
          autoPlay
          loop
        />
        <source
          src="/assets/media/home/video-bg-move.mov"
          type="video/mp4"
          autoPlay
          loop
        />
        <source
          src="/assets/media/home/video-bg-webm.webm"
          type="video/mp4"
          autoPlay
          loop
        />
      </video>

      <header className={styles.header}>
        <div className={styles.arrow}>
          <a href="#recruiting">
            <i className="fas fa-chevron-down"></i>
          </a>
        </div>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1 className={styles.h1}>The Easiest Way to Get Your New Job</h1>
            <p className={styles.p}>
              Find jobs, create trackable resumes and enrich your applications
            </p>
            <div className={styles.flex}>
            <div className={styles.btnJobs}><Link href="/jobs"><a href="#" className={styles.btn}>find jobs</a></Link></div>
              <div className={styles.btnStaff}><Link href="/employers"><a href="#">request staff</a></Link></div>
            </div>
         </div>
        </div>
        <div className={styles.arrow}><ExpandMoreIcon fontSize="large"/></div>
      </header>

    </>
  )
}

export default BgVideo
