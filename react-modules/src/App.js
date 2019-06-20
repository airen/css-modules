import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import Button from './Button/Button';

console.log(styles);

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className="App-logo" alt="logo" />
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

        <div className={`${styles.primary} button`} role="button">Primary Button</div>
      </header>
    </div>
  );
}

export default App;
