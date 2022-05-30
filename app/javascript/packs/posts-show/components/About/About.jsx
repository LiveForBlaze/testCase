import React from 'react';
import PropTypes from 'prop-types';

const AboutComponent = ({ 
  votesCount, 
  commentsCount, 
  viewsCount, 
  dailyFeedPosition, 
  weeklyFeedPosition 
}) => {
    return (
      <div className="about">
        <h4>About this launch</h4>
        <div className="list">
          <div className="element">
            <div>
              Upvotes 
              <div>{votesCount}</div>
            </div>
          </div>
          <div className="element">
            <div>
              Comments
              <div>{commentsCount}</div>
            </div>
          </div>
          <div className="element">
            <div>
              Views 
              <div>{viewsCount}</div>
            </div>
          </div>
          <div className="element">
            <div>
              Daily Rank 
              <div>
                #{dailyFeedPosition}
              </div>
            </div>
          </div>
          <div className="element">
            <div>
              Weekly Rank 
              <div>
                #{weeklyFeedPosition}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

AboutComponent.propTypes = {
  votesCount: PropTypes.number.isRequired, 
  commentsCount: PropTypes.number.isRequired, 
  viewsCount: PropTypes.number.isRequired, 
  dailyFeedPosition: PropTypes.number.isRequired, 
  weeklyFeedPosition: PropTypes.number.isRequired, 
}

export default AboutComponent;