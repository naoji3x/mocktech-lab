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

    // エラー処理の例
    if(event.arguments.input.content.length > 4000) {
        callback('content length is over 4000', null);
    }

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


    //post to the origin
    const postInput = {
        mutation: gql(createPost),
        variables: {
            input: {
              authorId: event.identity.username,
              title: event.arguments.input.title,
              content: event.arguments.input.content,
              url: event.arguments.input.url,
              images: [],
              keywordValues: []
            },
        },
    };

    const res = await graphqlClient.mutate(postInput);
    console.log(res);
    const post = res.data.createPost;
    return post;
};

const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      authorId
      title
      content
      images
      url
      keywordValues
      createdAt
      updatedAt
      comments {
        nextToken
      }
      likes {
        nextToken
      }
    }
  }
`;
