import Link from 'next/link'
import { Auth, Amplify, withSSRContext } from "aws-amplify";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { listPosts, getPost } from "../../../src/graphql/queries";
import { deletePostAndConnectedData } from "../../../src/graphql/mutations";
import awsExports from "../../../src/aws-exports";
import { useRouter } from "next/router";

Amplify.configure({ ...awsExports, ssr: true });

export async function getStaticPaths() {
  const SSR = withSSRContext();
  const { data } = await SSR.API.graphql({ query: listPosts });
  const paths = data.listPosts.items.map((post)=>({
    params: { id: post.id }
  }));

  return {
    fallback: true,
    paths
  }
}

export async function getStaticProps({ params }) {
  const SSR = withSSRContext();
  const { data } = await SSR.API.graphql({
    query: getPost, 
    variables: { 
      id: params.id,
    }
  });

  return {
    props: {
      post: data.getPost
    }
  };
}

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (<div>Loading&hellip;</div>);
  }

  //
  // 記事を削除
  //
  async function handleDelete() {
    const currentUser = await Auth.currentAuthenticatedUser();
    if(currentUser.username != post.authorId) return;

    console.log(JSON.stringify(post));


    try {
      // 更新系はLambdaのBackend側を呼び出し
      await API.graphql({
        authMode: "AMAZON_COGNITO_USER_POOLS",
        query: deletePostAndConnectedData,
        variables: { postId: post.id }
      });

      //window.location.href = "/home";
      router.push("/home");
    } catch ({ errors }) {
      console.log(JSON.stringify(errors));
      //console.error(...errors);
      //throw new Error(errors[0].message);
    }
  }

  return (
    <AmplifyAuthenticator>
      <div>
        <img src="/images/dummy.svg" alt="thumbnail"/>

        <div>タイトル<br/>{post.title}</div>
        <div>内容<br/>{post.content}</div>

        <div>【詳細URL】</div>
        <div>
          <a href={post.url} target="_blank">
            {post.url}
          </a>
        </div>

          <button onClick={handleDelete}>削除</button>
          <br/>
          <Link href="/home">Home</Link>
      </div>
    </AmplifyAuthenticator>
  );
}

export default Post;
