import { Amplify, withSSRContext } from "aws-amplify";
import { listPosts, getPost } from "../../src/graphql/queries";
import awsExports from "../../src/aws-exports";
import { useRouter } from "next/router";

Amplify.configure({ ...awsExports, ssr: true });

//
// SSRで実装
//

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

  return (
    <div>
      <img src="../images/dummy.svg" alt="thumbnail"/>

      <div>タイトル<br/>{post.title}</div>
      <div>内容<br/>{post.content}</div>

      <div>【詳細URL】</div>
      <div>
        <a href={post.url} target="_blank">
          {post.url}
        </a>
      </div>
    </div>
  );
}

export default Post;
