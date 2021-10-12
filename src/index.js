/* <JavaScript> */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import M from 'materialize-css'

/* <CSSImport> */ 
import './index.css';
import 'materialize-css/dist/css/materialize.min.css';

/* Components */
import Content from './Content'

/* <Init> */ 
M.AutoInit();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <div>es</div>
        </Route>
      </Switch>


      <Switch>
        <Route path="/c/:id" component={Content}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

