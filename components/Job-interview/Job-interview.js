import React from 'react'
import Link from 'next/link'
import styles from '../Job-interview/JobInterview.module.css'

function JobInterview() {
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
          <h2 className={styles.h2}>Job interview: Strengths & Weaknesses</h2>
          <p className={styles.p}>During a job interview, the recruiter may ask you this famous question: “Tell me 3 of your strengths and 3 of your weaknesses“. This question (with multiple variations) can be challenging, however, it is a good way of earning points with your recruiter. With a little training and preparation it is easy to make a good impression.</p>
        </div>
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>Advice</h2>
          <p className={styles.p}>Firstly, here is a bit of advice on how to best answer the question: “What are your strengths and weaknesses?” It is much easier to discuss your strengths than it is your weaknesses. If you are short on ideas, ask those around you for inspiration and advice.</p>
          <p className={styles.p}>Here are a few tips for talking about your weak points with peace of mind:</p>
          <ul className={styles.p}>
          <li>Avoid a “weakness” that could eliminate you from the position: you don’t want a surgeon to be someone who is distracted.</li>
          <li>Favour a “hybrid” weak point such as demanding, distrustful, impatient, where you can flip them into positives and show your strengths</li>
          <li>Use an example to illustrate your point and don’t apologise for being the way you are.</li>
          </ul>
        </div >
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>Strengths</h2>
          <p className={styles.p}>Talking about your strengths is a golden opportunity to highlight your successes. When you discussing one of your strengths, illustrate it with a concrete example.
For example: “I am very organised. In fact, I am often taken as an example by my peers, and I organised an event for my team last year…”.</p>
          <p className={styles.p}>Here is a list of qualities that are highly appreciated by recruiters:</p>
          <ul className={styles.p}>
            <li>Rigourous: rigour is generally appreciated in all sectors.</li>
            <li>Organised: in project management or management, the ability to organise is a real asset.</li>
            <li>Curious: to question and ensure you understand a topic or task is a truly appreciated</li>
            <li>Sociable: this is important when working in a team or with external partners</li>
            <li>Optimistic: highly appreciated during teamwork</li>
            <li>Creative: some trades require more creative profiles than others (marketing/communication/design/graphic design, etc...</li>
            <li>Precise: Very important in finance, accounting and analysis among others</li>
            <li>Personable: especially if you have to meet people or be on the phone</li>
            <li>Honest: important if you are dealing with sensitive data or money</li>
            <li>Adaptable: some companies will require you to be adaptable on a given position</li>
            <li>Patient: proves to be a quality for administrative or tedious tasks, as well as within a team</li>
            <li>Courageous: a courageous person dares and doesn’t hesitate when making decisions</li>
          </ul>
        </div >
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>Weaknesses</h2>
          <p className={styles.p}>Stating a “weakness” during a job interview can be unsettling. Indeed, you are here to “sell yourself” yet they ask you to sabotage yourself? In fact, not really.
You are given the opportunity to be honest about yourself and let your personality shine through.
Some “hybrid weaknesses” can be considered strengths depending on the job. Here are a few of them:</p>
          <ul className={styles.p}>
            <li>Stubborn: you don’t give up, you are a fighter</li>
            <li>Talkative: you are sociable and communication is important to you</li>
            <li>Authoritarian: you know how to assert yourself if needed</li>
            <li>Distrustful: you are attentive and don’t let yourself be fooled</li>
            <li>Distracted: your creativity gets you from one idea to another quickly</li>
            <li>Pessimistic: you think about and anticipate possible obstacles</li>
            <li>Impatient: you are a “go-getter”, you make sure you reach your goals quickly.</li>
            <li>Direct: you are frank and get straight to the point, ensure you show you aren’t tactless at the same time.</li>
            <li>Emotive: your empathy helps you understand other people’s feelings</li>
            <li>Shy: you don’t put yourself forward at all time</li>
            <li>“Control freak”: you like to keep control of what’s around you, this can be a great quality</li>
          </ul>
        </div >
        <div className={styles.sectionText}>
          <p className={styles.p}>Attention: some weak points such as aggressiveness, laziness, lack of rigour, pretension must be avoided. They will work against you no matter what type of position you are aiming for.</p>
          <p className={styles.p}>You are now ready to talk about your strengths and weaknesses successfully at your next job interview! Don’t forget that everyone has weaknesses, including your recruiter. Just make sure you explain your point and illustrate it so that it shows your strengths.</p>
        </div >
      </section >
      
    </>
  )
}

export default JobInterview