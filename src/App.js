import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./route/Home";
import Detail from "./route/Detail";
import Navbar from "./component/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
