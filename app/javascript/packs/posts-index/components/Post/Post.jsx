import React from 'react';
import PropTypes from 'prop-types';

const PostComponent = ({ post, onUpvote, isUpvoting }) => {
  return(
    <article className="post">
      <h2>
        <a href={`/posts/${post.id}`}>{post.title}</a>
      </h2>
      <div className="url">
        <a href={post.url}>{post.url}</a>
      </div>
      <div className="tagline">{post.tagline}</div>
      <footer>
        <button onClick={onUpvote.bind(this, post)} disabled={isUpvoting} className={post.isVoted ? "voted" : ""}>{post.isVoted ? "🔽" : "🔼"} {post.votesCount} </button>
        <button>💬 {post.commentsCount}</button>
      </footer>
    </article>
  )
}

PostComponent.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isVoted: PropTypes.boolean,
    commentsCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }),
  isUpvoting: PropTypes.boolean,
  onUpvote: PropTypes.func.isRequired,
}

export default PostComponent;