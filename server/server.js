/**
 * Created by nizural on 16/10/16.
 */
// imports
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var SerialPort = require('serialport');

// creating new serialPort
var serialPort = new SerialPort('/dev/ttyACM0', {
    baudRate: 9600,
    parser: SerialPort.parsers.readline('\n')
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// responding to events
serialPort.on('open', function () {
   console.log('Serial port open');
   serialPort.on('data', function (data) {
       console.log(Date.now());
       console.log(data);
   });
});

io.on('connection', function (socket) {
   console.log('user connected');
});

http.listen(3000, function () {
    console.log('Garden bot server listening on port 3000');
});