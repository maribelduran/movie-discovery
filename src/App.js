import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MoviesContainer from "./Movies/MoviesContainer";

import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App"></div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/" className="App-link">
          <h1 className="App-title">MOVIE DISCOVERY</h1>
        </Link>
      </header>
      <Switch>
        <Route exact path="/">
          <MoviesContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
