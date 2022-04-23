import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InsertChartOutlinedTwoToneIcon from '@mui/icons-material/InsertChartOutlinedTwoTone';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import DirectionsRunOutlinedIcon from '@mui/icons-material/DirectionsRunOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className='logo'>Shopdmin</span>
            </div>
            <hr className='hr' />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li >
                        <DashboardIcon className='icon' />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li >
                        <PersonOutlineOutlinedIcon className='icon' />
                        <span>Users</span>
                    </li>
                    <li >
                        <StoreMallDirectoryOutlinedIcon className='icon' />
                        <span>Products</span>
                    </li>
                    <li >
                        <PaymentOutlinedIcon className='icon' />
                        <span>Orders</span>
                    </li>
                    <p className="title">USEFULL</p>
                    <li >
                        <LocalShippingOutlinedIcon className='icon' />
                        <span>Delivery</span>
                    </li>
                    <li >
                        <InsertChartOutlinedTwoToneIcon className='icon' />
                        <span>Stats</span>
                    </li>
                    <li >
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICES</p>
                    <li >
                        <DirectionsRunOutlinedIcon className='icon' />
                        <span>System Health</span>
                    </li>
                    <li >
                        <SettingsOutlinedIcon className='icon' />
                        <span>Setting</span>
                    </li>
                    <p className="title">USER</p>
                    <li >
                        <PsychologyOutlinedIcon className='icon' />
                        <span>Profile</span>
                    </li>
                    <li >
                        <LogoutOutlinedIcon className='icon' />
                        <span>Logout</span>
                    </li>
                    <li >
                        <LogoutOutlinedIcon className='icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>

            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar