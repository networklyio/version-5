import Head from "next/head";
import styles from "../styles/home.module.css";
import SpringSlider from "../../components/springslider/index";
import HeaderJobs from '../../components/HeaderJobs/HeaderJobs'
export default function Home() {
  return (
    <>
    <HeaderJobs/>
    <div className={styles.container}>
      <div className={styles.slider}>
      <SpringSlider />
      </div>      
    </div>
    </>
  );
}
