import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Auth, Amplify, API, } from "aws-amplify";
import { createPostAndKeywords } from "../../src/graphql/mutations";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import awsExports from "../../src/aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

//
// 記事の作成
//
async function handleCreatePost(post) {
  const currentUser = await Auth.currentAuthenticatedUser();
  console.log("username = " + currentUser.username);

  try {
    // TODO: 更新系はLambdaでBackend側で実装。
    // この実装だとusernameを偽装できてしまうのでNG。
    var { data } = await API.graphql({
      authMode: "AMAZON_COGNITO_USER_POOLS",
      query: createPostAndKeywords,
      variables: {
        input: {
          title: post.title,
          content: post.content,
          url: post.url,
          keywordValues: []
        }
      },
    });

    const postID = data.createPostAndKeywords.id;

    window.location.href = `/posts/${postID}`;
  } catch ({ errors }) {
    console.error(...errors);
    throw new Error(errors[0].message);
  }
}

const New = () => {
  return(
    <AmplifyAuthenticator>
      <Formik
        initialValues={{
          title: "",
          content: "",
          url: ""
        }}
        validationSchema={ Yup.object({
          title: Yup.string()
            .required('レポート名称の入力は必須です。'),
          content: Yup.string()
            .required('内容の入力は必須です。'),
          url: Yup.string().url('URLを正しく入力して下さい。')
        })}
        onSubmit={(values, { setSubmitting }) => {
          handleCreatePost(values);
          setSubmitting(false);
        }}>
          <Form>
            <div>実践事例レポート名称</div>
            <div>実践事例レポートのタイトルや、サイト名を記入してください。</div>
            <Field name="title"/>
            <ErrorMessage name="title" component="div"/>

            <div>実践事例レポートの内容詳細</div>
            <div>他の先生が、事例を検索しやすいように、なるべく詳細に記載してください。
            （冒頭の概要など全て貼り付けていただいても結構です。）</div>
            <Field as="textarea" name="content"/>
            <ErrorMessage name="content" component="div"/>

            <div>実践事例レポートURL</div>
            <Field name="url"/>
            <ErrorMessage name="url" component="div"/>
          <br/>
          <button type="submit">登録</button>
        </Form>
      </Formik>
    </AmplifyAuthenticator>
  );
}
export default New;