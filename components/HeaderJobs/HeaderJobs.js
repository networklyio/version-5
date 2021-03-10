import React from 'react'
import styles from '../HeaderJobs/HeaderJobs.module.css'

function HeaderJobs() {
  return (
    <>
      <header className={styles.header, styles.jobHeader}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1 className={styles.h1}>The Right Job Is Waiting For You</h1>
            <p className={styles.p}>Find jobs, create trackable resumes and enrich your applications</p>
            
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderJobs
