import React from 'react';
import './rightbar.css';

export default function RightBar() {
  return (
    <div className='rightbar'>
      <div className='rightbarWrapper'>
        <div className='birthdayContainer'>
          <img src='assets/gift.png' alt='' className='birthdayImg' />
          <span className='birthdayText'>
            <b>Mary Kevin</b> and <b>4 other friends</b> have a birthday today
          </span>
        </div>
        <img className='rightbarAd' src='assets/ad.png' alt='' />
        <h4 className='rightbarTitle'>Online Friends</h4>
        <ul className='rightbarFriendList'>
          <li className='rightBarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                src='assets/person/3.jpeg'
                alt=''
                className='rightbarProfileImg'
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Vera Ken</span>
          </li>
          <li className='rightBarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                src='assets/person/4.jpeg'
                alt=''
                className='rightbarProfileImg'
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Jenny Gates </span>
          </li>
          <li className='rightBarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                src='assets/person/5.jpeg'
                alt=''
                className='rightbarProfileImg'
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Sandra Butler</span>
          </li>
          <li className='rightBarFriend'>
            <div className='rightbarProfileImgContainer'>
              <img
                src='assets/person/6.jpeg'
                alt=''
                className='rightbarProfileImg'
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUsername'>Dave Steve</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
