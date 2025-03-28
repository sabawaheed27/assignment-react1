import styles from './navigation.module.css'

const Navigation = ({ setCurrentPage })=> {
    return (
      <nav className={styles.nav}>
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("news")}>News</button>
        <button onClick={() => setCurrentPage("tutorials")}>Tutorials</button>
      </nav>
    );
  }
  
  export default Navigation