import React, { useCallback, useState, useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";
import linkToken from "./token.js";
import API from "../../utils/API.js";
import axios from "axios";
import { MDBBtn } from "mdbreact";
import "./payment.css";

const Link = () => {
  const [state, setState] = useState("");

  const email = JSON.parse(localStorage.getItem("authuser")).email;
  // console.log(this.email)

  const axGet = async () => {
    const { data } = await axios.post("/create_link_token", {
      email: email,
    });
    console.log(data.link_token);
    setState((state) => (state = data.link_token));
    return data.link_token;
  };

  // axGet();
  console.log(state);

  // const getLinkToken = async () => {
  //     // const response = await fetch('/auth/create_link_token', { method: 'POST' });
  //     const response = await fetch("/create_link_token", {
  //       method: 'POST',
  //       body: JSON.stringify({email: email}),
  //     });
  //     const responseJSON = await response.json();
  //     setState((state) => state = responseJSON.link_token);
  //     return responseJSON.link_token;
  // }

  useEffect(() => {
    axGet();
  }, []);

  const onSuccess = useCallback(async (token, metadata) => {
    // send token to server
    await axios.post("/get_access_token", {
      public_token: token,
      accountId: metadata.account_id,
    });
  }, []);

  const config = {
    token: state,
    onSuccess,
    // ...
  };

  const { open, ready, error } = usePlaidLink(config);

  return (
    <div id="paymentwording">
      <h1>Send Money Seamlessly With WyldCard</h1>
      <hr></hr>
      <p>
        WyldCard teamed up with Plaid to allow users like you to send money with
        a personalized card. No need to jump through hoops in order to attach
        the gift of money with a card. The button below will prompt your bank
        login.
      </p>
      <p id="btn">
        <MDBBtn onClick={() => open()} disabled={!ready}>
          Connect a bank account
        </MDBBtn>
      </p>
    </div>
  );
};
export default Link;
