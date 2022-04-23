import React from 'react'
import Navbar from '../../../components/nav/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import './home.scss'
const Home = () => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                home Container
            </div>
        </div>
    )
}

export default Home