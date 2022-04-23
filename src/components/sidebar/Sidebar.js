import React from 'react'
import './sidebar.scss'

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
                        <span className='icon'>Icone</span>
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <li >
                        <span className='icon'>Icone</span>
                        <span>Users</span>
                    </li>
                    <li >
                        <span className='icon'>Icone</span>
                        <span>Products</span>
                    </li>
                    <li >
                        <span className='icon'>Icone</span>
                        <span>Orders</span>
                    </li>
                    <p className="title">USEFULL</p>
                    <li >
                        <span className='icon'>Icone</span>
                        <span>Delivery</span>
                    </li>
                    <li >
                        <span className='icon'>Icone</span>
                        <span>Stats</span>
                    </li>
                    <li >
                        <span className='icon'>Icone</span>
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICES</p>
                    <li >
                        <span className='icon'>Icone</span>
                        <span>System Health</span>
                    </li>
                    <li >
                        <span className='icon'>Icone</span>
                        <span>Setting</span>
                    </li>
                    <p className="title">USER</p>
                    <li >
                        <span className='icon'>Icone</span>
                        <span>Profile</span>
                    </li>
                    <li >
                        <span className='icon'>Icone</span>
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