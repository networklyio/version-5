import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import styles from '../S1/S1.module.css'
import Tab1 from '../Tab1/Tab1'
import Tab2 from '../Tab2/Tab2'
import Tab3 from '../Tab3/Tab3'

function S1() {

  const [claseDivUno,setClaseDivUno]=useState(false)
  const [claseDivDos,setClaseDivDos]=useState(false)
  const [claseDivTres,setClaseDivTres]=useState(false)



  function setearClases(e){
    if(e.target.id !==''){
      const elDiv =e.target.id
      switch(elDiv){
      case  'uno':
        setClaseDivUno(true)
        setClaseDivDos(false)
        setClaseDivTres(false)
        alert('uno')
        break

       case 'dos':
        setClaseDivUno(false)
        setClaseDivDos(true)
          setClaseDivTres(false)
          alert('dos')
        break

        case 'tres':
        setClaseDivUno(false)
        setClaseDivDos(false)
        setClaseDivTres(true)
        alert('tres')
        break

      }
    }

  }

useEffect(()=>{
},[setClaseDivTres,setClaseDivUno,setClaseDivDos])

  return (
    <>
      <section className={styles.section}>
        <div className={styles.btnsRecruiting} id={styles.recruiting}>
          <div className={styles.btns} onClick={(e)=>setearClases(e)} id={'uno'}>
            <p className={styles.p}>Professional Recruiting</p>
          </div>
          <div className={styles.btns2}>
            <p className={styles.p} onClick={(e)=>setearClases(e)} id={'dos'}>Temporary Staff</p>
          </div>
          <div className={styles.btns3}>
            <p className={styles.p} onClick={(e)=>setearClases(e)} id={'tres'}>Find your dream job</p>
          </div>
        </div>
        {/* tab 1 */
        (claseDivUno && <Tab1/>)
        }
        {/* tab 2 */
        (claseDivDos && <Tab2/>)
        }
       {/* tab 3 */
        (claseDivTres && <Tab3/>)
       }
      </section >
    </>
  )
}

export default S1
