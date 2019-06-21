import React from 'react';
import CSSModules from "react-css-modules";
import logo from './logo.svg';
import styles from './App.module.css';
import buttonCoverStyles from './button-cover-css.module.css';

import Button from './Button/Button';

console.log(styles);

function App() {
  return (
    <div className="App">
      <header styleName="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link" styleName="underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button />

        <Button styles={ buttonCoverStyles } />
      </header>
    </div>
  );
}

export default CSSModules(App, styles, {allowMultiple: true});

// export default CSSModules(App, styles, options)
// options: https://github.com/gajus/react-css-modules#options 
// 1. allowMultiple => true || false 是否允给同一个元素设置多个CSS模块（即多类）
// 2. handleNotFoundStyleName => throw || log || ignore 
