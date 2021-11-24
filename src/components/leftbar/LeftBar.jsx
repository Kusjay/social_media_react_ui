import React from 'react';
import './leftbar.css';
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from '@material-ui/icons';

export default function LeftBar() {
  return (
    <div className='leftbar'>
      <div className='sidebarWrapper'>
        <ul className='sidebarList'>
          <li className='sidebarListItem'>
            <RssFeed className='sidebarIcon' />
            <span className='sidebarListItemText'>Feed</span>
          </li>
          <li className='sidebarListItem'>
            <Chat className='sidebarIcon' />
            <span className='sidebarListItemText'>Chat</span>
          </li>
          <li className='sidebarListItem'>
            <PlayCircleFilledOutlined className='sidebarIcon' />
            <span className='sidebarListItemText'>Videos</span>
          </li>
          <li className='sidebarListItem'>
            <Group className='sidebarIcon' />
            <span className='sidebarListItemText'>Groups</span>
          </li>
          <li className='sidebarListItem'>
            <Bookmark className='sidebarIcon' />
            <span className='sidebarListItemText'>Bookmarks</span>
          </li>
          <li className='sidebarListItem'>
            <HelpOutline className='sidebarIcon' />
            <span className='sidebarListItemText'>Questions</span>
          </li>
          <li className='sidebarListItem'>
            <WorkOutline className='sidebarIcon' />
            <span className='sidebarListItemText'>Jobs</span>
          </li>
          <li className='sidebarListItem'>
            <Event className='sidebarIcon' />
            <span className='sidebarListItemText'>Events</span>
          </li>
          <li className='sidebarListItem'>
            <School className='sidebarIcon' />
            <span className='sidebarListItemText'>Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr' />
        <ul className='sidebarFriendList'>
          <li className='sidebarFriend'>
            <img
              className='sidebarFriendImg'
              src='/assets/person/2.jpeg'
              alt=''
            />
            <span className='sidebarFriendName'>John Doe</span>
          </li>
          <li className='sidebarFriend'>
            <img
              className='sidebarFriendImg'
              src='/assets/person/3.jpeg'
              alt=''
            />
            <span className='sidebarFriendName'>Jane Smith</span>
          </li>
          <li className='sidebarFriend'>
            <img
              className='sidebarFriendImg'
              src='/assets/person/4.jpeg'
              alt=''
            />
            <span className='sidebarFriendName'>Sam Ken</span>
          </li>
          <li className='sidebarFriend'>
            <img
              className='sidebarFriendImg'
              src='/assets/person/5.jpeg'
              alt=''
            />
            <span className='sidebarFriendName'>Kev Jay</span>
          </li>
          <li className='sidebarFriend'>
            <img
              className='sidebarFriendImg'
              src='/assets/person/6.jpeg'
              alt=''
            />
            <span className='sidebarFriendName'>John Doe</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
