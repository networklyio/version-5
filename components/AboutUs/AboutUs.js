import React from 'react'
import styles from '../AboutUs/AboutUs.module.css'
import { useRouter } from "next/router"


function About() {
  const router = useRouter();
  return (
    <>
      <header className={styles.aboutUs}>
        <div className={styles.container}>
          <div className={styles.title, styles.aboutUsTitle}>
            <h1 className={styles.h1}>About Labor Staffers</h1>
          </div>
        </div>
      </header>
      <section className={styles.info}>
        <div className={styles.sectionText}>
          <h2 className={styles.h2}>More than 20 years helping companies</h2>
          <p className={styles.p}>For nearly 20 years job seekers across the country have trusted Labor Staffers’s expert recruiters to guide them through the hiring process and help them find the perfect job. Labor Staffers places talented professionals into administrative, light-industrial, superintendent, developers, and management level positions at some of the nation’s largest and most recognizable companies.</p>
          <div className={styles.btnSide}>
            <button onClick={() => {router.push("/services")}} className={styles.btnPage}>our services</button>
          </div>
        </div >
        <div className={styles.sectionText}>
          < h2 className={
            styles.h2}>Looking for your next great hire? We can help with that too</h2>
          <p className={styles.p}>We have experience and a selective selection process to choose the best candidates for your company, we know that it can be really expensive and requires a great investment of effort and time to get highly trained personnel for the vacancies available in your company, here at Labor Staffers we do it for you with the quality guarantee that we offer. If you are looking for short, medium or long-term employment relationships, you are in the right place.</p>
          <div className={styles.servicesList}>
            <ul className={styles.ul}>
              <li className={styles.li}>Full time jobs</li>
              <li className={styles.li}>Temporary staff</li>
              <li className={styles.li}>1st, 2nd, and 3rd Shift</li>
            </ul>
          </div >
          <div className={styles.btnSide}>
            < button onClick={() => {router.push("/employers")}} className={
              styles.btnPage}>request staff</button>
          </div>
        </div >
        <div className={styles.sectionText}>
          < h2 className={
            styles.h2}>Our values and beliefs help us find the perfect match</h2>
          <p className={styles.p}>The perfect match requires a great search, not everyone can hold a position in the same way. We believe that the right employee has to fit within a professional and personal profile.</p>
          <div className={styles.btnSide}>
            <button onClick={() => {router.push("/contact")}} className={styles.btnPage}>contact us</button>
          </div>
        </div >
        <div className={styles.sectionText}>
          < h2 className={
            styles.h2}>Security is Mandatory</h2>
          <p className={styles.p}>Safety has a high priority within Labor Staffers, all of our candidates and visitors can see more than 20 safety videos that indicate the best practices of operating certain work equipment and taking precautions in multiple circumstances.</p>
          <div className={styles.btnSide}>
            <button onClick={() => {router.push("/focal-points")}} className={styles.btnPage}>Focal Points</button>
          </div>
        </div >
        <div className={styles.sectionText}>
          < h2 className={
            styles.h2}>We care about the priorities of our clients</h2>
          <p className={styles.p}>We know the priorities of our clients, we care about them and we consider finding the best candidates, we provide the necessary tools to avoid work accidents and that our clients can have highly trained personnel willing to give their best.</p>
        </div>
        <div className={styles.sectionText}>
          < h2 className={styles.h2}>Our areas of expertise</h2>
          <p className={styles.p}>We offer different professional fields, from technology, support, engineering, sales, design to heavy duty personnel.</p>
        </div>
        <div className={styles.breaker}>
          < div className={styles.iconSection}>
            <div className={styles.icon}>
              <img className={styles.img} src="/assets/media/about-us/it-icon.svg" alt="digital / it icon" />
              <p className={styles.p}>digital / it</p>
            </div>
            <div className={styles.icon}>
              < img className={styles.img} src="/assets/media/about-us/sales-icon.svg" alt="sales icon" />
              <p className={styles.p}>sales</p>
            </div>
            <div className={styles.icon}>
              < img className={styles.img} src="/assets/media/about-us/support-icon.svg" alt="support icon" />
              <p className={styles.p}>support</p>
            </div>
            <div className={styles.icon}>
              < img className={styles.img} src="/assets/media/about-us/management-icon.svg" alt="management icon" />
              <p className={styles.p}>management</p>
            </div>
            <div className={styles.none}>
              < img className={styles.img} src="/assets/media/about-us/engineer-icon.svg" alt="engineer icon" />
              <p className={styles.p}>engineering</p>
            </div>
          </div>

             < div className={styles.iconSection2}>
            < div className={styles.icon}>
              <img className={styles.img} src="/assets/media/about-us/finance-icon.svg" alt="finance icon" />
              <p className={styles.p}>finance</p>
            </div>
            <div className={styles.icon}>
              < img className={styles.img} src="/assets/media/about-us/human-resources-icon.svg" alt="human resources icon" />
              <p className={styles.p}>human resources</p>
            </div>
            <div className={styles.icon}>
              < img className={styles.img} src="/assets/media/about-us/maintenance-icon.svg" alt="maintenance icon" />
              <p className={styles.p}>maintenance</p>
            </div>
            <div className={styles.icon}>
              < img className={styles.img} src="/assets/media/about-us/design-icon.svg" alt="design icon" />
              <p className={styles.p}>design</p>
            </div>
            <div className={styles.none}>
              < img className={styles.img} src="/assets/media/about-us/marketing-icon.svg" alt="marketing icon" />
              <p className={styles.p}>marketing</p>
            </div>
          </div >
        </div >
      </section >
      <section className={styles.started}>
        < div className={
          styles.startedText}>
          <h3 className={styles.h3}>Ready to get started?</h3>
          <p className={styles.p
          } > Find your next candidate with us</p >
          <button onClick={() => {router.push("/employers")}} className={styles.btnPage2}>request staff</button>
        </div >
      </section >
    </>
  )
}

export default About