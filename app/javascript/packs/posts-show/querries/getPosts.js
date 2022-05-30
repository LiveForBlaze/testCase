import gql from 'graphql-tag';

export const getPostsQuery = gql`
  query PostsPage {
    viewer {
      id
    }
    postsAll {
      id
      description
      title
      tagline
      votesCount
      url
      commentsCount
      dailyFeedPosition
      weeklyFeedPosition
      image(width: 60, height: 60)
      user {
        id
        name
        image(height: 50, width: 50)
      }
      makers {
        image(height: 50, width: 50)
      }
      commenters {
        image(height: 50, width: 50)
      }
      comments {
        id
        text
        user {
          name
          username
          image(height: 50, width: 50)
        }
      }
    }
  }
`;