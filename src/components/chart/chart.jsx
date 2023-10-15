import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';
import './chart.css';
import {ResponsiveContainer} from 'recharts';
import { Tooltip } from '@mui/material';

function Chart(){
    const data = [
      {
        name: "Page A",
        user: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Page B",
        user: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Page C",
        user: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Page D",
        user: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Page E",
        user: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Page F",
        user: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "Page G",
        user: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];
    return (
      <div className="chart">
        <h3 className="chartTitle">User Analytics</h3>
        <ResponsiveContainer width="100%" aspect={4 / 1}>
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#5550bd" />
            <Line type="monotone" dataKey="user" stroke="#5550bd" />
          </LineChart>
          <Tooltip />
          <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />
        </ResponsiveContainer>
      </div>
    );
}

export default Chart;