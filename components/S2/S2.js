import React from 'react'
import styles from '../S2/S2.module.css'
import Link  from 'next/link';



function S2() {
 
 
  return (
    <>
      <section className={styles.section}>
        <div className={styles.sectionText}>
          <h3 className={styles.h3}>Looking for a new job and don’t have a resume?</h3>
          <p className={styles.p}>The best opportunities are never around for long, and sometimes you just need a new resume, fast. Our automated resume builder can make you a polished and professional document in seconds. If you already have a resume just click apply now below.</p>
          <div className={styles.btnSide}>
            <div  className={styles.btn}><Link href="/resume"><a href="#">build resume</a></Link></div>
            <div  className={styles.btn}><Link href="/jobs"><a href="#">apply for a job</a></Link></div>

          </div>
        </div>
      </section>

    </>
  )
}

export default S2
