import React from 'react'
import Link from 'next/link'
import styles from "../Candidates/Candidates.module.css"

export default function Tab21() {
  return (
    <>
      <section className={styles.tabTwo}>
        <div className={styles.whole}>
        <div className={styles.candidatesSection}>
            <div className={styles.picCandidates}>
                <img src="/assets/media/interview-tip.jpg" alt="Job interview"/>
            </div>
            <div className={styles.sideText, styles.picCandidates}>
                <h3 className={styles.h3}>Job interview: Strengths & Weaknesses</h3>
                <p className={styles.down}>During a job interview, the recruiter may ask you this famous question: “Tell me 3 of your strengths and 3 of your weaknesses“. This question (with multiple variations) can be challenging, however, it is a good way of earning points with your recruiter. With a little training and preparation it is easy to make a good impression.</p>
                <p className={styles.down}>Firstly, here is a bit of advice on how to best answer the question...</p>
                <div className={styles.btnPage}>
                    <a href="/job-interview">read more</a>
                </div>
            </div>
        </div>
        <div className={styles.candidatesSection, styles.two}>
            <div className={styles.picCandidates}>
                <img src="/assets/media/prepare.jpg" alt="Job interview"/>
            </div>
            <div className={styles.sideText, styles.picCandidates}>
                <h3 className={styles.h3}>How do I prepare for a job interview?</h3>
                <p className={styles.down}>You are certain to be asked specific questions about the company you are interviewing with. The interviewer will appreciate that you have made an effort to research their company. It will also show that you are motivated about the role.</p>
                <p className={styles.down}>You can do a search online by checking the company through a search engine. You should also check the website, careers website, blogs and social media of the company. Finally review articles in the press.</p>
                <div className={styles.btnPage2}>
                <a href="/interview-prepare">read more</a>

                </div>
            </div>
        </div>
        <div className={styles.candidatesSection}>
            <div className={styles.picCandidates}>
                <img src="/assets/media/interview.jpg" alt="Job interview"/>
            </div>
            <div className={styles.sideText, styles.picCandidates}>
                <h3 className={styles.h3}>The most common questions asked in interview</h3>
                <p className={styles.down}>Anticipating the type of questions you could be asked in an interview is absolutely vital. In this article, we are going to reveal what your interviewer really wants to know when asking certain questions.The goal is to personalise and adapt your responses to the position and the company’s culture in order to stand out.</p>
                <p className={styles.down}>Here is a list of the most common questions asked in interviews and guidelines on how to answer them...</p>
                <div className={styles.btnPage}>
                   <a href="/interview">read more</a>
                </div>
            </div>
        </div>
        </div>
        </section>
      
    </>
  )
}
