import React from 'react'
import Link from 'next/link'
import styles from '../S1/S1.module.css'

export default function Tab1() {
  return (
    <>
    <div className={styles.professionalRecruiting}>
          <div className={styles.pic}>
            <img className={styles.img} src="/assets/media/home/recruiting.png" alt="People Recruiting" />
          </div>
          <div className={styles.sideText}>
            <h3 className={styles.h3}>Professional Recruiting</h3>
            <p className={styles.p}>Whether you're looking for temporary help around the office or to staff an entire production facility, Labor Staffers has you covered. We can help you control costs, manage risk, eliminate administrative hassles, and increase productivity by growing your team with only the very best talent. We provide our clients with world-class recruiting and hiring services to help fill important needs at your company.</p>
            <div className={styles.btnSide}>
            <div  className={styles.btn}><Link href="/employers"><a href="#">request staff</a></Link></div>
            <div  className={styles.btn}><Link href="/about"><a href="#">give us a call</a></Link></div>
            </div>
          </div>
        </div >  
    </>
  )
}
