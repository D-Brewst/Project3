import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
<<<<<<< HEAD

=======
>>>>>>> 49d37c51a9f76d4580acdf792abd0b4bcd801c49
const Signup = () => {
  return (
    <MDBContainer className="mt-5 justify-content-center">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <form>
            <p className="h5 text-center mb-4">Sign up</p>
            <div className="grey-text">
              <MDBInput
                label="Your name"
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
                icon="exclamation-triangle"
                group
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                label="Your password"
                icon="lock"
                group
                type="password"
                validate
              />
            </div>
            <div className="text-center">
              <MDBBtn color="primary">Register</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
<<<<<<< HEAD

=======
>>>>>>> 49d37c51a9f76d4580acdf792abd0b4bcd801c49
export default Signup;
