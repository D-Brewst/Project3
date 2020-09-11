import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Members from "./pages/Members/index";
import Signup from "./pages/Signup/index";
import Footer from "./components/Footer/index";
import { LOGIN, LOGOUT } from "./context/actions";
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
        {state.user?.token ? (
          <MDBNavItem>
            <MDBNavLink className="black-text" to="/">
              <span onClick={logOut}>Log Out</span>{" "}
            </MDBNavLink>
          </MDBNavItem>
        ) : (
          <MDBNavItem>
            <MDBNavLink className="black-text justify-content-end" to="/login">
              Login
            </MDBNavLink>
          </MDBNavItem>
        )}
        <MDBNavItem>
          <MDBNavLink className="black-text justify-content-end" to="/signup">
            Sign Up
          </MDBNavLink>
        </MDBNavItem>
      </MDBNav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login">
          {state.user?.token ? <Redirect to="/members" /> : <Login />}
        </Route>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/members">
          {!state.user?.token ? <Redirect to="/members" /> : <Members />}
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
