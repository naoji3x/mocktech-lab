import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import { Auth, Amplify, withSSRContext } from "aws-amplify";
import { AmplifyAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import awsExports from "../src/aws-exports";
import { listPosts } from "../src/graphql/queries";

Amplify.configure({ ...awsExports, ssr: true });

//
// ログイン後のホームページ。
// SSRで実装しているが、ログイン後なのでSPAでの実装でも問題ないか。
//

//
// TODO: この実装だと最初の100件を取得するだけなので、
// 以降はnextTokenを使用して取ってくる必要あり。
// また、特に表示順序は指定していないので修正要。
//
export async function getServerSideProps({ req }) {
  const SSR = withSSRContext({ req });
  const response = await SSR.API.graphql({
    query: listPosts, 
    variables: {
      limit: 100
    }
  });

  return {
    props: {
      posts: response.data.listPosts.items,
      nextToken: response.data.listPosts.nextToken
    },
  };
}

export default function Home({ posts = [], nextToken = null }) {
  const router = useRouter();

  // サインアウトしたときに一覧表示に飛ばす。一瞬、Sign-in画面が表示されるのでもっといい実装がありそう。
  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      if(nextAuthState === AuthState.SignedOut) {
        router.push('/');
      }
    });
  }, []);

  return (
    <AmplifyAuthenticator>
      <AmplifySignOut/>
      <div className={styles.container}>
        <Head>
          <title>MockTech Lab</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1>ホーム</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <Link href="/home/posts/[id]"
                  as={`/home/posts/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
                <br />
                  {post.id}
                <br />
                  {post.content.substr(0, 150)}
                  {(post.content.length > 150)?<span>&hellip;</span>:""}
                <br />
                {post.updatedAt}
                <br />
                {post.authorId}
              </li>
            ))}
          </ul>

          <Link href="/home/posts/new" passHref>
            <button>新規投稿</button>
          </Link>
        </main>
        <footer className={styles.footer}>
          2021 MockTech Lab all right reserved.
        </footer>
      </div>
  </AmplifyAuthenticator>
  )
}
