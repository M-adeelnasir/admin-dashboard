import React from 'react'
import './nav.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
const Navbar = () => {
    return (
        <div className="nav">
            <div className="left">
                <input type="text" placeholder='Enter to search' />
                <SearchOutlinedIcon />
            </div>
            <div className="right">
                <div className="item">
                    <LanguageOutlinedIcon className='icon' />
                    English
                </div>
                <div className="item">
                    <DarkModeOutlinedIcon className='icon' />

                </div>
                <div className="item">
                    <FullscreenExitOutlinedIcon className='icon' />

                </div>
                <div className="item">
                    <NotificationsOutlinedIcon className='icon' />
                    <span>1</span>
                </div>
                <div className="item">
                    <ChatBubbleOutlineOutlinedIcon className='icon' />
                    <span>6</span>
                </div>
                <div className="item">
                    <FormatListBulletedOutlinedIcon className='icon' />
                </div>
                <div className="item">
                    <div className="avatar">
                        <img src="https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar