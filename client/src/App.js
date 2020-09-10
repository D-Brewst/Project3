import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Members from "./pages/Members/index";
import Signup from "./pages/Signup/index";
import Footer from "./components/Footer/index";
import {
  MDBNavbar,
  MDBNav,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import { useGlobalContext } from "./context/GlobalContext";
import logo from "./images/candle_2.svg";

function App() {
  const [state, dispatch] = useGlobalContext();

  return (
    <div className="App">
      {state.user.token ? (
        <Router>
          <div className="logo">
            {" "}
            <MDBNavLink to="/">
              <img width="50px" src={logo} alt="" />
            </MDBNavLink>
          </div>
          <MDBNav className="nav-class justify-content-end" dark expand="md">
            {/* <MDBNavItem className="black-text" active>
                <MDBNavLink className="black-text" to="/">
                  Home
                </MDBNavLink>
              </MDBNavItem> */}
            <MDBNavItem>
              <MDBNavLink className="black-text" to="/members">
                Members
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="black-text" to="/">
                Log Out
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/members" component={Members} />
          </Switch>
        </Router>
      ) : (
        <Router>
          <div className="logo">
            {" "}
            <MDBNavLink to="/">
              <img width="50px" src={logo} alt="" />
            </MDBNavLink>
          </div>
          <MDBNav className="nav-class justify-content-end" dark expand="md">
            {/* <MDBNavItem className="justify-content-end" active>
              <MDBNavLink className="black-text justify-content-end" to="/">
                Home
              </MDBNavLink>
            </MDBNavItem> */}
            <MDBNavItem>
              <MDBNavLink
                className="black-text justify-content-end"
                to="/login"
              >
                Login
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink
                className="black-text justify-content-end"
                to="/signup"
              >
                Sign Up
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </Router>
      )}
      <Footer />
    </div>
  );
}

export default App;
