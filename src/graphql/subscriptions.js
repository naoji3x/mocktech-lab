/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDraft = /* GraphQL */ `
  subscription OnCreateDraft {
    onCreateDraft {
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
export const onUpdateDraft = /* GraphQL */ `
  subscription OnUpdateDraft {
    onUpdateDraft {
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
export const onDeleteDraft = /* GraphQL */ `
  subscription OnDeleteDraft {
    onDeleteDraft {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateKeyword = /* GraphQL */ `
  subscription OnCreateKeyword {
    onCreateKeyword {
      id
      authorId
      value
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateKeyword = /* GraphQL */ `
  subscription OnUpdateKeyword {
    onUpdateKeyword {
      id
      authorId
      value
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteKeyword = /* GraphQL */ `
  subscription OnDeleteKeyword {
    onDeleteKeyword {
      id
      authorId
      value
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreatePostLike = /* GraphQL */ `
  subscription OnCreatePostLike {
    onCreatePostLike {
      id
      postId
      userId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePostLike = /* GraphQL */ `
  subscription OnUpdatePostLike {
    onUpdatePostLike {
      id
      postId
      userId
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePostLike = /* GraphQL */ `
  subscription OnDeletePostLike {
    onDeletePostLike {
      id
      postId
      userId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCommentLike = /* GraphQL */ `
  subscription OnCreateCommentLike {
    onCreateCommentLike {
      id
      userId
      postId
      commentId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCommentLike = /* GraphQL */ `
  subscription OnUpdateCommentLike {
    onUpdateCommentLike {
      id
      userId
      postId
      commentId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCommentLike = /* GraphQL */ `
  subscription OnDeleteCommentLike {
    onDeleteCommentLike {
      id
      userId
      postId
      commentId
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFollowing = /* GraphQL */ `
  subscription OnCreateFollowing {
    onCreateFollowing {
      id
      followerId
      followingId
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFollowing = /* GraphQL */ `
  subscription OnUpdateFollowing {
    onUpdateFollowing {
      id
      followerId
      followingId
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFollowing = /* GraphQL */ `
  subscription OnDeleteFollowing {
    onDeleteFollowing {
      id
      followerId
      followingId
      createdAt
      updatedAt
    }
  }
`;
