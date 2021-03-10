import React from 'react'
import Link from 'next/link'
import styles from '../S1/S1.module.css'


export default function Tab3() {
  return (
    <>
       <div className={styles.professionalRecruiting3}>
          <div className={styles.pic}>
            <img className={styles.img} src="/assets/media/home/find-job.png" alt="Find a job" />
          </div>
          <div className={styles.sideText}>
            <h3 className={styles.h3}>Find Your Dream Job</h3>
            <p className={styles.p}>Praesent elementum posuere consequat. Nulla ac rutrum nunc. Morbi varius, nisi nec facilisis finibus, felis velit semper magna, non rhoncus eros eros nec risus. In vel nisi quis magna viverra blandit in quis felis. Nam nisl erat, auctor ut hendrerit in, mollis et ipsum. Nulla sit amet neque eleifend, dictum magna ac, accumsan diam. Ut consequat efficitur aliquet.</p>
            <div className={styles.btnSide}>
            <div  className={styles.btn}><Link href="/employers"><a href="#">request staff</a></Link></div>
            <div  className={styles.btn}><Link href="/about"><a href="#">give us a call</a></Link></div>
            </div>
          </div>
        </div > 
    </>
  )
}
