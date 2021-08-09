import React from 'react';

import './App.css'
import SocialFollow from "./components/SocialFollow";
import ResumePage from "./components/resume";
import { NavigationBar } from './navbar/NavigationBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { HashRouter as Router, Route, Switch } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NoMatch } from './pages/NoMatch';
import { TFTProject } from './tft_wip_project/TFTProject';

class App extends React.Component {

  // componentDidMount() { //ngoninit ish
  //   this.goAngular()
  // }

  goAngular() {
    window.location.href = 'https://jmamed.github.io/jmamed/';
  }

  render() {

    return (
      <React.Fragment>
        <div className="app">
          <div id="nav-router" className="navRouter">
            {/* <Router basename={process.env.PUBLIC_URL}> */}
            <Router>
              <NavigationBar />
              {/* <Sidebar /> */}
              <Switch>
                <Route exact path="/jmamed-react" component={ResumePage} />
                <Route path="/jmamed-react/tft" component={TFTProject} />
                <Route path="/jmamed-react/tftdummy" component={TFTProject} />
                <Route component={NoMatch} />
              </Switch>
            </Router>
          </div>
          <span className="separator"></span>
          <footer>
            <SocialFollow />
          </footer>
        </div>
      </React.Fragment>
    );
  }
}

export default App