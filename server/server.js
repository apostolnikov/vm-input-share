const ioHook = require('iohook');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
// const debounce = require('lodash.debounce');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);


io.on('connection', socket => {
    console.log('new user connected');

    ioHook.on('keydown', press => {
        socket.emit('key-message', press)
    });

    // ioHook.on('mousemove', move => {
        // debounce(() => socket.emit('mouse-message', move), 100, {leading: false, trailing: true});
    //     socket.emit('mouse-message', move);
    // });

    ioHook.on('mousedrag', drag => {
        socket.emit('mouse-message', drag);
    });
 
    ioHook.on('mouseclick', click => {
        socket.emit('mouse-message', click);
    });

    socket.on('disconnect', () => console.log('User was disconnected'));
});

ioHook.start();
server.listen(3000, () => console.log('listening on PORT: ', 3000));