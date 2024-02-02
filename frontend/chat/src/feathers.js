// src/feathers.js
import feathers from '@feathersjs/client';
import io from 'socket.io-client';

const socket = io('http://localhost:3030');
const feathersClient = feathers();

feathersClient.configure(feathers.socketio(socket));
feathersClient.configure(feathers.authentication());

export default feathersClient;

