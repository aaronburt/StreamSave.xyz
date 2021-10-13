import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Wrapper from './partials/wrapper';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/v/:id" component={Wrapper} />
      </Switch>
    </Router>
  </React.StrictMode> ,
  document.getElementById('root')
);
