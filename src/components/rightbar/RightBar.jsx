import React, { Fragment } from 'react';
import './rightbar.css';
import { Users } from '../../dummyData';
import Online from '../online/Online';

export default function RightBar({ profile }) {
  const HomeRightbar = () => {
    return (
      <Fragment>
        <div className='birthdayContainer'>
          <img src='assets/gift.png' alt='' className='birthdayImg' />
          <span className='birthdayText'>
            <b>Mary Kevin</b> and <b>4 other friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src='assets/ad.png' alt='' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </Fragment>
    );
  };

  const ProfileRightbar = () => {
    return (
      <Fragment>
        <h4 className='rightbarTitle'>User Information</h4>
        <div className='rightbarInfo'>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>City: </span>
            <span className='rightbarInfoValue'>New York</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>From: </span>
            <span className='rightbarInfoValue'>Denver</span>
          </div>
          <div className='rightbarInfoItem'>
            <span className='rightbarInfoKey'>Relationship: </span>
            <span className='rightbarInfoValue'>Single</span>
          </div>
        </div>
        <h4 className='rightbarTitle'>User Friends</h4>
        <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img
              src='assets/person/3.jpeg'
              alt=''
              className='rightbarFollowingImg'
            />
            <span className='rightbarFollwingName'>Sarah Davis</span>
          </div>
        </div>
      </Fragment>
    );
  };
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
