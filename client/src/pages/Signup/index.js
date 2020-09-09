import React, { useRef } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import axios from "axios";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  // const doSignup = async () => {
  //   const { data } = await axios.post("/auth/register", {

  //     username: userNameRef.current.value,
  //     email: emailRef.current.value,
  //     password: passwordRef.current.value,
  //   });
  const doSignup = async () => {
    console.log(
      "USER",
      usernameRef.current.value,
      "EMAIL",
      emailRef.current.value,
      "PW",
      passwordRef.current.value
    );
    const { data } = await axios.post("/auth/register", {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

    console.log(data);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    doSignup();
    console.log();
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
              <MDBBtn color="primary" type="submit">
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
