import React,{useEffect,useState} from 'react'
import styles from "../Candidates/Candidates.module.css"
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Tab11 from '../Tab11/Tab11';
import Tab21 from '../Tab21/Tab21';
import Tab31 from '../Tab31/Tab31';

export default function candidades() {
  const [claseDivUno,setClaseDivUno]=useState(true)
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
     <header className={styles.candidatesHeader}>
        <div className={styles.container}>
            <div className={styles.title}>
            <h1 className={styles.h1}>Get Career Advice, Interview Tips and Build Your Resume</h1>
            <p className={styles.p}>A guide to help you find a job, get a better cv and work from home efficiently</p>
            </div>
        </div>
    </header>
 <section>
        <div className={styles.btnsRecruiting}>
            <div className={styles.btns} onClick={(e)=>setearClases(e)} id={'uno'}>
                <p>Career Advice</p>
            </div>
            <div className={styles.btns2} onClick={(e)=>setearClases(e)} id={'dos'}>
                <p>Interview Tips</p>
            </div>
            <div className={styles.btns3} onClick={(e)=>setearClases(e)} id={'tres'}>
                <p>CV Advice</p>
            </div>
        </div>
        {/* <!-- ,styles.tab one --> */}
        {(claseDivUno && <Tab11/>)}
}
       {/* <!-- ,styles.tab two --> */}
       {(claseDivDos && <Tab21/>)}

       {/* <!-- ,styles.tab three --> */}
       {(claseDivTres && <Tab31/>)}

      {/* <!-- pages --> */}
        <div className={styles.pages}>
            {/* <p>1</p>
            <p>2</p>
            <p>3</p>
            <i><ChevronRightIcon /> </i> */}
        </div>
    </section>
  </>
  )
}
