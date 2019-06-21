import React from 'react';
import logo from './logo.svg';
import appStyle from './App.css';
import fooStyle from './foo.css';

function App() {
  return (
    <div styleName="App">
      <header styleName="App-header">
        <img src={logo} styleName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          styleName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="active"
        >
          Learn React
        </a>
        <div styleName="appStyle.active">active class in App.css</div>
        <div styleName="fooStyle.active">active class in foo.css</div>
      </header>
    </div>
  );
}

export default App;
