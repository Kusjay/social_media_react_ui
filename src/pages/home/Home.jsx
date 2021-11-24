import React, { Fragment } from 'react';
import Topbar from '../../components/topbar/Topbar';
import LeftBar from '../../components/leftbar/LeftBar';
import Feed from '../../components/feed/Feed';
import RightBar from '../../components/rightbar/RightBar';

import './home.css';

export default function Home() {
  return (
    <Fragment>
      <Topbar />
      <div className='homeContainer'>
        <LeftBar />
        <Feed />
        <RightBar />
      </div>
    </Fragment>
  );
}
