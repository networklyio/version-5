import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';
import ApartmentIcon from '@material-ui/icons/Apartment';
import LinkedinIcon from '@material-ui/icons/LinkedIn'
import styles from '../Footer/Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.logoFooter}>
          <img className={styles.img} src="/assets/media/Logo-white.png" alt="company logo" />
        </div>
        <div className={styles.txt}>
          <h3 className={styles.h3}>for candidates</h3>
          <ul className={styles.ul}>
            <li className={styles.li}><a href="/candidates">Career Advice</a></li>
            <li className={styles.li}><a href="/candidates">Interview Tips</a></li>
            <li className={styles.li}><a href="/candidates">CV Advice</a></li>
            <li className={styles.li}><a href="/jobs">Recent jobs</a></li>
        
          </ul>
        </div>
        <div className={styles.txt}>
          <h3 className={styles.h3}>for employers</h3>
          <ul className={styles.ul}>
            <li className={styles.li}><a href="/employers">Get Started</a></li>
            <li className={styles.li}><a href="/services">Our Services</a></li>
            <li className={styles.li}><a href="/about">About us</a></li>
            <li className={styles.li}><a href="/contact">Contact us</a></li>
          </ul>
        </div>
        <div className={styles.txt}>
          <h3 className={styles.h3}>contact us</h3>
          <ul className={styles.ul}>
            <li className={styles.li}><i className={styles.i}><RoomIcon /></i>524 3rd Avenue, Duncansville, PA 16635</li>
            <li className={styles.li}><i className={styles.i}><EmailIcon /></i><a href="mailto:Dave@laborstaffers.com">Dave@laborstaffers.com</a></li>
            <li className={styles.li}><i className={styles.i}><PhoneIcon /></i>+1 (814) 889-9125</li>
         
            <div className={styles.socialIcons, styles.up}>
              <a className={styles.a} href="https://www.facebook.com/laborstaffers/"><i><FacebookIcon /></i></a>
              <a className={styles.a} href="https://www.instagram.com/laborstaffers/"><i><InstagramIcon /></i></a>
              <a className={styles.a} href="https://twitter.com/laborstaffers"><i><TwitterIcon /></i></a>
              <a className={styles.a} href="https://www.linkedin.com/in/dhite/"><i><LinkedinIcon /></i></a>
            </div>
          </ul>
        </div>

      </footer>
      <div className={styles.copyright}>
        <p>LABOR STAFFERS © 2021</p>
      </div>

    </>
  )
}
