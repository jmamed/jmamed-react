import React from 'react';
import styled from 'styled-components';
import { TFTNoMatch } from './tft_no_match';
import { TFTNavBar } from './tft_navbar';
import TFTHome from './tft_home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;
export const TFTProject = () => (
  <Wrapper>
    <h2>TFT Project WIP</h2>
    <Router>
      <TFTNavBar />
      <Switch>
        <Route exact path="/jmamed-react/tft" component={TFTHome} />
        <Route path="/jmamed-react/tftdummy" component={TFTHome} />
        <Route path="/jmamed-react/tftdummy" component={TFTHome} />
        <Route path="/jmamed-react/tftdummy" component={TFTHome} />
        <Route path="/jmamed-react/tftdummy" component={TFTHome} />
        <Route component={TFTNoMatch} />
      </Switch>
    </Router>
  </Wrapper>
  
)