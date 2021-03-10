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
          <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
          <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          <div className={styles.btnSide}>
            <button onClick={() => {router.push("/contact")}} className={styles.btnPage}>contact us</button>
          </div>
        </div >
        <div className={styles.sectionText}>
          < h2 className={
            styles.h2}>We care about the priorities of our clients</h2>
          <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <div className={styles.sectionText}>
          < h2 className={styles.h2}>Our areas of expertise</h2>
          <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
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