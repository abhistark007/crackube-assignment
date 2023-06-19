import React from 'react'
import './Navbar.css'
import Avatar from '@mui/material/Avatar';
import profilePic from '../assets/pp1.png';
import notification from '../assets/notification.svg';
import setting from '../assets/setting.svg';
import dot from '../assets/dot.svg';

function Navbar() {
  return (
    <div className='navbar '>
      <div className="navbar__left">
        <h1>Demo Company</h1>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Work</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
      </div>

      <div className="navbar__right">
          <img src={setting} alt="setting" className='navbar__right__setting'/>
          <div className='navbar__right__content'>
            <img src={dot} alt="dot" className='navbar__right__notification__dot'/>
            <img src={notification} alt="notification" className='navbar__right__notification'/>
          </div>
          <Avatar  src={profilePic} sx={{height:"43px",width:"43px"}} className='profilepic'/>
      </div>
    </div>
  )
}

export default Navbar