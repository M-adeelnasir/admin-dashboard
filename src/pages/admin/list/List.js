import React from 'react'
import Sidebar from '../../../components/sidebar/Sidebar'
import Navbar from '../../../components/nav/Navbar'
import './list.scss'
import DataTable from '../../../components/dataTable/DataTable'
const List = () => {
    return (
        <>
            <div className="list">
                <Sidebar />
                <div className="listContainer">
                    <Navbar />
                    <DataTable />
                </div>
            </div>

        </>
    )
}

export default List