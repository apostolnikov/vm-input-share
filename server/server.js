const ioHook = require('iohook');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);


io.on('connection', socket => {
    console.log('new user connected');

    ioHook.on('keydown', press => {
        console.log(press);
        socket.emit('key-message', press)});

    ioHook.on('mousedrag', drag => socket.emit('mouse-message', drag));
 
    ioHook.on('mouseclick', click => socket.emit('mouse-message', click));

    ioHook.on('mousewheel', scroll => socket.emit('mouse-message', scroll));

    socket.on('disconnect', () => console.log('User was disconnected'));
});

ioHook.start();
server.listen(3000, () => console.log('listening on PORT: ', 3000));