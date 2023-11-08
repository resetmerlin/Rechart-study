import React from 'react';

export default function Examples1() {
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
    <LineChart width={400} height={400} data={data}>
      <Line type='monotone' dataKey='time' stroke='#8884d8' />
      <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip
        cursor={{ strokeWidth: 2 }}
        payload={[{ name: '2023/11/05', time: 5, unit: 'kg' }]}
      />
    </LineChart>
  );
}
