import React from 'react';
import logo from './logo.svg';
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

        <button className={styles.button}>Regular Button</button>
        
        <div className={styles.fun}>
          <button className={styles.button}>FUN BUTTON</button>
        </div>

        <div className={styles.box}>
          <button className={styles.button}>BOX BUTTON</button>
        </div>

        <button className={`${styles.button} ${styles.disabled}`}>Disabled Button</button>
      </header>
    </div>
  );
}

export default App;
