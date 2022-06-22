import React, {useContext, useState} from "react";
import styles from './Search.module.scss';
import {StoreContext} from "../../../store";

const Search = () => {
  const { state, filterByQuery } = useContext(StoreContext);
  const [query, setQuery] = useState(state.q);

  const updateQueryFromInput = (e) => {
    const {value} = e.currentTarget;
    setQuery(value);
    filterByQuery(value);
  };

  const updateQueryFromButton = () => {
    filterByQuery(query);
  };

  return (
    <div className={styles.wrapper}>
      <input type="text" className={styles.input} defaultValue={query} onKeyUp={updateQueryFromInput} />
      <button className={styles.button} onClick={updateQueryFromButton}>Search</button>
    </div>
  );
};

export default Search;
