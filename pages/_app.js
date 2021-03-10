import '../styles/globals.css'
import Amplify from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignUp } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsExports from "../src/aws-exports";
import { useEffect, useState } from 'react';
import { AuthStateContext } from '../context/auth-state-context';

Amplify.configure({ ...awsExports, ssr: true });

function MyApp({ Component, pageProps }) {
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

  return authState === AuthState.SignedIn && user ? (
    <AuthStateContext.Provider value={"SignedIn"}>
      <Component {...pageProps} />
    </AuthStateContext.Provider>
    ) : (
      <AuthStateContext.Provider value={"SignedOut"}>
      <Component {...pageProps} />
    </AuthStateContext.Provider>
    );

      /*
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
  );*/
}

export default MyApp
