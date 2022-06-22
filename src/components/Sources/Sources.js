import React, {useContext, useEffect, useState} from "react";
import styles from "./Sources.module.scss";
import {loadSources} from "./Sources.service";
import Message from "../Message/Message";
import key from 'weak-key';
import {StoreContext} from "../../store";

const FAILED_FETCH_MESSAGE = 'Failed to fetch sources.';

const Source = ({id, name, isChecked, onChange}) => (
  <li className={styles.source}>
    <input className={styles.checkbox}
           id={id} type="checkbox"
           name={`source-${name}`}
           checked={isChecked}
           onChange={() => onChange(id)}
    />
    <label htmlFor={id}>{name}</label>
  </li>
);


const Sources = () => {
  const {state, updateSources} = useContext(StoreContext);
  const {sources} = state;
  const [sourcesList, setSourcesList] = useState();

  const fetchData = async () => {
    try {
      const src = await loadSources();
      setSourcesList(src);
    } catch (e) {
      setSourcesList([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderSources = () => {
    if (!sourcesList || !sourcesList.length) {
      return <Message message={FAILED_FETCH_MESSAGE}/>
    }

    return (
      <ul className={styles.sources}>
        {sourcesList.map((source) => (
          <Source {...source}
                  key={key(source)}
                  isChecked={sources.indexOf(source.id) !== -1}
                  onChange={(value) => updateSources(value)}/>
        ))}
      </ul>
    );
  };

  return (
    <aside className={styles.menu}>
      <h3 className={styles.menuTitle}>Sources</h3>
      {renderSources()}
    </aside>
  );
}

export default Sources;
