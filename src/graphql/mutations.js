/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      userId
      name
      description
      createdAt
      updatedAt
      drafts {
        nextToken
      }
      posts {
        nextToken
      }
      following {
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      userId
      name
      description
      createdAt
      updatedAt
      drafts {
        nextToken
      }
      posts {
        nextToken
      }
      following {
        nextToken
      }
    }
  }
`;
export const updateDraft = /* GraphQL */ `
  mutation UpdateDraft(
    $input: UpdateDraftInput!
    $condition: ModelDraftConditionInput
  ) {
    updateDraft(input: $input, condition: $condition) {
      id
      authorId
      title
      content
      images
      url
      keywordValues
      createdAt
      updatedAt
    }
  }
`;
export const deleteDraft = /* GraphQL */ `
  mutation DeleteDraft(
    $input: DeleteDraftInput!
    $condition: ModelDraftConditionInput
  ) {
    deleteDraft(input: $input, condition: $condition) {
      id
      authorId
      title
      content
      images
      url
      keywordValues
      createdAt
      updatedAt
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const updateKeyword = /* GraphQL */ `
  mutation UpdateKeyword(
    $input: UpdateKeywordInput!
    $condition: ModelKeywordConditionInput
  ) {
    updateKeyword(input: $input, condition: $condition) {
      id
      authorId
      value
      createdAt
      updatedAt
    }
  }
`;
export const deleteKeyword = /* GraphQL */ `
  mutation DeleteKeyword(
    $input: DeleteKeywordInput!
    $condition: ModelKeywordConditionInput
  ) {
    deleteKeyword(input: $input, condition: $condition) {
      id
      authorId
      value
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      postId
      authorId
      text
      createdAt
      updatedAt
      likes {
        nextToken
      }
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      postId
      authorId
      text
      createdAt
      updatedAt
      likes {
        nextToken
      }
    }
  }
`;
export const updatePostLike = /* GraphQL */ `
  mutation UpdatePostLike(
    $input: UpdatePostLikeInput!
    $condition: ModelPostLikeConditionInput
  ) {
    updatePostLike(input: $input, condition: $condition) {
      id
      postId
      userId
      createdAt
      updatedAt
    }
  }
`;
export const deletePostLike = /* GraphQL */ `
  mutation DeletePostLike(
    $input: DeletePostLikeInput!
    $condition: ModelPostLikeConditionInput
  ) {
    deletePostLike(input: $input, condition: $condition) {
      id
      postId
      userId
      createdAt
      updatedAt
    }
  }
`;
export const updateCommentLike = /* GraphQL */ `
  mutation UpdateCommentLike(
    $input: UpdateCommentLikeInput!
    $condition: ModelCommentLikeConditionInput
  ) {
    updateCommentLike(input: $input, condition: $condition) {
      id
      userId
      postId
      commentId
      createdAt
      updatedAt
    }
  }
`;
export const deleteCommentLike = /* GraphQL */ `
  mutation DeleteCommentLike(
    $input: DeleteCommentLikeInput!
    $condition: ModelCommentLikeConditionInput
  ) {
    deleteCommentLike(input: $input, condition: $condition) {
      id
      userId
      postId
      commentId
      createdAt
      updatedAt
    }
  }
`;
export const updateFollowing = /* GraphQL */ `
  mutation UpdateFollowing(
    $input: UpdateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    updateFollowing(input: $input, condition: $condition) {
      id
      followerId
      followingId
      createdAt
      updatedAt
    }
  }
`;
export const deleteFollowing = /* GraphQL */ `
  mutation DeleteFollowing(
    $input: DeleteFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    deleteFollowing(input: $input, condition: $condition) {
      id
      followerId
      followingId
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      userId
      name
      description
      createdAt
      updatedAt
      drafts {
        nextToken
      }
      posts {
        nextToken
      }
      following {
        nextToken
      }
    }
  }
`;
export const createDraft = /* GraphQL */ `
  mutation CreateDraft(
    $input: CreateDraftInput!
    $condition: ModelDraftConditionInput
  ) {
    createDraft(input: $input, condition: $condition) {
      id
      authorId
      title
      content
      images
      url
      keywordValues
      createdAt
      updatedAt
    }
  }
`;
export const createPost = /* GraphQL */ `
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
export const createKeyword = /* GraphQL */ `
  mutation CreateKeyword(
    $input: CreateKeywordInput!
    $condition: ModelKeywordConditionInput
  ) {
    createKeyword(input: $input, condition: $condition) {
      id
      authorId
      value
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      postId
      authorId
      text
      createdAt
      updatedAt
      likes {
        nextToken
      }
    }
  }
`;
export const createPostLike = /* GraphQL */ `
  mutation CreatePostLike(
    $input: CreatePostLikeInput!
    $condition: ModelPostLikeConditionInput
  ) {
    createPostLike(input: $input, condition: $condition) {
      id
      postId
      userId
      createdAt
      updatedAt
    }
  }
`;
export const createCommentLike = /* GraphQL */ `
  mutation CreateCommentLike(
    $input: CreateCommentLikeInput!
    $condition: ModelCommentLikeConditionInput
  ) {
    createCommentLike(input: $input, condition: $condition) {
      id
      userId
      postId
      commentId
      createdAt
      updatedAt
    }
  }
`;
export const createFollowing = /* GraphQL */ `
  mutation CreateFollowing(
    $input: CreateFollowingInput!
    $condition: ModelFollowingConditionInput
  ) {
    createFollowing(input: $input, condition: $condition) {
      id
      followerId
      followingId
      createdAt
      updatedAt
    }
  }
`;
export const createPostAndKeywords = /* GraphQL */ `
  mutation CreatePostAndKeywords($input: PostInput!) {
    createPostAndKeywords(input: $input) {
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
