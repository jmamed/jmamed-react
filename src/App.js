import React from 'react';

import './App.css'
import SocialFollow from "./social/SocialFollow"

class App extends React.Component {

  // componentDidMount() { //ngoninit ish
  //   this.goAngular()
  // }

  goAngular() {
    window.location.href = 'https://jmamed.github.io/jmamed/';
  }

  render() {

    return (
      <div>
        <div className="app">
          <h1>Welcome to Jason Mamed's React App</h1>
          <h3>Learn about me</h3>
          <div className="card">
            <a className="button" href="https://jmamed.github.io/jmamed/"><span><h4>Visit my Angular Website</h4></span></a>
          </div>
        </div>
        <footer>
          <SocialFollow />
        </footer>
      </div>

    );
  }
}

export default App