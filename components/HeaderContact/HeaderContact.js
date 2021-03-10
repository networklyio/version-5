import React from 'react'
import styles from '../HeaderContact/HeaderContact.module.css'

function HeaderContact() {
  return (
    <>
      <header className={styles.jobHeader}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1 className={styles.h1}>Contact Us Today.</h1>
            <p className={styles.p}>We will be happy to assist you as soon as possible.</p>
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderContact
