import { Amplify } from "aws-amplify";
import { Authenticator } from 'aws-amplify-react';
import HomeOrPosts from "../components/home-or-posts";
import awsExports from "../src/aws-exports";
Amplify.configure({...awsExports });

//
// TODO: Signin状態に応じて、ページを遷移する実装です。この実装で正しいかどうかは要確認。
//
export default function Index() {

  return (
    <Authenticator hideDefault={true}>
      <HomeOrPosts/>
    </Authenticator>
  );
}
