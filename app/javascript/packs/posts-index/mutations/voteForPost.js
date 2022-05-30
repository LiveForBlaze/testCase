import gql from 'graphql-tag';

export const voteForPostMutation = gql`
  mutation VoteAdd($postId: ID!) {
    voteAdd(postId: $postId) {
      post {
        id
      }
    }
  }
`;