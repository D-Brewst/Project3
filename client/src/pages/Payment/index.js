// import React, { useCallback } from 'react';
// import { usePlaidLink } from 'react-plaid-link';

// const Link = async () => {
//   const onSuccess = useCallback(async (token, metadata) => {
//     // send token to server
//     await fetch('/get_access_token', {
//       method: 'POST',
//       body: JSON.stringify({ public_token: token }),
//     });
//   }, []);

//   const onEvent = useCallback(
//     (eventName, metadata) => {
//        // Optionally capture Link flow events, streamed through
//     // this callback as your users connect an Item to Plaid.
//     // For example:
//     // eventName = "TRANSITION_VIEW"
//     // metadata  = {
//     //   link_session_id: "123-abc",
//     //   mfa_type:        "questions",
//     //   timestamp:       "2017-09-14T14:42:19.350Z",
//     //   view_name:       "MFA",
//     // }
//     },
//     []
//   );

//   const onExit = useCallback(
//     async (err, metadata) => {
//       // The user exited the Link flow.
//     // if (err != null) {
//       // The user encountered a Plaid API error prior to exiting.
//       // if (err.error_code === 'INVALID_LINK_TOKEN') {
//         // The link_token expired or the user entered too many
//         // invalid credentials. We want to destroy the old iframe
//         // and reinitialize Plaid Link with a new link_token.
//         // handler.destroy();
//         // handler = Plaid.create({
//         //   ...configs,
//         //   token: await fetchLinkToken(),
//     //     });
//     //   }
//     // }
//     },
//     []
//   );

//   const fetchLinkToken = async () => {
//     const response = await fetch('/create_link_token', { method: 'POST' });
//     const responseJSON = await response.json();
//     return responseJSON.link_token;
//   };

//   const config = {
//     token: await fetchLinkToken(),
//     onSuccess,
//     onExit,
//     onEvent,
//     // ...
//   };

//   const { open, ready, error } = usePlaidLink(config);

//   return (
//     <button onClick={() => open()} disabled={!ready}>
//       Connect a bank account
//     </button>
//   );
// };
// export default Link;


import React, { useCallback, useState, useEffect } from 'react';
import { usePlaidLink } from 'react-plaid-link';
import linkToken from "./token.js";
import API from "../../utils/API.js";

const Link = ({linktoken}) => {
  console.log(linktoken);
  const onSuccess = useCallback((token, metadata) => {
    // send token to server
  }, []);

  const config = {
    token: linktoken,
    onSuccess,
    // ...
  };
 
  const { open, ready, error } = usePlaidLink(config);

  return (
    <button onClick={() => open()} disabled={!ready}>
      Connect a bank account
    </button>
  );
};
export default Link;