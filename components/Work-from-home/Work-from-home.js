import React from 'react'
import Link from 'next/link'
import styles from '../Work-from-home/WorkFromHome.module.css'

function WorkServices() {
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
          <h2 className={styles.h2}>Work from home: our best tips</h2>
          <p className={styles.p}>We have been talking about it for years and it only took a global pandemic to make working from home (WFM) the new standard within a few weeks. From the self-employed to employees of all levels, by choice or not, everyone has been forced to work from home (WFH). Thus, 88% of companies worldwide have imposed or encouraged their employees to work from home since the beginning of the COVID-19 pandemic.</p>
        
        <p className={styles.p}>Let’s have a look at somes figures. Home office represents on average per employee:</p>
        <ul className={styles.p}>
          <li>5.5 fewer days of sick leave per year</li>
          <li>45 minutes more sleep every day</li>
          <li>a saving of 40 minutes of travel time on average per day</li>
          </ul>
          <p className={styles.p}>As working from home in 2020 has become the norm, it is important to quickly adopt the right habits. We have therefore prepared 7 best tips to get the most out of working from home.</p>
        </div>
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>1. Set up a workspace</h2>
          <p className={styles.p}>One of the fundamental keys of success in remote working is the set up of one’s own workspace.

The ideal is to have a room dedicated to work to physically separate the work day from your personal life.

If you don’t have the possibility to have a dedicated room, then choose a quiet and bright place where you can concentrate without being interrupted. Don’t forget to install all the equipment you need and that will allow you to work properly: appropriate chair, table, desk light, power outlet for your computer. This will help you avoid health problems related to your posture or lack of comfort.</p>
        </div >
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>2. Keep your usual habits</h2>
          <p className={styles.p}>A day of WFH should be the same as a day at the office.</p>
          <p className={styles.p}>Don’t fall into the trap: working from home is not a day off, nor is it a day of work overload.</p>
          <ul className={styles.p}>
            <li>Get into the habit of getting dressed in the morning to help get you in the work mind-set. Forget about jogging pants, these will remind you of your lazy Sundays at home!</li>
            <li>Start and end your work day at your usual hours.</li>
            <li>Mark breaks. Take real, time-defined breaks (with a beginning and an end) during which you disconnect.</li>
          </ul>
        </div >
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>3. Set goals</h2>
          <p className={styles.p}>If you are afraid of not being able to keep your concentration and being distracted by the other occupations around you: get organized beforehand.</p>
          <p className={styles.p}>If you need help, plan your day, maybe even more than when you were at the office.
At the beginning of the day, set up time slots in which you will work on a particular file for as much time as you need. Also plan your break times.
An effective way to evaluate your time management is to set goals.</p>
          <ul className={styles.p}>
            <li>Did you complete your task on time?</li>
            <li>Did you complete your to-do list?</li>
            <li>Were you more efficient than expected and therefore freed up time for something else?</li>
          </ul>
          <p className={styles.p}>In all cases, make a note of what you have accomplished at the end of the day so that you can account for the tasks you have performed.</p>
        </div >
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>4. Communicate with the rest of your team</h2>
          <p className={styles.p}>Whether you are a manager or not, it is important to stay in contact with the world outside your home. Keep in touch with your team members by keeping regular check-ins. This will :</p>
          <ul className={styles.p}>
            <li>Prevent you from feeling alone and losing the sense of your mission</li>
            <li>Motivate you to reach your goals</li>
            <li>Will probably inspire you for other projects</li>
            <li>Allows you to share your difficulties and successes</li>
          </ul>
          <p className={styles.p}>In all cases, make a note of what you have accomplished at the end of the day so that you can account for the tasks you have performed.</p>
        </div >
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>5. Use the tools available</h2>
          <p className={styles.p}>There is an (almost endless) array of digital tools to help you in remote collaborative work and the organization of your work. Here are a few of them:</p>
          <ul className={styles.p}>
            <li>Google Drive: for document sharing</li>
            <li>Zoom: for your video conference meetings</li>
            <li>Google suite: for file construction: docs. slides. sheets.</li>
            <li>Trello: to organize your work time and tasks</li>
            <li>Canva: for creating visuals (ideal for novices), alternative to the Adobe suite</li>
            <li>Whatsapp or Slack: for instant chatting between teams and team members</li>
            <li>Doodle: to quickly find out what your colleagues think (survey tool)</li>
          </ul>
          <p className={styles.p}>In all cases, make a note of what you have accomplished at the end of the day so that you can account for the tasks you have performed.</p>
        </div >
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>6. Separate your professional and personal lives</h2>
          <p className={styles.p}>Keeping a clear separation between work and private life will allow you to rest better on one side and be more productive on the other.

By disconnecting yourself completely outside of work hours and during your breaks, you increase the quality of your rest and give yourself a pace that is essential to your well-being and productivity.</p>
          <p className={styles.p}>Conversely, not disconnecting completely would deteriorate the quality of your rest as you would keep be stimulated by work, emails, incoming calls…</p>
        </div >
        <div className={styles.sectionText}>
          <h2 className={
            styles.h2}>7. Move!</h2>
          <p className={styles.p}>So certainly, in times of lockdown it is more difficult to exercise and stay active, but it is not impossible! If you are on the phone? Take the opportunity to get up and take a few steps! If your job does not require you to call regularly, take advantage of your breaks to get up and stretch! Prolonged sitting can cause health problems in the medium and long term. So stay active to avoid them!</p>
          <p className={styles.p}>So, are you ready to work from home? Discover all the <a href="/jobs" className={styles.a}>open remote positions here!</a></p>
        </div >
      </section >
      
    </>
  )
}

export default WorkServices