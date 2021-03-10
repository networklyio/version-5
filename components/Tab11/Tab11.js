import React from 'react'
import Link from 'next/link'
import styles from "../Candidates/Candidates.module.css"

export default function Tab11() {
  return (
    <>
            <section className={styles.tabOne}>
        <div className={styles.whole}>
        <div className={styles.candidatesSection}>
            <div className={styles.picCandidates}>
                <img src="/assets/media/pic1.jpg" alt="People Recruiting"/>
            </div>
            <div className={styles.sideText, styles.picCandidates}>
                <h3 className={styles.h3}>Work from home: our best tips</h3>
                <p className={styles.down}>We have been talking about it for years and it only took a global pandemic to make working from home (WFM) the new standard within a few weeks.</p>
                <p className={styles.down}>From the self-employed to employees of all levels, by choice or not, everyone has been forced to work from home (WFH). Thus, 88% of companies worldwide have imposed or encouraged their employees to work from home since the beginning of the COVID-19 pandemic...</p>
                <div className={styles.btnPage}>
                    <a href="/work-from-home">read more</a>
                </div>
            </div>
        </div>
        <div className={styles.candidatesSection, styles.two}>
            <div className={styles.picCandidates}>
                <img src="/assets/media/pic2.jpg" alt="People Interview"/>
            </div>
            <div className={styles.sideText,styles.picCandidates}>
                <h3 className={styles.h3}>Succeed in your Skype interview</h3>
                <p className={styles.down}>In today’s global workplace, many employers opt to use Skype to interview candidates. This type of interview cuts down on travel expenses. It also enables employers to quickly and easily recruit international top talent.</p>
                <p className={styles.down}>Moreover, with the rise of remote workers around the world, meeting over Skype has become the norm for professionals when communicating with their team as well as their clients.</p>
                <div className={styles.btnPage2}>
                    <a href="/skype-interview">read more</a>
                </div>
            </div>
        </div>
        <div className={styles.candidatesSection}>
            <div className={styles.picCandidates}>
                <img src="/assets/media/pic3.jpg" alt="People Recruiting"/>
            </div>
            <div className={styles.sideText,styles.picCandidates}>
                <h3 className={styles.h3}>Tips for keeping the Job you have</h3>
                <p className={styles.down}>We have been talking about it for years and it only took a global pandemic to make working from home (WFM) the new standard within a few weeks.</p>
                <p className={styles.down}>From the self-employed to employees of all levels, by choice or not, everyone has been forced to work from home (WFH). Thus, 88% of companies worldwide have imposed or encouraged their employees to work from home since the beginning of the COVID-19 pandemic...</p>
                <div className={styles.btnPage}>
                    <a href="/keep-your-job">read more</a>
                </div>
            </div>
        </div>
                  </div>
                  </section>
   
    </>
  )
}
