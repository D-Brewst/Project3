import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Members from "./pages/Members";
import Signup from "./pages/Signup";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
<<<<<<< HEAD
  MDBIcon,
} from "mdbreact";

function App() {
  return (
    <Router>
      <MDBNavbar color="black" dark expand="md">
        <MDBNavbarBrand>WILDCARD</MDBNavbarBrand>
=======
} from "mdbreact";
function App() {
  return (
    <Router>
      <MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
>>>>>>> 49d37c51a9f76d4580acdf792abd0b4bcd801c49
        <MDBNavbarNav left>
          <MDBNavItem active>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/login">Login</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
<<<<<<< HEAD
            <MDBNavLink to="/signup">Sign Up</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/members">Members</MDBNavLink>
=======
            <MDBNavLink to="/signup">Signup</MDBNavLink>
>>>>>>> 49d37c51a9f76d4580acdf792abd0b4bcd801c49
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
