/* Amplify Params - DO NOT EDIT
	API_MOCKTECHLABGQL_GRAPHQLAPIENDPOINTOUTPUT
	API_MOCKTECHLABGQL_GRAPHQLAPIIDOUTPUT
	API_MOCKTECHLABGQL_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWSAppSyncClient = require('aws-appsync').default;
const gql = require('graphql-tag');
global.fetch = require('node-fetch');

let graphqlClient;

exports.handler = async (event, context, callback) => {
  console.log(event);
  let env;
  let graphql_auth;

  if ('AWS_EXECUTION_ENV' in process.env && process.env.AWS_EXECUTION_ENV.startsWith('AWS_Lambda_')) {
      //for cloud env
      env = process.env;
      graphql_auth = {
          type: "AWS_IAM",
          credentials: {
              accessKeyId: env.AWS_ACCESS_KEY_ID,
              secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
              sessionToken: env.AWS_SESSION_TOKEN,
          }
      };
  } else {
      // for local mock
      env = {
          API_MOCKTECHLABGQL_GRAPHQLAPIENDPOINTOUTPUT: 'http://localhost:20002/graphql',
          REGION: 'ap-northeast-1',
      }
      graphql_auth = {
          type: "AWS_IAM",
          credentials: {
              accessKeyId: 'mock',
              secretAccessKey: 'mock',
              sessionToken: 'mock',
          }
      };
  }
  console.log(env);
  console.log(graphql_auth);

  if (!graphqlClient) {
      graphqlClient = new AWSAppSyncClient({
          url: env.API_MOCKTECHLABGQL_GRAPHQLAPIENDPOINTOUTPUT,
          region: env.REGION,
          auth: graphql_auth,
          disableOffline: true,
      });
  }

  try {
    // postId
    const postId = event.arguments.postId;

    // get post
    var res = await graphqlClient.query({
      query: gql(getPost),
      fetchPolicy: 'network-only',
      variables: { id: postId }
    });

    // 自分が作ったPostでない場合はnullを返す。
    const post = res.data.getPost;
    if(post == null || post.authorId != event.identity.username) {
      return null;
    }

    // TODO: delete comments
    // TODO: delete likes
    // TODO: delete images

    // delete post
    var res = await graphqlClient.mutate({
      mutation: gql(deletePost),
      variables: { input: { id: postId } }
    });

    console.log(res);
    return res.data.deletePost.id;
  }
  catch (err) {
    console.log('error deleting a post : ', err);
  }
};

const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      authorId
      images
      comments {
        nextToken
      }
      likes {
        nextToken
      }
    }
  }
`;

const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) { id }
  }
`;
