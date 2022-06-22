import React from "react";
import styles from './Article.module.scss';

const Article = ({ title, description, urlToImage, url, source }) => (
  <article className={styles.article}>
    <img className={styles.image} src={urlToImage} alt={title}/>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.description}>{description}</p>
    <a className={styles.url} href={url} target="_blank">Read more on {source.name}</a>
  </article>
);

export default Article;
