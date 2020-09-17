import React from 'react';
import API from "../../utils/API";
import { PlaidLink } from 'react-plaid-link';

const Link = props => {
  const onExit = (error, metadata) => console.log('onExit', error, metadata);
  const onEvent = (eventName, metadata) =>
    console.log('onEvent', eventName, metadata);
  const onSuccess = (token, metadata) =>
    console.log('onSuccess', token, metadata);

    const [state, setState] = React.useState({linkToken: ""});
    
    React.useEffect(() => {
    API.getLinkToken().then((res) => {
        setState((state) => ({
        ...state,
        linkToken: res,
        }));
    });
    }, []);

  return (
    <>
      <PlaidLink
        className="CustomButton"
        style={{ padding: '20px', fontSize: '16px', cursor: 'pointer' }}
        token={state.linkToken}
        onExit={onExit}
        onSuccess={onSuccess}
        onEvent={onEvent}
      >
        Open Link and connect your bank!
      </PlaidLink>
    </>
  );
};

export default Link;