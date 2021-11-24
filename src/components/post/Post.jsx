import React from 'react';
import { MoreVert } from '@material-ui/icons';
import Share from '../share/Share';
import { Users } from '../../dummyData';

import './post.css';

export default function Post({ post }) {
  const username = Users.filter((u) => u.id === post.id)[0].username;
  const profilePic = Users.filter((u) => u.id === post.id)[0].profilePicture;
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img className='postProfileImg' src={profilePic} alt='' />
            <span className='postUsername'>{username}</span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post?.desc}</span>
          <img className='postImg' src={post.photo} alt='' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img className='likeIcon' src='/assets/like.png' alt='' />
            <img className='likeIcon' src='/assets/heart.png' alt='' />
            <span className='postLikeCounter'>{post.like} people liked it</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
