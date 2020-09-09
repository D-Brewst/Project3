import React, { useRef } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";
import axios from "axios";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const userNameRef = useRef();

  // const doSignup = async () => {
  //   const { data } = await axios.post("/auth/register", {

  //     username: userNameRef.current.value,
  //     email: emailRef.current.value,
  //     password: passwordRef.current.value,
  //   });
  const doSignup = async () => {
    const { data } = await axios.post("/auth/register", {
      username: userNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });

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
              <MDBInput
                label="your user name"
                ref={userNameRef}
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Confirm your email"
                ref={emailRef}
                icon="exclamation-triangle"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your password"
                ref={passwordRef}
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            {/* <div className="text-center">
              <MDBBtn color="primary" type="submit">
                Register
              </MDBBtn>
            </div> */}
            <button type="submit">Submit</button>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default Signup;
