
const Server = require("socket.io");
const covidData=require('./assets/covidData');
const RESULT = require("./result");

const io =  Server(5000, {
  cors: {
    origin: "*",
  }
});

const result = JSON.parse(JSON.stringify(RESULT));
console.log(result);
let index=0;
io.on("connection", async (socket) => {

  setInterval(() => {
    if(index == DATA.length) return;
    const data = [];
    data.push(DATA[index++]);
    socket.emit("graphData", data);

  },2000)
});