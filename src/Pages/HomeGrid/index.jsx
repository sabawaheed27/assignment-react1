
import { getImageUrl } from "../../utils/function";
import {imageNames} from '../../data'
import styles from './homeGrid.module.css'

const HomeGrid = () => {
  return (
    <div className={styles.imageGrid}>
      {imageNames.map((name, index) => (
        <div className={styles.imageItem} key={index}>
          <img className={styles.Image} src={getImageUrl(name)} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};
 export default HomeGrid