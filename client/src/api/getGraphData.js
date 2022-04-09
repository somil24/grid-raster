import { io } from "socket.io-client";

const socket = io("ws://localhost:5000");


 export const getGraphData =  () => {
     socket.on("graphData", (arg) => {
        return arg;
      });
}