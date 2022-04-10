
const Server = require("socket.io");
const csvToJson = require("convert-csv-to-json");
const covidData=require("./assets/covidData")
const io =  Server(5000, {
  cors: {
    origin: "*",
  }
});


let index=0;
const GRAPHDATA=[]
setTimeout(()=>{
  const DATA=covidData();
  io.on("connection", async (socket) => {

    setInterval(() => {
      if(index == DATA.length) {
        socket.emit("message","No more Data is available")
        return;
      }
GRAPHDATA.push(DATA[index])
index++;
      socket.emit("graphData", GRAPHDATA);
  
    },10)
  });

},2000)
