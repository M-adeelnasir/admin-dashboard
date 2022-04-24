import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import './table.scss'
const DataTable = () => {



    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 90,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 190,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        },
        { field: 'description', headerName: 'Description', sortable: false, width: 190 },

        {
            field: 'image', headerName: 'Image', width: 100, sortable: false, renderCell: (params) => {
                return <div className='proImage'>
                    {params.row.img && <img style={{ width: "32px", height: "32px", borderRadius: "50%", }} src={params.row.img} alt="" />}
                </div>
            }
        },
        {
            field: 'actions', headerName: 'Actions', width: 190, sortable: false, renderCell: (params) => {
                return <div className='btn'>
                    <button className='btn-del'>Delete</button>
                    <button className='btn-view'>View</button>
                </div>
            }
        },
    ];



    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, description: "hello where are you from", img: "https://picsum.photos/id/237/200/300" },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, description: "hello where are you from", img: "https://picsum.photos/id/237/200/300" },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45, description: "hello where are you from", img: "https://picsum.photos/id/237/200/300" },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16, description: "hello where are you from" },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, description: "hello where are you from", img: "https://picsum.photos/id/237/200/300" },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150, description: "hello where are you from" },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, description: "hello where are you from" },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, description: "hello where are you from", img: "https://picsum.photos/id/237/200/300" },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65, description: "hello where are you from" },
        { id: 11, lastName: 'Snow', firstName: 'Jon', age: 35, description: "hello where are you from" },
        { id: 12, lastName: 'Lannister', firstName: 'Cersei', age: 42, description: "hello where are you from" },
        { id: 13, lastName: 'Lannister', firstName: 'Jaime', age: 45, description: "hello where are you from" },
        { id: 14, lastName: 'Stark', firstName: 'Arya', age: 16, description: "hello where are you from", img: "https://picsum.photos/id/237/200/300" },
        { id: 15, lastName: 'Targaryen', firstName: 'Daenerys', age: null, description: "hello where are you from" },
        { id: 16, lastName: 'Melisandre', firstName: null, age: 150, description: "hello where are you from" },
        { id: 17, lastName: 'Clifford', firstName: 'Ferrara', age: 44, description: "hello where are you from", img: "https://picsum.photos/id/237/200/300" },
        { id: 18, lastName: 'Frances', firstName: 'Rossini', age: 36, description: "hello where are you from" },
        { id: 19, lastName: 'Roxie', firstName: 'Harvey', age: 65, description: "hello where are you from", img: "https://picsum.photos/id/237/200/300" },
    ];


    return (
        <>
            <div style={{ height: 600, width: '100%' }} className="usertable">
                <DataGrid
                    className='dt'
                    rows={rows}
                    columns={columns}
                    pageSize={9}
                    rowsPerPageOptions={[9]}
                    checkboxSelection
                />
            </div>
        </>
    )
}

export default DataTable