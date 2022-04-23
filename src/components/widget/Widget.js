import React from 'react'
import './widget.scss'
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
const Widget = ({ type }) => {

    let data;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all user",
                icon: <PersonOutlinedIcon style={{ backgroundColor: "rgb(230, 162, 74)", borderRadius: "4px" }} />
            }
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: true,
                link: "View orders",
                icon: <AddShoppingCartOutlinedIcon style={{ backgroundColor: "rgb(236, 241, 160)", borderRadius: "4px" }} />
            }
            break;
        case "earnings":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View Earnings",
                icon: <PaidOutlinedIcon style={{ backgroundColor: "rgb(116, 235, 166)", borderRadius: "4px" }} />

            }
            break;
        case "balance":
            data = {
                title: "TOTAL BALANCE",
                isMoney: true,
                link: "Check balance",
                icon: <AccountBalanceWalletOutlinedIcon style={{ backgroundColor: "rgba(224, 127, 127, 0.432)", borderRadius: "4px" }} />
            }
            break
        default:
            break;
    }

    return (

        <div className="widget">
            <div className="left">
                <div className="title">
                    {data.title}
                </div>
                <div className="counter">
                    {data.isMoney && "$"}100
                </div>
                <div className="userlink">
                    {data.link}
                    <hr />
                </div>

            </div>
            <div className="right">
                <div className="percentage positive">
                    {<KeyboardArrowUpOutlinedIcon />}
                    50 %
                </div>
                <span className='icon'>{data.icon} </span>
            </div>
        </div>

    )
}

export default Widget