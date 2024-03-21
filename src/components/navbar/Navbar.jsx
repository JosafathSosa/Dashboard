import React from 'react'
import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NightlightIcon from '@mui/icons-material/Nightlight';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='Search...'/>
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageIcon className='icon'/>
            English
          </div>
          <div className="item">
            <NightlightIcon className='icon'/>
          </div>
          <div className="item">
            <NotificationsNoneIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineIcon className='icon'/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <img src="https://logowik.com/content/uploads/images/call-center5116.jpg" alt=""  
            className='avatar'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

 export default Navbar