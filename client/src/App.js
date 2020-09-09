import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Members from "./pages/Members/index";
import Signup from "./pages/Signup/index";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";

function App() {
  return (
    <Router>
      <MDBNavbar color="black" dark expand="md">
        <MDBNavbarBrand>WILDCARD</MDBNavbarBrand>
        <MDBNavbarNav left>
          <MDBNavItem active>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/login">Login</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/signup">Sign Up</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/members">Members</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </MDBNavbar>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/members" component={Members} />
      </Switch>
    </Router>
  );
}

export default App;
