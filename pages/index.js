import { useRouter } from 'next/router';
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Amplify, withSSRContext } from "aws-amplify";
import awsExports from "../src/aws-exports";
import { useState } from 'react';
//import { searchPosts } from "../src/graphql/queries";

Amplify.configure({ ...awsExports, ssr: true });

//
// ランディングページ。ログインなしでも閲覧可能。
//
// TODO: この実装だと最初の100件を取得するだけなので、
// 以降はnextTokenを使用して取ってくる必要あり。
// また、特に表示順序は指定していないので修正要。Amplify-ElasticSearchの連携だとsortがうまくできない。おそらくバグ。
//

export async function getServerSideProps({ req, query = { phrase: null, nextToken: null } }) {
  return {
    props: {
      posts: [],
      nextToken: null
    },
  };
}

/*
export async function getServerSideProps({ req, query = { phrase: null, nextToken: null } }) {
  const SSR = withSSRContext({ req });

  const filter = (query.phrase == null || query.phrase=='')?
    null:{ content: { matchPhrase: query.phrase } };

  const response = await SSR.API.graphql({
    query: searchPosts, variables: {
      filter: filter,
//      sort: { direction: "desc", field: "updatedAt" }, ソートがうまくいかない。
      limit: 20,
      nextToken: query.nextToken,
  }});

  return {
    props: {
      posts: response.data.searchPosts.items,
      nextToken: response.data.searchPosts.nextToken
    },
  };
}
*/

//
// TODO: 一覧を表示する最低限の実装です。
//
export default function Index({ posts = [], nextToken = null }) {
  const router = useRouter();
  const [phrase, setPhrase] = useState(null);

  return (
    <div className={styles.container}>
      <Head>
        <title>MockTech Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>ランディングページ</h1>

        <button onClick={()=>router.push('/home')}>Sign In!</button>
        <br/>

        <input 
          type="text" 
          name="keyword"
          onChange={e => setPhrase(e.target.value)}
          placeholder="キーワードを入力（例：zoom ）"
        />
        <button onClick={()=>router.push(`/?phrase=${phrase}&nextToken=${null}`)}>
          Search
        </button>

        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
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
      </main>
      <footer className={styles.footer}>
        2021 MockTech Lab all right reserved.
      </footer>
    </div>
  )
}
