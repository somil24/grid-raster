
const Server = require("socket.io");
const csvToJson = require("convert-csv-to-json");

const io =  Server(5000, {
  cors: {
    origin: "*",
  }
});


const json = csvToJson.getJsonFromCsv("./assets/covid_data.csv");
console.log(json);

let index = 0;
io.on("connection", async (socket) => {
  setInterval(() => {
    if (index < json.length) {
      socket.emit("graphData", json[index++]);
    } else return;
  }, 2000);
});
//const result = JSON.parse(JSON.stringify(RESULT));
//console.log(result);

// let index=0;
// io.on("connection", async (socket) => {

//   setInterval(() => {
//     if(index == DATA.length) return;
//     const data = [];
//     data.push(DATA[index++]);
//     socket.emit("graphData", data);

//   },2000)
// });