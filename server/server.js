const ioHook = require('iohook');
const fs = require('fs');

ioHook.on('mousemove', event => {
	const commandToWrite = `MouseMove, ${event.x}, ${event.y}, 0 \n`;
	fs.appendFile('scripts.ahk', commandToWrite, (err) => {
		if (err) {
			console.log(err);
		}
	});
});

ioHook.start();


// on keyPress Hook

// ioHook.on('keydown', click => {
//     console.log(click);
// });

// // Register and start hook