import React, { useReducer, createContext, useContext} from "react";
import {
  LOGIN,
  LOGOUT,
  Messages
} from "./actions";

// create the context
const GlobalContext = createContext();
// get the provider from the new context
const { Provider } = GlobalContext;

const reducer = (state, action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case LOGOUT: 
      return {
        ...state,
        user: {},
      }
    case LOGIN:
      return {
        ...state,
        user: action.user
      };
    case Messages:
      return {
        ...state,
        messages: action.Messages
      }
    default:
      return state;
  }
}

const GlobalProvider = ({value=[], ...props}) => {
  const [state, dispatch] = useReducer(reducer, {
    user: {}
  })
  return <Provider value={[state,dispatch]} {...props} />
}

const useGlobalContext = () => {
  return useContext(GlobalContext);
} 

export {
  useGlobalContext, 
  GlobalProvider
}