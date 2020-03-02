import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MoviesContainer from "./Movies/MoviesContainer";
import MovieDetailContainer from "./Movies/Movie/MovieDetailContainer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/" className="App-link">
            <h1 className="App-title">{"MOVIE DISCOVERY"}</h1>
          </Link>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <MoviesContainer />
            </Route>
            <Route path="/:id">
              <MovieDetailContainer />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
