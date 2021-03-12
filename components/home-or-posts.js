import { useRouter } from 'next/router';
import { useEffect } from 'react';

const HomeOrPosts = (props)=> {
  const router = useRouter();

  useEffect(() => {
    if(props.authState === 'signedIn' && props.authData) {
      console.log("redirect to home");
      router.replace('/home');
    }
    else {
      console.log("redirect to posts");
      router.replace('/posts');
    }
  });
  return <></> 
}

export default HomeOrPosts
