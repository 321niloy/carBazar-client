// import React from 'react';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

// const data = [
//   {
//     name: 'Page A',
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: 'Page B',
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: 'Page C',
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: 'Page D',
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: 'Page E',
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: 'Page F',
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: 'Page G',
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

// const getPath = (x, y, width, height) => {
//   return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
//   ${x + width / 2}, ${y}
//   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
//   Z`;
// };

// const TriangleBar = (props) => {
//   const { fill, x, y, width, height } = props;

//   return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
// };

// export default function Flowchart() {
//   return (
//     <BarChart
//       width={500}
//       height={300}
//       data={data}
//       margin={{
//         top: 20,
//         right: 30,
//         left: 20,
//         bottom: 5,
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="name" />
//       <YAxis />
//       <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
//         {data.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={colors[index % 20]} />
//         ))}
//       </Bar>
//     </BarChart>
//   );
// }

// Flowchart.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';



// import React, { useEffect, useState } from 'react';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
// import Axios from '../Axios';

// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
// const [value,setValue] = useState([])

// useEffect(() =>{
//     const url = "/flowchart"
//     Axios.get(url)
//     .then(res =>{
//         console.log("flowchart",res)
//         setValue(res)
//     })
//     .catch(error =>{
//         console.log(error)
//     })

// },[value])

// const monthlySalesData = [
//   {"month": "January", "sell": 12000000},
//   {"month": "February", "sell": 11000000},
//   {"month": "March", "sell": 13000000},
//   {"month": "April", "sell": 10500000},
//   {"month": "May", "sell": 14000000},
//   {"month": "June", "sell": 11500000},
//   {"month": "July", "sell": 12500000},
//   {"month": "August", "sell": 13500000},
//   {"month": "September", "sell": 11800000},
//   {"month": "October", "sell": 12800000},
//   {"month": "November", "sell": 12200000},
//   {"month": "December", "sell": 13200000}
// ];

// const getPath = (x, y, width, height) => {
//   return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
//   ${x + width / 2}, ${y}
//   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
//   Z`;
// };

// const TriangleBar = (props) => {
//   const { fill, x, y, width, height } = props;

//   return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
// };

// export default function Flowchart() {
//   return (
//     <BarChart
//       width={500}
//       height={300}
//       data={monthlySalesData}
//       margin={{
//         top: 20,
//         right: 30,
//         left: 20,
//         bottom: 5,
//       }}
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <XAxis dataKey="month" />
//       <YAxis />
//       <Bar dataKey="sell" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
//         {monthlySalesData.map((entry, index) => (
//           <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
//         ))}
//       </Bar>
//     </BarChart>
//   );
// }

// Flowchart.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';




import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import Axios from '../Axios';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const Flowchart = () => {
  
  const [monthlySalesData, setMonthlySalesData] = useState([]);

  useEffect(() => {
    const url = "/flowchart";
    Axios.get(url)
      .then(res => {
       
        setMonthlySalesData(res); // Assuming res.data is the array you want to use
      })
      .catch(error => {
        console.log(error);
      });
  }, [monthlySalesData]);

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <>
    <h1 className='text-center text-5xl text-orange-500 my-7'>Flow chart</h1>
    <BarChart
      width={500}
      height={300}
      data={monthlySalesData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Bar dataKey="sell" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {monthlySalesData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Bar>
    </BarChart>
    </>
  );
};

Flowchart.demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-shape-dusth';

export default Flowchart;
