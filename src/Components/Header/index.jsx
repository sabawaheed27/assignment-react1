import { Sun, Moon } from "lucide-react";
import styles from './header.module.css';

const Header = ({ title, darkMode, setDarkMode }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      
     
      {darkMode ? (
        <Sun size={24} onClick={() => setDarkMode(false)} className={styles.icon} />
      ) : (
        <Moon size={24} onClick={() => setDarkMode(true)} className={styles.icon} />
      )}
    </header>
  );
};

export default Header;
