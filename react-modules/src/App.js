import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';

import Button from './Button/Button';

console.log(styles)

function App() {
  return (
    <div className="App">
      <header className={styles.App__header}>
        <img src={logo} className={styles.App_logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Button />

        <div className="button">我是一个带button类名的元素</div>

      </header>
    </div>
  );
}

export default App;
