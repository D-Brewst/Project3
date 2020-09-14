import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import About from './pages/About/index';
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import Members from "./pages/Members/index";
import Sample from "./pages/Sample/index";
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
    <div className="App">
      {state.user.token ? (
        <Router>
          <div className="logo">
            <MDBNavLink to="/">
              <span>
                {" "}
                <img width="50px" src={logo} alt="" />{" "}
              </span>
            </MDBNavLink>
          </div>
          <MDBNav className="nav-class justify-content-end" expand="md">
            {/* <MDBNavItem className="black-text" active>
                <MDBNavLink className="black-text" to="/">
                  Home
                </MDBNavLink>
              </MDBNavItem> */}
            <MDBNavItem>
              <MDBNavLink className="black-text" to="/members">
                <span>Members</span>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="black-text" to="/about">
                <span>About</span>
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="black-text" to="/sample">
                Sample Messages
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="black-text" to="/">
                <span onClick={logOut}>Log Out</span>{" "}
              </MDBNavLink>
            </MDBNavItem>
          </MDBNav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/members" component={Members} />
            <Route exact path="/sample" component={Sample} />
            <Route exact path="/about" component={About} />
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
                <MDBNavLink className="black-text" to="/about">
                  <span>About</span>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="black-text" to="/sample">
                  Sample Messages
              </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  className="black-text justify-content-end"
                  to="/login"
                >
                  <span> Login </span>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink
                  className="black-text justify-content-end"
                  to="/signup"
                >
                  <span> Sign Up </span>
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/sample" component={Sample} />
              <Route exact path="/login">
                {state.user?.token ? <Redirect to="/members" /> : <Login />}
              </Route>
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/members">
                {!state.user?.token ? <Redirect to="/members" /> : <Members />}
              </Route>
              <Route exact path="/about" component={About} />
            </Switch>

            {/* <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login}>
              {state.user?.token ? <Redirect to="/members" /> : <Login />}
            </ Route>
            <Route exact path="/signup" component={Signup}>
              {state.user?.token ? <Redirect to="/login" /> : <Signup />}
            </ Route>
          </Switch> */}
          </Router>
        )}
      <Footer />
    </div>
  );
}

export default App;
