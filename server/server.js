const ioHook = require('iohook');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);


io.on('connection', socket => {
    console.log('new user connected');

    ioHook.on('keydown', click => socket.emit('message', click));
    socket.on('disconnect', () => console.log('User was disconnected'));
});

ioHook.start();
server.listen(3000, () => console.log('listening on PORT: ', 3000));






// ioHook.on('mousemove', event => {
// });