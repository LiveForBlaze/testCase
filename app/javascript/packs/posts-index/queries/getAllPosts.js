import gql from 'graphql-tag';

export const getAllPostsQuery = gql`
  query PostsPage {
    viewer {
      id
    }
    postsAll {
      id
      title
      tagline
      url
      commentsCount
      canBeVoted
      isVoted
      votesCount
    }
  }
`;