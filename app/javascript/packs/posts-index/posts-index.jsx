import React, { useEffect } from 'react';
import { useQuery, useMutation } from 'react-apollo';
import renderComponent from '../utils/renderComponent';
import { getAllPostsQuery } from './queries/getAllPosts';
import { voteForPostMutation } from './mutations/voteForPost';
import { unVoteForPostMutation } from './mutations/unVoteForPost';
import Post from './components/Post';

function PostsIndex() {
  const { data, loading, error, refetch } = useQuery(getAllPostsQuery, { fetchPolicy: "no-cache" });
  const [vote, voteResponse] = useMutation(voteForPostMutation);
  const [unVote, unVoteResponse] = useMutation(unVoteForPostMutation);
  const isUpvoting = voteResponse.loading || unVoteResponse.loading || loading;

  useEffect(() => {
    if(
      (voteResponse.called && !voteResponse.error) ||
      (unVoteResponse.called && !unVoteResponse.error)
      ) {
      refetch()
    }
  }, [voteResponse, unVoteResponse]);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const handleUpvote = (post) => {
    if(!data.viewer) {
      window.location.href += "users/sign_up";
    } else if(post.isVoted) {
      unVote({ variables: { postId: post.id }})
    } else {
      vote({ variables: { postId: post.id }});
    }
  };

  return (
    <div className="box">
      {data.postsAll.map((post) => <Post key={post.id} post={post} onUpvote={handleUpvote} disabled={isUpvoting} /> )}
    </div>
  );
}

renderComponent(PostsIndex);
