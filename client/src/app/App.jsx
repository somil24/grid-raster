// lib
import React, { useEffect ,useState} from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

// api
import { getGraphData } from "../api/getGraphData";




const App = ()=>{

    const [Data, setData] = useState([]);


   useEffect(()=>{
     setData(getGraphData())
   },[]);
    


    return(
        
       <LineChart width={730} height={250} data={Data}
  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="value" stroke="#8884d8" />
</LineChart>
      
    );
}

export default App;