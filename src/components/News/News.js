import React, {useContext, useEffect, useState} from "react";
import {StoreContext} from "../../store";
import styles from './News.module.scss';
import {loadNews} from "./News.service";
import Message from "../Message/Message";
import Article from "./Article/Article";
import key from "weak-key";

const NO_ARTICLES_MESSAGE = 'There are no articles matching your request.';

const News = () => {
  const { state, loadNextPage } = useContext(StoreContext);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await loadNews(state);
        let newArticlesValue;
        if (state.page === 1) {
          newArticlesValue = result.articles;
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        } else {
          newArticlesValue = [...articles, ...result.articles];
        }
        setArticles(newArticlesValue);
      } catch (e) {
        setArticles([]);
      }
    };

    fetchData();
  }, [state]);

  const renderArticles = () => {
    if (!articles || !articles.length) {
      return <Message message={NO_ARTICLES_MESSAGE} />;
    }

    return articles.map((article) => <Article key={key(article)} {...article} />);
  };

  const renderLoadMoreButton = () => {
    if (!articles || !articles.length) {
      return null;
    }

    return <button className={styles.loadMoreButton} onClick={loadNextPage}>Load more</button>;
  };

  return (
    <main className={styles.content}>
      {renderArticles()}
      {renderLoadMoreButton()}
    </main>
  );
};

export default News;
