import React from 'react'
import Link from 'next/link'
import styles from '../Services/Services.module.css'

function Services() {
  return (
    <>
      <header className={styles.aboutUs}>
        <div className={styles.container}>
          <div className={styles.aboutUsTitle}>
            <h1 className={styles.h1}>We Support You and Advice You On Staffing Solutions</h1>
            <p>Quality and efficiency have been key to our strategy since we started.</p>
          </div>
        </div>
      </header>
      <section className={styles.info}>
        <div className={styles.sectionText}>
          <h2 className={styles.h2}>Here at Labor Staffers We Offer:</h2>
          <p className={styles.p}>Whether you’re looking for warehouse workers, a little extra help around the office, a nurse to cover a few shifts, or a management level professional, Labor Staffers can recruit the talent you need to keep your business growing. Labor Staffers is able to provide the best temporary, temp-to-hire, and direct hire employees for businesses of all sizes, from coast to coast.</p></div>
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>Temporary</h2>
          <p className={styles.p}>A temporary employee who demonstrates a good work ethic, fits the company culture, learns quickly, regularly lends a helping hand, and doesn't need a manager to tell them what to do next, may receive an offer of employment. This is a win for both the employer and the temporary employee.</p>
        </div >
        <div className={styles.sectionText}>
          < h2 className={
            styles.h2}>Direct Hire</h2>
          <p className={styles.p}>Direct hires are among the most desirable types of positions. That’s because you’ll be working directly for your employer in a full-time permanent capacity with employee benefits. These benefits may include health insurance, paid leave, investment and retirement options, and wellness benefits.</p>
        </div >
        <div className={styles.sectionText}>
          < h2 className={
            styles.h2}>Temp-to-hire</h2>
          <p className={styles.p}>Temp-to-hire recruitment is great for when you find a potential employee who made a wonderful first impression, but does not have a lot of experience.

          Temp-to-hire placement let you see a potential employee's performance without making a commitment and spending time and money headhunting. </p>

           <p className={styles.p}>Using a temporary employee can be a great idea if you have a short-term need to fill or do not currently have the resources for a new hire.</p>
        </div>
        <div className={styles.sectionText}>
          < h2 className={
            styles.h2}>On-Site</h2>
          <p className={styles.p}>Get a dedicated Labor Syaffers coordinator to source, train, and deploy temporary staff, streamline administration, and ensure productivity.</p>
        </div>
        <div className={styles.sectionText}>
          < h2 className={
            styles.h2}>Payrolling</h2>
          <p className={styles.p}>Transfer temporary employees you recruit onto our payroll. We’ll handle pay, withholding, and reporting, saving you administrative hassles and expense.</p>
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
          <p className={styles.p}> Find your next candidate with us</p >
              <div className={styles.btnPage2}> <Link href="/employers"><a href="#">request staff</a></Link></div>
        </div >
      </section >
    </>
  )
}

export default Services