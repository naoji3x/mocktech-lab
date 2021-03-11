import Head from "next/head";
import Link from 'next/Link'
//import { useEffect, useState } from 'react';
//import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { AmplifyAuthenticator, AmplifySignIn, AmplifySignUp, AmplifySignOut, AmplifyGreetings } from "@aws-amplify/ui-react";
import { Authenticator, SignIn, SignUp, SignOut, ConfirmSignUp, Greetings } from 'aws-amplify-react';
import { createContext, useContext } from 'react';
import { AuthStateContext, useAuthStateContext } from "../context/auth-state-context";
import Auth from "@aws-amplify/auth";

const AlwaysOn = (props) => {
  /*
  const [authState] = useContext(AuthStateContext);
  const { setAuthState, setUser}  = useContext(AuthStateContext);

  if(props.authState === 'signedIn' && props.authData) {
    setAuthState('SignedIn');
    setUser(props.authData);
  }
  else if(props.authState === 'signedUp') {
    setAuthState('SignedUp');
    setUser(null);
  }
  else {
    setAuthState('SignedOut');
    setUser(null);
  }
  */

  return props.authState === 'signedIn' && props.authData?<SignOut/>:<button>Sign in/Sign up</button>
}

export default function Layout({ children }) {
  const [authState] = useContext(AuthStateContext);

  function handleAuthStateChange(state) {
    console.log(state);
    if (state === 'signedIn') {
        /* Do something when the user has signed-in */
    }
  }

/*  
<Authenticator hideDefault={true} onStateChange={handleAuthStateChange}>
  <AlwaysOn/>
  <SignIn/>
  <SignUp/>
  <ConfirmSignUp/>
</Authenticator>
*/

return (
    <div>
      <Head>
        <title>MockTech Lab</title>
      </Head>

      <AmplifyAuthenticator>
        <AmplifySignIn slot="federated-buttons"/>
        <AmplifySignOut/>
        <AmplifyGreetings username={Auth.currentAuthenticatedUser()}/>
      </AmplifyAuthenticator>

      <main>{children}</main>

      <footer><p>MochTechLab, 2021.</p></footer>
    </div>
  );
}
