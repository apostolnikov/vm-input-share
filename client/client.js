const robot = require("robotjs");
const SocketIO = require('socket.io-client');

const socket = SocketIO('http://192.168.1.13:3000');

socket.on('connect', () => {
  console.log("connected to server");

  socket.on('message', message => {
    console.log(String.fromCharCode(message.rawcode));

    // causing recursion for now
    // robot.keyTap(String.fromCharCode(message.rawcode));
  });
});