import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';

import Button from './Button/Button';
import cn from 'classnames';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button />

        <div className={styles.composeClass}>合并别的文件中的类</div>

        <div className={cn(styles.border, styles.box)}>classnames模块</div>
      </header>
    </div>
  );
}

export default App;
