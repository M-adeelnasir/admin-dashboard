import React from 'react'
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
const Widget = () => {
    return (

        <div className="widget">
            <div className="left">
                <div className="title">
                    USERS
                </div>
                <div className="counter">
                    7637
                </div>
                <div className="userlink">
                    See all links
                    <hr />
                </div>

            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpOutlinedIcon />
                    50 %
                </div>
                <PersonOutlinedIcon className='icon' />
            </div>
        </div>

    )
}

export default Widget