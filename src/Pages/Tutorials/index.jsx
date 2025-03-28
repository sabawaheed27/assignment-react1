
import { getImageUrl } from "../../utils/function";
import {tutorials} from "../../data";
import styles from "./tutorials.module.css";

  

  const Tutorials = () => {
  return (
    <div className={styles.tutorialsContainer}>
      <div className={styles.tutorialsGrid}>
        {tutorials.map((tutorial, index) => (
          <div className={styles.tutorialCard} key={index} >
            <img className={styles.tutorialImage} src={getImageUrl(tutorial.image)} alt={tutorial.title}  />
            <h3>{tutorial.title}</h3>
            <p className={styles.level}>Level: {tutorial.level}</p>            
            <p>{tutorial.description}</p>
            <a className={styles.readMore} href={tutorial.link} target="_blank"  >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
