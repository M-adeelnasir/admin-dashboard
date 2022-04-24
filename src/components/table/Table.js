import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './table.scss'

const ListTable = () => {

    const users = [
        {
            _id: 8783234783,
            product: "asus 56",
            image: "https://picsum.photos/id/237/200/300",
            date: "4 jul",
            method: "online payment",
            status: "Delivered"
        },
        {
            _id: 4398434,
            product: "lenovo 56",
            image: "https://picsum.photos/seed/picsum/200/300",
            date: "4 jul",
            method: "Cash on delivery",
            status: "no proceeded"
        },
        {
            _id: 3438545,
            product: "apple",
            image: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
            date: "4 jul",
            method: "online payment",
            status: "Delivered"
        },
        {
            _id: 3236232,
            product: "HP",
            image: "https://picsum.photos/200/300/?blur=2",
            date: "4 jul",
            method: "Cash on delivery",
            status: "proceeded"
        },
        {
            _id: 25456565,
            product: "toshiba",
            image: "https://picsum.photos/200/300?grayscale",
            date: "4 jul",
            method: "Cash on delivery",
            status: "complete"
        },
        {
            _id: 878304783,
            product: "classic",
            image: "https://picsum.photos/seed/picsum/200/300",
            date: "8 jan",
            method: "online payment",
            status: "canceled"
        },
    ]

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className='tableCell'>Tracking ID</TableCell>
                        <TableCell className='tableCell'>Product Name</TableCell>
                        <TableCell className='tableCell'>Date</TableCell>
                        <TableCell className='tableCell'>Payment Method</TableCell>
                        <TableCell className='tableCell'>status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow
                            key={user._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="user" className='tableCell'>
                                {user._id}
                            </TableCell>
                            <TableCell className='tableCell' >
                                <div className="productWrapper">
                                    <img src={user.image} alt="product iamge" className='image' />
                                    {user.product}
                                </div>
                            </TableCell>

                            <TableCell className='tableCell' >{user.date}</TableCell>
                            <TableCell className='tableCell' >{user.method}</TableCell>
                            <TableCell className='tableCell' >{user.status}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ListTable