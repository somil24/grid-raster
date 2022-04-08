import React, { useEffect } from "react";
import { io } from "socket.io-client";

import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


const socket = io("ws://localhost:5000");

const App = ()=>{

    const [Data, setData] = React.useState([]);


   useEffect(()=>{

    socket.on("graphData", (arg) => {
        setData(arg) // world
      });
   },[]);
    


    return(
        <>
        <LineChart width={1500} height={300} data={Data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>
      </>
    );
}

export default App;