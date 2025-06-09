import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const data = [
  { name: 'Jan', uv: 400 },
  { name: 'Feb', uv: 700 },
  { name: 'Mar', uv: 600 }
];

function Charts() {
  return (
    <div className="page">
      <LineChart width={600} height={300} data={data}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
    </div>
  );
}

export default Charts;
