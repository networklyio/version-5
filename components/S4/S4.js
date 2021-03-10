import React from 'react'
import styles from '../S4/S4.module.css'

function S4() {
  return (
    <>
      <section className={styles.ourBenefits}>
        <div className={styles.benefitsTitle}>
          <h3 className={styles.h3}>Benefits That Matter</h3>
          <p className={styles.p}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis blanditiis facere tempore.</p>
        </div>
        <div className={styles.benefits}>
          < div className={
            styles.benefit1}>
            <img className={styles.img
            } src="/assets/media/home/health-icon.svg" alt="Medical Insurance icon" />
            <h3 className={styles.h3}>Medical Insurance</h3>
            < p className={
              styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quasi non velit dolores temporibus quaerat amet.</p>
          </div>
          <div className={styles.benefit1}>
            < img className={
              styles.img
            } src="/assets/media/home/holiday-icon.svg" alt="Paid Holiday icon" />
            <h3 className={styles.h3}>Paid Holidays</h3>
            < p className={
              styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quasi non velit dolores temporibus quaerat amet.</p>
          </div>
          <div className={styles.benefit1}>
            < img className={
              styles.img
            } src="/assets/media/home/trip-icon.svg" alt="Paid Vacation icon" />
            <h3 className={styles.h3}>Paid Vacation</h3>
            < p className={
              styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quasi non velit dolores temporibus quaerat amet.</p>
          </div>
          <div className={styles.benefit1}>
            < img className={
              styles.img
            } src="/assets/media/home/benefits-icon.svg" alt="Paid Vacation icon" />
            <h3 className={styles.h3}>Additional Perks</h3>
            < p className={
              styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quasi non velit dolores temporibus quaerat amet.</p>
          </div>
        </div >
      </section >

      {/* slider? */}

      <section className={styles.questions}>
        < div className={
          styles.questionsH3}>
          <h3 className={styles.h3}>Got Questions?</h3>
          <p className={styles.p}>Say something in the chat below, send us an email or give us a call at 814 889 9125.</p>
        </div>
      </section >

    </>
  )
}

export default S4
