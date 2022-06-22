import React from "react";
import styles from './Header.module.scss';
import Search from "./Search/Search";

const Header = () => (
  <header className={styles.header}>
    <h1 className={styles.headline}>News API</h1>
    <Search />
  </header>
);

export default Header;
