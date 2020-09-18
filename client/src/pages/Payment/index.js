import React, { useEffect } from 'react';
import PlaidLink from 'react-plaid-link';
import axios from "axios";

const Link = async props => {
  const getLinkToken = async () => {
    const { data } = await axios.post("/auth/create_link_token", {
    });
    console.log(data);
  }

  useEffect(() => {
    getLinkToken();
  },[])

  const onExit = (error, metadata) => console.log('onExit', error, metadata);
  const onEvent = (eventName, metadata) =>
    console.log('onEvent', eventName, metadata);
  const onSuccess = (token, metadata) =>
    console.log('onSuccess', token, metadata);

  return (
    <>
      <PlaidLink
        className="CustomButton"
        // style={{ padding: '20px', fontSize: '16px', cursor: 'pointer' }}
        // token= {}
        // onExit={onExit}
        // onSuccess={onSuccess}
        // onEvent={onEvent}
      >
        Open Link and connect your bank!
      </PlaidLink>
    </>
  );
};

export default Link;
