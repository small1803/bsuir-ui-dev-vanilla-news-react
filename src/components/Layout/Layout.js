import React from "react";
import styles from './Layout.module.scss';
import {StoreProvider} from "../../store";
import News from "../News/News";
import Sources from "../Sources/Sources";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <StoreProvider>
      <Header />
      <div className={styles.container}>
        <Sources />
        <News />
      </div>
    </StoreProvider>
  );
};

export default Layout;
