import '../styles/globals.css'
import { AmplifyAuthenticator, AmplifySignUp } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { useEffect, useState } from 'react';
import { AuthStateContext } from '../context/auth-state-context';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
  /*
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
  */
}

export default MyApp
