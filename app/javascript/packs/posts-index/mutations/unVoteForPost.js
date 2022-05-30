import gql from 'graphql-tag';

export const unVoteForPostMutation = gql`
  mutation VoteRemove($postId: ID!) {
    voteRemove(postId: $postId) {
      post {
        id
      }
    }
  }
`;