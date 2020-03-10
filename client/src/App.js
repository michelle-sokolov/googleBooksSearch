import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Detail} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/search/" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
