import { Server } from "socket.io";

const io = new Server(5000, {
  cors: {
    origin: "*",
  }
});

io.on("connection", (socket) => {

  setInterval(() => {
    const data = [{name: 'a', value: 10*Math.random()}, {name: 'b', value: 100*Math.random()}, {name: 'c', value: 1000*Math.random()}];
   
    socket.emit("graphData", data);

  },1000)
});