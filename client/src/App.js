import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/Navbar';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Members from "./pages/Members";
import Signup from "./pages/Signup";

function App() {
  return (
  <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/" component={Signup} />
          <Route exact path="/members" component={Members} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
