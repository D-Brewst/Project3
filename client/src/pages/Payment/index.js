import React, { useCallback, useState, useEffect } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import linkToken from "./token.js";
import API from "../../utils/API.js";
import axios from "axios";
import { MDBBtn } from "mdbreact";

const Link = () => {
  const [state, setState] = useState("");

  const email = JSON.parse(localStorage.getItem("authuser")).email;
  // console.log(this.email)

  const axGet = async() => {
    const { data } = await axios.post("/create_link_token", {
    email: email,
  });
  console.log(data.link_token);
  setState((state) => state = data.link_token);
  return data.link_token;
}

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
  },[])

  const onSuccess = useCallback(async(token, metadata) => {
    // send token to server
    await axios.post('/item/public_token/exchange', {
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
    <MDBBtn onClick={() => open()} disabled={!ready}>
      Connect a bank account
    </MDBBtn>
  );
};
export default Link;