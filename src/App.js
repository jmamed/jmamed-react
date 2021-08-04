import React from 'react';

import './App.css'
import SocialFollow from "./social/SocialFollow"
import ResumePage from "./resume/resume"

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
          <div className="card">
            <a className="button" href="https://jmamed.github.io/jmamed/"><span><h4 className="webButton">Angular Website</h4></span></a>
          </div>
          <span className="separator"></span>
          <div className="card">
            <ResumePage />
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