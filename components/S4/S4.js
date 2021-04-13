import React from 'react'
import styles from '../S4/S4.module.css'

function S4() {
  return (
    <>
      <section className={styles.ourBenefits}>
        <div className={styles.benefitsTitle}>
          <h3 className={styles.h3}>Benefits That Matter</h3>
          <p className={styles.h3}>Some of our jobs may come with multiple benefits</p></div>
        <div className={styles.benefits}>
          < div className={
            styles.benefit1}>
            <img className={styles.img
            } src="/assets/media/home/health-icon.svg" alt="Medical Insurance icon" />
            <h3 className={styles.h3}>Medical Insurance</h3>
            < p className={
              styles.p}>Secure Health is a total benefits solution for its users: some employers may provide Administrative Services, Care Management, and healthy lifestyle.</p>
          </div>
          <div className={styles.benefit1}>
            < img className={
              styles.img
            } src="/assets/media/home/holiday-icon.svg" alt="Paid Holiday icon" />
            <h3 className={styles.h3}>Paid Holidays</h3>
            < p className={
              styles.p}>Offering paid time off to our employees often pays dividends for the employer in the form of the employees' physical and mental health, attitudes toward work, and productivity.</p>
          </div>
          <div className={styles.benefit1}>
            < img className={
              styles.img
            } src="/assets/media/home/trip-icon.svg" alt="Paid Vacation icon" />
            <h3 className={styles.h3}>Paid Vacation</h3>
            < p className={
              styles.p}>Is an important part of balancing a fulfilling work and personal life. By offering our employees PTO, we can show them how much we truly care about their well-being and the future of your business</p>
          </div>
          <div className={styles.benefit1}>
            < img className={
              styles.img
            } src="/assets/media/home/benefits-icon.svg" alt="Paid Vacation icon" />
            <h3 className={styles.h3}>Additional Perks</h3>
            < p className={
              styles.p}>These benefits can be varied depending on the employer but always thinking about the welfare of our employees</p>
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
