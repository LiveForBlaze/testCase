import React from 'react';
import PropTypes from 'prop-types';

import { ArrowUpIcon } from '../../assets/Icons';

const HeaderComponent = ({ image, tagline, url, title, description }) => {
  return (
    <>
      <div>
        <article className="post">
          <img src={image} />
          <h2 className="title">{title}</h2>
          <div className="container">
            <div className="tagline">
              <h2>{tagline}</h2>
            </div>
            <div className="buttonsContainer">
              <a className="linkButton" href={url} target="_blank">Visit</a>
              <button className="linkButton upvote">
              <ArrowUpIcon fill="white" size="16"/>
                Upvote 376
              </button>
            </div>
          </div>
          <footer>
            {description}
          </footer>
        </article>
      </div>
    </>
  )
}

HeaderComponent.propTypes = {
  title: PropTypes.string,
  tagline: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
}

export default HeaderComponent;
