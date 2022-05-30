import React from 'react';
import PropTypes from 'prop-types';

const CommentsComponent = ({ comments, user }) => {
    return (
        <div className="comments">
          <div className="newComment">
            <div><img src={user?.image} className="avatar" /></div>
            <input type="text" placeholder="What do you think?" />
            <div><button>Comment</button></div>
          </div>
          {comments.map((item) => (
            <div className="commentItem" key={item.id}>
              <img src={item.user.image} className="avatar" />
              <div className="main">
                <div className="header">
                  <span className="name">{item.user.name}</span>
                  <span className="userName">{item.user.username && `@${item.user.username}`}</span>
                </div>
                <div className="text">
                  {item.text}
                </div>
                <div className="actions">
                  <div><b>Upvote</b> (23)</div>
                  <div><b>Reply</b></div>
                  <div><b>Share</b></div>
                  <div>23m</div>
                </div>
              </div>
            </div>
          ))}
        </div>
    )
}

CommentsComponent.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string.isRequired,
    user: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      username: PropTypes.string,
    })
  })),
}

export default CommentsComponent;