import React, { useRef } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { useGlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import { LOGIN } from "../../context/actions";

const Login = () => {
  const [state, dispatch] = useGlobalContext();

  const logemailRef = useRef();
  const logpasswordRef = useRef();
  //putting in local storage AND state
  const doLogin = async () => {
    //login user and get token back
    const { data } = await axios.post("/auth/login", {
      email: logemailRef.current.value,
      password: logpasswordRef.current.value,
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

  const handleSubmit = (e) => {
    e.preventDefault();
    doLogin();
  };

  return (
    <MDBContainer className="mt-5 justify-content-center">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <form onSubmit={handleSubmit}>
            <p className="h5 text-center mb-4">Login</p>
            <div className="grey-text">
              <div className="md-form form-group">
                <i data-test="fa" className="fa fa-envelope prefix"></i>
                <input
                  data-test="input"
                  type="email"
                  className="form-control validate"
                  aria-disabled="false"
                  ref={logemailRef}
                />
                <label
                  className="active"
                  data-error="wrong"
                  data-success="right"
                  id=""
                  aria-labelledby=""
                >
                  Type your email
                </label>
              </div>
              <div className="md-form form-group">
                <i data-test="fa" className="fa fa-lock prefix"></i>
                <input
                  data-test="input"
                  type="password"
                  className="form-control validate"
                  aria-disabled="false"
                  ref={logpasswordRef}
                />
                <label
                  className="active"
                  data-error=""
                  data-success=""
                  id=""
                  aria-labelledby=""
                >
                  Type your password
                </label>
              </div>
            </div>
            <div className="text-center">
              <MDBBtn type="submit">Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
