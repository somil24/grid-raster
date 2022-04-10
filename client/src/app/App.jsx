// lib
import React, { useEffect, useState } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { io } from "socket.io-client";
import {Container,Typography} from "@mui/material"

//colors
import { COLORS } from "../constants/colors/chartColors"




const socket = io("ws://localhost:5000");


const App = () => {

  const [Data, setData] = useState([]);
  const [msg,setMsg]=useState("");


  useEffect(() => {
    socket.on("graphData", (arg) => {
      setData(arg);
    })
    socket.on("message",(arg)=>{
      setMsg(arg);
    })
  }, []);

  return (
<Container height="100vh" sx={{justifyContent:"center",alignItems:"center"}}>
    <Typography variant="h4" textAlign="center" gutterBottom>Covid Cases Data</Typography>
    <LineChart width={1200} height={500} data={Data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="China" stroke={COLORS[0]} />
      <Line type="monotone" dataKey="US" stroke={COLORS[1]} />
      <Line type="monotone" dataKey="United_Kingdom" stroke={COLORS[2]} />
      <Line type="monotone" dataKey="Italy" stroke={COLORS[3]} />
      <Line type="monotone" dataKey="France" stroke={COLORS[4]} />
      <Line type="monotone" dataKey="Germany" stroke={COLORS[5]} />
      <Line type="monotone" dataKey="Spain" stroke={COLORS[6]} />
      <Line type="monotone" dataKey="Iran" stroke={COLORS[7]} />
    </LineChart>
    {
      msg.length>0&&(
        <div className="alert alert-info" role="alert">{msg}</div>
      )
    }
</Container>
  );
}

export default App;