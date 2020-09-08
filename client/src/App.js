import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
// import NavBar from "./components/Navbar";
=======
>>>>>>> e6c6fd5b071aa5be09d29fe8603e882e65c7f4a1
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
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/members" component={Members} />
        </Switch>
      </div>
    </Router>
  );
}

// React.useEffect(() => {
//   axios
//     .get("https://api.inferkit.com/v1/models/standard/generate")
//     .then((response) => {
//       console.log(response.data.results);

export default App;
