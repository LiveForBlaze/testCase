import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import userImg from './assets/hunter.svg';
import upvoterImg from './assets/upvoter.svg';
import makerImg from './assets/maker.svg';
import commenterImg from './assets/commenter.svg';


const ListComponent = ({ user, makers, commenters }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if(commenters) {
      setList([
        {...user, icon: userImg}, 
        ...makers.map(item => ({...item, icon: makerImg })),
        ...commenters.map(item => ({...item, icon: commenterImg })),
        ...commenters.map(item => ({...item, icon: upvoterImg })) // Moked upvoters
      ])
    }
  }, [user, commenters]);
   
  return (
      <div className="list">
        {list.map((item, index) => 
          <div className="avatarContainer" key={index}>
            <img className="avatars" src={item.image} />
            <img src={item.icon} className="avatarIcon" />
          </div>
        )}
      </div>
  )
}

ListComponent.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.string,
  }),
  makers: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string
  })),
  commenters: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string
  })),
}

export default ListComponent;