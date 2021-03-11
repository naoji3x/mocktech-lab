import '../styles/globals.css'
import { AuthStateContext, useAuthStateContext } from '../context/auth-state-context';

function MyApp({ Component, pageProps }) {
  return (
    <AuthStateContext.Provider value={useAuthStateContext()}>
      <Component {...pageProps} />
    </AuthStateContext.Provider>
  );
}

export default MyApp
