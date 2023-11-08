import {
  LineChart,
  Line,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  AreaChart,
  Area,
} from 'recharts';

import './App.css';
import CustomTooltip from './CustomTooltip';

function App() {
  let currentDate = new Date().toJSON().slice(0, 10);
  console.log(currentDate);

  const data = [
    { name: '2023/11/05', time: 5 },
    { name: '2023/11/06', time: 7 },
    { name: '2023/11/07', time: 8 },
    { name: '2023/11/08', time: 13 },
    { name: '2023/11/09', time: 5 },
  ];

  return (
    <AreaChart
      width={730}
      height={250}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='5%' stopColor='#8884d8' stopOpacity={0.8} />
          <stop offset='95%' stopColor='#8884d8' stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis dataKey='name' />
      <YAxis />
      <CartesianGrid strokeDasharray='3 3' />
      <Tooltip content={<CustomTooltip />} />
      <Area
        type='monotone'
        dataKey='time'
        stroke='#8884d8'
        fillOpacity={1}
        fill='url(#colorUv)'
      />
    </AreaChart>
  );
}

export default App;
