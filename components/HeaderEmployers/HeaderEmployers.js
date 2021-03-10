import React from 'react'
import styles from '../HeaderEmployers/HeaderEmployers.module.css'

function HeaderEmployers() {
  return (
    <>
      <header className={styles.jobHeader}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h1 className={styles.h1}>Make Your Workforce The Best It Can Be.</h1>
            <p className={styles.p}>Go beyond goals. Exceed expectations. Outrival rivals. You can do it all. But you need more than an employment agency. You need the world's best talent network.</p>
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderEmployers
