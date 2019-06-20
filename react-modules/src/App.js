import React from 'react';
import logo from './logo.svg';

import Button from './Button/Button';
import Button1 from './Button1/Button1';
import styles from './App.module.css';


console.log(styles);

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
        <Button data-primary-button="primary"></Button>

        <div data-primary-button="primary">
          <Button />
        </div>

        <div className={styles.primary}>
          <Button />
        </div>

        <Button1 type="success" />
      </header>
    </div>
  );
}

export default App;
