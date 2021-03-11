//import { createContext } from "react";


//export const AuthStateContext = createContext("SignedOut");


import { createContext, useEffect, useState } from "react";

const initialState = {
  authState: "SignedOut",
  user: null
};

export const AuthStateContext = createContext(initialState);

export const useAuthStateContext = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  return {
    authState,
    user,
    setAuthState,
    setUser
  };
};
