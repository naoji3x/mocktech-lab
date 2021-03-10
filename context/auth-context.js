import { createContext, useEffect, useState } from "react";
//import { AuthState } from '@aws-amplify/ui-components';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';

const initialState = {
  authState: AuthState.SignOut,
  user: null
};

export const AuthContext = createContext(initialState);

export const useAuthContext = () => {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  /*
  useEffect(() => {
    console.log("Here");
    return onAuthUIStateChange((nextAuthState, authData) => {
      console.log(nextAuthState + ":" + authData);
      setAuthState(nextAuthState);
      setUser(authData)
    });
  }, []);*/

  return {
    authState,
    user
  };
};
