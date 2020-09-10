import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Members from "./pages/Members/index";
import Signup from "./pages/Signup/index";
import { LOGIN, LOGOUT } from "./context/actions";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import { useGlobalContext } from "./context/GlobalContext";

function App() {
  const [state, dispatch] = useGlobalContext();
  //check if there is authenticated user
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("authuser")) || {};
    if (user.token) {
      dispatch({
        type: LOGIN,
        user: user,
      });
    }
  }, []);

  function logOut() {
    localStorage.removeItem("authuser");
    dispatch({
      type: LOGOUT,
    });
  }
  return (
    <div className="App">
      {state.user.token ? (
        <Router>
          <MDBNavbar color="black" dark expand="md">
            <MDBNavbarBrand>WILDCARD</MDBNavbarBrand>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="/">Home</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/members">Members</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <span onClick={logOut}>Log Out</span>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBNavbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/members" component={Members} />
          </Switch>
        </Router>
      ) : (
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
            </MDBNavbarNav>
          </MDBNavbar>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
