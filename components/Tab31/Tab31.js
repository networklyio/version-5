import React from 'react'
import Link from 'next/link'
import styles from "../Candidates/Candidates.module.css"

export default function Tab31() {
  return (
    <>
              <section className={styles.tabThree}>
        <div className={styles.whole}>
        <div className={styles.candidatesSection}>
            <div className={styles.picCandidates}>
                <img src="/assets/media/cv-mistakes.jpg" alt="CV Mistakes"/>
            </div>
            <div className={styles.sideText, styles.picCandidates}>
                <h3 className={styles.h3}>6 common CV mistakes to avoid</h3>
                <p className={styles.down}>Many skilled candidates miss out on career opportunities because of minor mistakes they have made when writing CVs. Keep in mind, that:</p>
                <p className={styles.down}>your CV provides the first impression for prospective employers there is only a 17% chance that your cover letter will be read Knowing this, it is vital that, when writing yours, you get it right. If your resume contains several common mistakes, you will have less success in being shortlisted by recruiters for interviews.</p>
                <div className={styles.btnPage}>
                    <a href="/cv-mistakes">read more</a>
                </div>
            </div>
        </div>
        <div className={styles.candidatesSection, styles.two}>
            <div className={styles.picCandidates}>
                <img src="/assets/media/resume.jpg" alt="My resume"/>
            </div>
            <div className={styles.sideText, styles.picCandidates}>
                <h3 className={styles.h3}>How do you write a winning CV?</h3>
                <p className={styles.down}>Your CV is a personal marketing document used to sell yourself to prospective employers who have never met you.Consider yourself as the product and your CV as the advertisement. The goal of writing a winning CV is to stand out from the crowd and catch the eye of your potential employers.</p>
                <p className={styles.down}>At a glance, the recruiter or the manager should be able to understand the...</p>
                <div className={styles.btnPage2}>
                    <a href="/write-a-winning-cv">read more</a>
                </div>
            </div>
        </div>
        <div className={styles.candidatesSection}>
            <div className={styles.picCandidates}>
                <img src="/assets/media/success.jpg" alt="Success CV"/>
            </div>
            <div className={styles.sideText, styles.picCandidates}>
                <h3 className={styles.h3}>10 Steps to a successful CV</h3>
                <p className={styles.down}>Writing a good CV can be one of the toughest challenges of job hunting. Most employers spend just a few seconds scanning each CV before sticking it in the 'Yes' or 'No' pile. Here are the top 10 tips for writing a CV that'll secure the all-important interview.</p>
                <p className={styles.down}>1. Keep it real! Usually a CV should be no more than two pages...</p>
                <div className={styles.btnPage}>
                    <a href="/successfull-cv">read more</a>
                </div>
            </div>
        </div>
                  </div>
                  </section>
  
    </>
  )
}
