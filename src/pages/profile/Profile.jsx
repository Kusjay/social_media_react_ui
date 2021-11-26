import React, { Fragment } from 'react';
import Topbar from '../../components/topbar/Topbar';
import LeftBar from '../../components/leftbar/LeftBar';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/RightBar';

import './profile.css';

export default function Profile() {
  return (
    <Fragment>
      <Topbar />
      <div className='profile'>
        <LeftBar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                className='profileCoverImg'
                src='assets/post/3.jpeg'
                alt=''
              />
              <img
                className='profileUserImg'
                src='assets/person/1.jpeg'
                alt=''
              />
            </div>
            <div className='profileInfo'>
              <h4 className='profileInfoName'>Jane Doe</h4>
              <span className='profileInfoDesc'>
                Lorem ipsum dolor sit amet.
              </span>
            </div>
          </div>
          <div className='profileRightBottom'>
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
