// lib
import React, { useEffect ,useState} from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

// api
import { getGraphData } from "../api/getGraphData";

//colors
import {COLORS} from "../constants/colors/chartColors"



const App = ()=>{

    const [Data, setData] = useState([]);


   useEffect(()=>{
     setData(getGraphData())
   },[]);
    


    return(
        
       <LineChart width={1200} height={500} data={Data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
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
      
    );
}

export default App;