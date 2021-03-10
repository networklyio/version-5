import React from 'react'
import Link from 'next/link'
import styles from '../Write-a-winning-cv/WinningCV.module.css'

function WinningCV() {
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
          <h2 className={styles.h2}>How do you write a winning CV?</h2>
          <p className={styles.p}>There are 6 golden rules for writing CVs that any potential recruiter will expect you to follow.</p>
          <p className={styles.p}>Your CV is a personal marketing document used to sell yourself to prospective employers who have never met you.
Consider yourself as the product and your CV as the advertisement.</p>
          <p className={styles.p}>The goal of writing a winning CV is to stand out from the crowd and catch the eye of your potential employers.</p>
          <p className={styles.p}>At a glance, the recruiter or the manager should be able to understand:</p>
          <ul className={styles.p}>
          <li>Who you are</li>
          <li>What your professional background is</li>
          <li>What your skills and abilities are</li>
          <li>What you have achieved</li>
          <li>Why you are the best person for the job</li>
          </ul>
          <p className={styles.p}>Follow the 6 steps below to ensure you create a top notch CV that will get you interviews!</p>
        </div>
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>1. Tailor your CV to the job offer.</h2>
          <p className={styles.p}>Before you start to write your CV, you should find out exactly what your target employers are looking for and want to see on an applicants’ CV.</p>
          <p className={styles.p}>The goal is to make it as easy as possible for the HR / hiring manager to see you as a fit for their business. Bear in mind that they will only take around 5-7 seconds to decide if your CV is worth a look. So show them at a glance that you perfectly fit the position you have applied for.</p>
          <p className={styles.p}>Research info about the company but also about the role in order to adapt your CV and ensure your application is relevant.</p>
          <p className={styles.p}>Pro tips:</p>
          <ul className={styles.p}>
          <li>Have a specific CV for each type of job and different areas (e.g.: if you are a web developer, you could have one CV for software companies, one for final clients and one for digital agencies)</li>
          <li>Review the job advert in detail to pick up keywords that you can reuse in your CV.</li>
          <li>Highlight the skills and experiences that are relevant for the position you apply for.</li>
          <li>If you write a CV for an open application, then emphasise the tasks you would like to work on and the skills that you could bring to benefit the company.</li>
          <li>If you write a CV for an open application, then emphasise the tasks you would like to work on and the skills that you could bring to benefit the company.</li>
          </ul>
        </div >
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>2. Be concise.</h2>
          <p className={styles.p}>Your CV is a tool to get you an interview where you will be able to give more details about your experience. But first, you need to be informative and get straight to the point.</p>
          <p className={styles.p}>Pro tips:</p>
          <ul className={styles.p}>
            <li>Your CV is a tool to get you an interview where you will be able to give more details about your experience. But first, you need to be informative and get straight to the point.</li>
            <li>Use bullet points to list your skills and tasks by groups, it will look clearer</li>
            <li>Write short sentences</li>
            <li>Do not go into detail</li>
            <li>Do not write more than 3 pages</li>

          </ul>
        </div >
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>3. Check and check again.</h2>
          <p className={styles.p}>Recruiters receive approximately 250 CVs for each job position. One spelling or grammatical mistake and your CV will not be reviewed.
This is one of the major filters that recruiters use to select or dismiss potential candidates. Do not hesitate to print your resume in order to spot mistakes, as it can be easier to spot them on paper than on a screen.</p>
          <p className={styles.p}>Pro tips:</p>
          <ul className={styles.p}>
            <li>Read and re-read your CV to correct all the mistakes</li>
            <li>Ask friends and family to read it too, they might notice some mistakes you have not seen</li>
            <li>Do not mix tenses: if you start with the present tense, use it until the end</li>
            <li>Look carefully at the language used in the job advert and use the same in your CV (British English or American English, German or Flemish, French or Canadian French…)</li>
            <li>Send your CV as a PDF to ensure that it will be opened correctly and that the format will be maintained, whatever the software used to read it</li>
          </ul>
        </div >
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>4. Justify the gaps.</h2>
          <p className={styles.p}>An employment gap can be for positive or negative reasons, but it needs an explanation for the potential employer as it raises red flags in their eyes.

You must justify any gaps in your education or career. If you do not, the recruiter might think that you are hiding something.</p>
          <p className={styles.p}>Pro tips:</p>
          <ul className={styles.p}>
            <li>Write one line to explain the context of your gap such as Sabbatical Leave Abroad, Maternity or Paternity Leave, Studying in... etc.</li>
            <li>If you were unemployed or sick, you do not have to go into detail as some situations may benefit from discretion, but it is best to mention it to avoid questions further into the process</li>
            <li>Never be tempted to extend your period of employment in a previous role as there is every chance that the interviewer will call your previous employers to verify your time there.</li>
          </ul>
        </div >
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>5. Highlight your interests.</h2>
          <p className={styles.p}>Employers like to have some information not related to your career to determine your personality and validate that you will be a good fit for their company. It can also be an ice breaker for the potential manager that will have your CV when they interview you.

Who knows? Having a passion in common with the hiring manager could get you a golden ticket for an interview!</p>
          <p className={styles.p}>Pro tips:</p>
          <ul className={styles.p}>
            <li>Show who you are by highlighting what is important to you</li>
            <li>Use examples that can be related both to your personal and professional life. If you are a Social Media Executive, for instance, highlight your interest for social networks and information technology as well as video editing and photography.</li>
            <li>Be specific when you list your activities. For example, instead of writing “exhibitions”, be specific and write “modern art exhibitions”.</li>
            <li>Be honest. There is no worse impression during an interview than discovering a candidate cannot talk about a supposed interest. It will only raise red flags and show that you are not reliable.</li>

          </ul>
        </div >
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>6. Get feedback.</h2>
          <p className={styles.p}>Your CV can be clear for you because you know what you have done and because it is your design. However, it may not be so obvious for everyone and recruiters will not spend time trying to understand your organisation.

Ask people from different fields what they think about your resume to get more comprehensive feedback.</p>
          <p className={styles.p}>Pro tips:</p>
          <ul className={styles.p}>
            <li>Ask several people to give you feedback including recruiters</li>
            <li>Improve your CV</li>
            <li>Ask for further feedback</li>

          </ul>
        </div >
       
      </section >
      
    </>
  )
}

export default WinningCV