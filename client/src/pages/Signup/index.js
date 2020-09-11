import React, { useRef } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { LOGIN } from "../../context/actions";
import { useGlobalContext } from "../../context/GlobalContext";


const Signup = () => {
  const [state, dispatch] = useGlobalContext();
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();
  const history = useHistory();

  // const doSignup = async () => {
  //   const { data } = await axios.post("/auth/register", {

  //     username: userNameRef.current.value,
  //     email: emailRef.current.value,
  //     password: passwordRef.current.value,
  //   });

  const doLogin = async () => {
    //login user and get token back
    const { data } = await axios.post("/auth/login", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    //once we have data/token
    console.log(data);
    //putting that token in local storage using stringify (parse to get back)
    localStorage.setItem("authuser", JSON.stringify(data));

    //putting token in state
    dispatch({
      type: LOGIN,
      user: data,
    });
  };

  const doSignup = async () => {
    console.log(
      "USER",
      usernameRef.current.value,
      "EMAIL",
      emailRef.current.value,
      "PW",
      passwordRef.current.value
    );
    // sign up new user
    const { data } = await axios.post("/auth/register", {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    doLogin();

    // redirecting user to the members page
    const redirect = () => history.push("/members");
    redirect();

    console.log(data);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    doSignup();
  };

  return (
    <MDBContainer className="mt-5 justify-content-center">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <form onSubmit={handleSignup}>
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
              <div className="md-form form-group">
                <i data-test="fa" className="fa fa-user prefix"></i>
                <input
                  data-test="input"
                  type="text"
                  className="form-control validate"
                  aria-disabled="false"
                  ref={usernameRef}
                  required
                />
                <label
                  className="active"
                  data-error="wrong"
                  data-success="right"
                  id=""
                  aria-labelledby=""
                >
                  Your username
                </label>
              </div>
              <div className="md-form form-group">
                <i data-test="fa" className="fa fa-envelope prefix"></i>
                <input
                  data-test="input"
                  type="email"
                  className="form-control validate"
                  aria-disabled="false"
                  ref={emailRef}
                  required
                />
                <label
                  className="active"
                  data-error="wrong"
                  data-success="right"
                  id=""
                  aria-labelledby=""
                >
                  Your email
                </label>
              </div>
              <div className="md-form form-group">
                <i data-test="fa" className="fa fa-lock prefix"></i>
                <input
                  data-test="input"
                  type="password"
                  className="form-control validate"
                  aria-disabled="false"
                  ref={passwordRef}
                  required
                />
                <label
                  className="active"
                  data-error=""
                  data-success=""
                  id=""
                  aria-labelledby=""
                >
                  Your password
                </label>
              </div>
            </div>
            <div className="text-center">
              <MDBBtn
                color="primary"
                type="submit"
                // onClick={() => history.push("/members")}
              >
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default Signup;
