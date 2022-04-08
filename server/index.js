import { Server } from "socket.io";

const io = new Server(5000, {
  cors: {
    origin: "*",
  }
});

io.on("connection", (socket) => {

  setInterval(() => {
    const data = [{name: 'Page A', uv: 100*Math.random(), pv: 1000*Math.random(), amt: 1000*Math.random()},{name: 'Page B', uv: 100*Math.random(), pv: 1000*Math.random(), amt: 1000*Math.random()},{name: 'Page C', uv: 100*Math.random(), pv: 1000*Math.random(), amt: 1000*Math.random()}]
   
    socket.emit("graphData", data);

  },1000)
});