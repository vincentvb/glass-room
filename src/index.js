import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import About from './About';
import Header from './header';
import Timeline from './Timeline';
import * as serviceWorker from './serviceWorker';
import HomePage from './HomePage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.Fragment>
    <Header />
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/timeline" exact component={Timeline} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Router>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
