import styles from './home.module.css';
import HomeGrid from '../HomeGrid'

const Home = () =>{
    return(
        <div className={styles.scrollContainer}>
        <div className={styles.contentContainer}>
        <div className={styles.flexContainer}>
        <h1 className={styles.heading}>Tech Insights Hub</h1>
        <p className= {styles.paragraph}>Stay updated with the latest trends, innovations, and insights in the world of technology.From coding tips to emerging tech, we cover everything to keep you informed and ahead in the digital era. 🚀</p>
       
    </div>
        <HomeGrid/>
  </div>
 </div>
    )
}

export default Home