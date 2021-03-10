import Head from "next/head";
import { useEffect, useState } from 'react';

export default function Layout({ children }) {
  const [authState, setAuthState] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);

  console.log(authState + ":" + user);

  return (
    <div>
      <Head>
        <title>MockTech Lab</title>
      </Head>

      <div>
        { 
          authState === AuthState.SignedIn && user ? 
            <AmplifySignOut />:<AmplifySignIn /> 
        }
      </div>

      <main>{children}</main>

      <footer><p>MochTechLab, 2021.</p></footer>
    </div>
  );
}
