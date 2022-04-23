import React from 'react'
import Navbar from '../../../components/nav/Navbar'
import Sidebar from '../../../components/sidebar/Sidebar'
import Widget from '../../../components/widget/Widget'
import Charts from '../../../components/charts/Charts'
import Featured from '../../../components/featured/Featured'
import ListTable from '../../../components/table/Table'
import './home.scss'
const Home = () => {
    return (
        <div className="home">

            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widget type='user' />
                    <Widget type='order' />
                    <Widget type='earnings' />
                    <Widget type='balance' />
                </div>
                <div className="charts">
                    <Featured />
                    <Charts />
                </div>
                <div className="listContianers">
                    <div className="listTitle">Latest Transactions</div>
                    <ListTable />
                </div>
            </div>
        </div>
    )
}

export default Home