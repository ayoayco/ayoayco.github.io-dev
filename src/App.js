import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ayo Ayco</h1>
          <p>Software Engineer</p>
        </header>
        <div className="App-content">
            <h2>
                 I know, I know.
            </h2>
            <p className="App-intro">
                This website doesn't look much at right now, but this is just temporary while I work on a new one.
            </p>
            <p className="App-intro">
                I had to bring down my old website to move to a new home that does not allow the old technologies I used to build it.
            </p>
            <p className="App-footer">
                Want more details? Geeky much?<br />I'll write about it soon on my blog: <a href="https://fullhacker.com">Full Hacker</a>.
            </p>
        </div>
      </div>
    );
  }
}

export default App;
