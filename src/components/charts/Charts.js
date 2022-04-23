import React from 'react'
import './charts.scss'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Charts = () => {

    const data = [
        { name: "Jan", Total: 123000 },
        { name: "Feb", Total: 23423 },
        { name: "March", Total: 113000 },
        { name: "April", Total: 7000 },
        { name: "May", Total: 65656 },
        { name: "June", Total: 232323 },
        { name: "July", Total: 23 },
        { name: "Agust", Total: 343434 },
        { name: "Nov", Total: 23333 },
    ]


    return (
        <div className="chart">
            <div className="title">LAST 6 MONTHS (REV)</div>
            <AreaChart width={730} height={370} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="Total" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            </AreaChart>
        </div>
    )
}

export default Charts