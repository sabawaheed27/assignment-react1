import { getImageUrl } from '../../utils/function';
import {newsArticles} from '../../data'
import styles from "./news.module.css";


const News = () => {
  return (
    <div className={styles.newsGrid}>
      {newsArticles.map((article, index) => (
        <div className={styles.newsCard} key={index}>
          <h3>{article.title}</h3>
          <img className={styles.tutorialImage} src={getImageUrl(article.image)} alt={article.title} />
          <p className={styles.date}>{article.date}</p>
          {article.category && <p className={styles.category}>Category: {article.category}</p>}
          {article.source && <p className={styles.source}>Source: {article.source}</p>}
          <p>{article.summary}</p>
          <a className={styles.readMore} href={article.readMore} target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default News;
