import React from 'react';
import PropTypes from 'prop-types';

import { ArrowUpIcon } from '../../assets/Icons';

const LatestLaunchesComponent = ({ trend }) => {
    return (
        <div className="latestLaunches">
          <div className="header">
            <div className="title">Trending launches</div>
          </div>
          <div className="trends">
            {trend.map((item) => (
              <div key={item.id}>
                <img src={item.image} />
                <h3>{item.title}</h3>
                <div className="tagline">{item.tagline}</div>
                <div className="actions">
                  <ArrowUpIcon fill="#60646d" size="12" className="arrowUp" />
                  {item.votesCount} 
                  <span>&#8226;</span> 
                  {item.comments.length} Comments
                </div>
              </div>
            ))}
          </div>
        </div>
    )
}

LatestLaunchesComponent.propTypes = {
  trend: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tagline: PropTypes.string.isRequired,
    votesCount: PropTypes.number.isRequired,
    comments: PropTypes.array.isRequired,
  }))
}

export default LatestLaunchesComponent;