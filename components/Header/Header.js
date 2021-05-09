import React from "react"
import Link from 'next/link'
import PhoneIcon from '@material-ui/icons/Phone'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedinIcon from '@material-ui/icons/LinkedIn'


import styles from "./Header.module.css"

export default function Header({navigation}) {
  function closeMenu(event){

      if (event.target instanceof HTMLAnchorElement) {
         //alert('xx')
         //const x = document.getElementById("toggler");
         document.getElementById('toggler').click();
      }
    
  }
  return (
    <>
    <header>
      <div>
        <nav className={styles.menu}>
          <div className={styles.socialMedia}>
            <div className={styles.slogan}>
              <p>Welcome to your future</p>
            </div>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/laborstaffers/"><i><FacebookIcon /></i></a>
              <a href="https://www.instagram.com/laborstaffers/"><i><InstagramIcon /></i></a>
              <a href="https://twitter.com/laborstaffers"><i><TwitterIcon /></i></a>
              <a href="https://www.linkedin.com/in/dhite/"><i><LinkedinIcon /></i></a>
              <i><PhoneIcon /></i>
              <p>814-889-9125</p>
            </div>
            <div className={styles.logo, styles.logoMobile}>
              <img src="/assets/media/Logo-white.png"  alt="Logo" />
            </div>
          </div>
          <div className={styles.navLinks}>
            <div className={styles.logo}>
              <a href="/"><img src="/assets/media/Logo-white.png" alt="Logo" /></a>
            </div>
            <div className={styles.links}>
              <ul className={styles.ul}>
              {navigation.map(item =>(
       <li key={item.id} className={styles.li}>
         <Link href={item.slug}><a>{item.page}</a></Link>
         </li>
     ))}
              </ul>
            </div>
          </div>
        </nav>
        <div className={styles.menuWrap} id="menuWrap">
          <input type="checkbox" className={styles.toggler} id="toggler" />
          <div className={styles.hamburger}>
            <div className={styles.div1}>{/* <!-- do not delete this empty div --> */}</div></div>
          <div className={styles.menuMobile} id="menuMobile">
            <div className={styles.div2}>
              <div className={styles.div3}>
                <ul className={styles.ul}>
                {navigation.map(item =>(
       <li key={item.id} className={styles.li} onClick={closeMenu}>
         <Link href={item.slug} ><a>{item.page}</a></Link>
         </li>
     ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div >
    </header>  
    </>
  )
}
