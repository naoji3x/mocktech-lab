import '../styles/globals.css'
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignUp } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { AuthContext, useAuthContext } from '../context/auth-context';
import awsExports from "../src/aws-exports";
import { createContext, useContext, useEffect, useState } from 'react';

Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }) {
  /*
  //const [authState, user] = useContext(AuthContext);
  //const [setAuthState, setUser] = useContext(AuthContext);
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    console.log("Here");
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData)
    });
  }, []);

  console.log(authState + ":" + user);
  return (
    <AuthContext.Provider value={useAuthContext()}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
  */

  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    console.log("Here");
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  console.log(authState + ":" + user);
  
  //return <Component {...pageProps} />
  /*
  return (
    <AuthContext.Provider value={useAuthContext()}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
  */

  return authState === AuthState.SignedIn && user ? (
    <Component {...pageProps} />
    ) : (
    <AmplifyAuthenticator>
      <AmplifySignUp
        slot="sign-up"
        formFields={[
          { type: "username" },
          { type: "password" },
          { type: "email" }
        ]}
      />
    </AmplifyAuthenticator>
  );
}

export default MyApp
