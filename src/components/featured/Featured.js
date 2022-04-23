import React from 'react'
import './featured.scss'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Featured = () => {

    const percentage = 66;
    return (
        <div className="featured">
            <div className="top">
                <h6 className='title'>Total Revenue</h6>
                <MoreVertOutlinedIcon fontSize='small' />
            </div>
            <div className="center">
                <div className="featuredChart">
                    <div style={{ width: 120, height: 120 }}>
                        <CircularProgressbar value={percentage} text="60%" />
                    </div>
                </div>
                <p className='title'>Total Sales made today</p>
                <p className='amount'>$1000</p>
                <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, porro.</p>
                <div className="summary">
                    <div className="item">
                        <div className="ItemTitle">Target</div>
                        <div className='val negative'>
                            <KeyboardArrowUpOutlinedIcon />
                            <span>12.k$</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="ItemTitle">Last Week</div>
                        <div className='val positive'>
                            <KeyboardArrowUpOutlinedIcon />
                            <span>12.k$</span>
                        </div>
                    </div>
                    <div className="item">
                        <div className="ItemTitle">Last Month</div>
                        <div className='val positive'>
                            <KeyboardArrowUpOutlinedIcon />
                            <span>12.k$</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured