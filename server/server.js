/**
 * Created by nizural on 16/10/16.
 */
// importing library
var SerialPort = require('serialport');

// creating new serialPort
var serialPort = new SerialPort('/dev/ttyACM0', {
    baudRate: 9600,
    parser: SerialPort.parsers.readline('\n')
});

// responding to events
serialPort.on('open', function () {
   console.log('Serial port open');
   serialPort.on('data', function (data) {
       console.log(data);
   });
});