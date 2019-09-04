const robot = require("robotjs");
const SocketIO = require('socket.io-client');

const socket = SocketIO('http://192.168.1.7:3000');

socket.on('connect', () => {
  console.log("connected to server");

  socket.on('key-message', press => {
    // console.log(press);
     if(press.rawcode === 144) return;

     if (press.rawcode === 164) {
      robot.keyTap('alt');
     }

     if (press.rawcode === 38) {
      robot.keyTap('up');
     }

     if (press.rawcode === 38) {
      robot.keyTap('down');
     }

     if (press.rawcode === 38) {
      robot.keyTap('right');
     }

     if (press.rawcode === 38) {
      robot.keyTap('left');
     }

     if (press.rawcode === 9) {
      robot.keyTap('tab');
     }

     if (press.rawcode === 13) {
      robot.keyTap('enter');
     }

     if (press.rawcode === 162) {
      robot.keyTap('control');
     }

     if (press.rawcode === 160) {
      robot.keyTap('shift');
     }

     if (press.rawcode === 8) {
      robot.keyTap('backspace');
     }

     if (press.rawcode === 189) {
      robot.keyTap('backspace');
     }

     if (press.shiftKey === true && press.rawcode !== 160) {
       robot.keyTap(String.fromCharCode(press.rawcode), 'shift');
     }

     if (press.ctrlKey === true && press.rawcode !== 162) {
      robot.keyTap(String.fromCharCode(press.rawcode), 'control');
    }

     if (!press.shiftKey && !press.ctrlKey && !press.altKey) {
      robot.keyTap(String.fromCharCode(press.rawcode));
    }
    
  });

	socket.on('mouse-message', move => {
    const mouseClickResolver = {
      1: 'left',
      2: 'right',
      3: 'middle'
    };

    if (move.type === 'mousewheel') {
      robot.scrollMouse(move.x, move.y);
    }

    if (move.type === 'mousedrag') {
      robot.dragMouse(move.x, move.y);
    }

    if (move.type === 'mouseclick') {

        robot.moveMouse(move.x, move.y);
        robot.mouseClick(mouseClickResolver[move.button], move.clicks === 2 ? true : false)
        console.log(move);
    }

  });
});
