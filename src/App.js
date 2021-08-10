import React from 'react';

import './App.css'
import SocialFollow from "./components/SocialFollow";
import ResumePage from "./components/resume";
import { NavigationBar } from './navbar/NavigationBar';
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import { NoMatch } from './pages/NoMatch';
import TFTHome from './tft_wip_project/tft_home';


class App extends React.Component {

  goAngular() {
    window.location.href = 'https://jmamed.github.io/jmamed/';
  }

  render() {

    return (
      <React.Fragment>
        <div className="app">
          <div id="nav-router" className="navRouter">
            <NavigationBar />
            {/* <Sidebar /> */}
            <Switch>
              <Route exact path="/home" component={ResumePage} />
              <Route exact path="/tft" component={TFTHome} />
              <Route exact path="/tft/dummy" component={TFTHome} />
              <Route component={NoMatch} />
            </Switch>
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