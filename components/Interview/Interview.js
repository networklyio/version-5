import React from 'react'
import Link from 'next/link'
import styles from '../Interview/Interview.module.css'

function Interview() {
  return (
    <>
      <header className={styles.aboutUs}>
        <div className={styles.container}>
          <div className={styles.aboutUsTitle}>
          </div>
        </div>
      </header>
      <section className={styles.info}>
        <div className={styles.sectionText}>
          <h2 className={styles.h2}>The most common questions asked in interview</h2>
          <p className={styles.p}>Every interview is different but having answers ready for each potential question is key.</p>
          <p className={styles.p}>In this article, we are going to reveal what your interviewer really wants to know when asking certain questions.The goal is to personalise and adapt your responses to the position and the company’s culture in order to stand out. It will also enable you to:</p>
          <p className={styles.p}>Are you ready? Grab your notebook and apply the STAR method to ace that interview!</p>
          <p className={styles.p}>Here is a list of the most common questions asked in interviews and guidelines on how to answer them.</p>
        </div>
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>1. Tell us about yourself.</h2>
          <p className={styles.p}>This is usually the opening question and, as first impressions are key, one of the most important.</p>
          <p className={styles.p}>Pro tips:</p>
          <ul className={styles.p}>
          <li>Keep your answer to under five minutes</li>
          <li>Begin with an overview of your highest qualifications then run through the jobs you’ve held in your career so far. You can follow the same structure as your CV.</li>
          </ul>
        </div >
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>2. What are your strong points / strengths?</h2>
          <p className={styles.p}>Pick three of your biggest attributes which you think are the most important for this job and explain how these strengths will help you succeed in the position.</p>
          <p className={styles.p}>Pro tips:</p>
          <ul className={styles.p}>
            <li>They could be related to process skills, such as proficiency and organisation</li>
            <li>They can also be in relation to a particular field such as proficiency in a computer language, or a specific tool such as Salesforce, Photoshop or Sage</li>
            <li>The last type are the intangible skills, also know as soft skills, like good managerial skills or creative thinking and adaptability</li>

          </ul>
        </div >
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>3. What are your weak points / weaknesses?</h2>
          <p className={styles.p}>This dreaded question is best handled by selecting one where you have examples showing you have made positive steps to readdress this weakness. Ensure you demonstrate to the hiring manager that you are self-aware of your weaknesses, consider them when you are working on a project and will continue to work on improving yourself professionally.</p>
          <p className={styles.p}>Pro tips:</p>
          <ul className={styles.p}>
            <li>Show that you are able to learn independently</li>
            <li>Demonstrate that your are a go-getter</li>
            <li>Prove that your are adaptable</li>
          </ul>
          <p className={styles.p}>For example, if your IT abilities are not at the level they should be, state it as a weakness but then tell the interviewer about training courses or time spent outside working hours where you have worked on improving those skills (watching online videos, using a demo, asking experts…etc...</p>
        </div >
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>4. Why do you want this job?</h2>
          <p className={styles.p}>Think carefully about this one. Your answer is very important to the interviewer and he is in fact waiting for several answers in one.</p>
          <p className={styles.p}>Pro tips:</p>
          <ul className={styles.p}>
            <li>Quote the aspects of the job and tasks you like</li>
            <li>Explain in a few sentences what you like about this particular company</li>
            <li>Show you are a team player by highlighting what excites you about joining the team</li>
            <li>Explain why they match both your professional and personal needs. Put emphasis on:</li>
            <ul>
              <li>the fact that it is an international environment that encourages an open minded culture</li>
              <li>the youthfulness and friendliness of the team that will motivate you to perform even better</li>
              <li>the passionate and skilled employees who could challenge your ideas and teach you new skills</li>
              <li>Etc...</li>
            </ul>
            <li>Explain why it matches with your career path and your goals</li>
            <li>Do not mention the negative aspects of your current job or the job you are being interviewed for</li>
          </ul>
        </div >
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>5. What do you know about this company?</h2>
          <p className={styles.p}>This is your chance to impress the interviewer with your knowledge and research of their company. This shows that you are really interested in, even passionate about, the company and would be very involved in if you get the job.</p>
          <p className={styles.p}>Pro tips:</p>
          <ul className={styles.p}>
            <li>Check their website, career website, social media and blog</li>
            <li>Find the latest news about them by running a search on the web</li>
            <li>Give them a run down of their products/services, news, customers, etc.</li>
            <li>Show that you are resourceful and can find information on your own</li>
            <li>Show that you have a business mind set and would be an asset to the team. If you find news about a product or a change that could impact the manager, or might be related to the opening of the position, ask further questions about it and mention where you saw the news.</li>

          </ul>
        </div >
       
      </section >
      
    </>
  )
}

export default Interview