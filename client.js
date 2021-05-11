'use strict';

const io = require('socket.io-client');

// const server = 'http://localhost:3000';
const server = 'http://fizzosocketioservertest-env.eba-6g4rpcpc.us-west-2.elasticbeanstalk.com/';

const socket = io.connect(server);

socket.on('welcome', payload => console.log(payload));

socket.emit('hello', 'FIZZO THERE YOU ARE');


