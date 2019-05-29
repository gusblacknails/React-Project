import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home";
import { NoMatch } from "./NoMatch";
import { Details } from "./Details";
import { NavigationBar } from "./components/navigationBar.js";
import "./home.css";

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Details" component={Details} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
