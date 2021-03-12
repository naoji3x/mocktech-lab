import Head from 'next/head'
import Link from 'next/Link'
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css'
import { Amplify, withSSRContext } from "aws-amplify";
import awsExports from "../src/aws-exports";
import { listPosts } from "../src/graphql/queries";

Amplify.configure({ ...awsExports, ssr: true });

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

//
// TODO: 一覧を表示する最低限の実装です。
//
export default function Posts({ posts = [], nextToken = null }) {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>MockTech Lab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button onClick={()=>router.push('/home')}>Sign In!</button>
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
