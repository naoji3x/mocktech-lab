import { AmplifyAuthenticator, AmplifySignIn } from "@aws-amplify/ui-react";

const SignIn = () => {
  return (
    <AmplifyAuthenticator>
      <AmplifySignIn/>
    </AmplifyAuthenticator>
  );
}

export default SignIn;