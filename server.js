import {createServer} from 'http';
import { Server } from 'socket.io';
import express from 'express';

const app = express();
const httpServer = createServer();
const io = new Server(httpServer, {cors: {} });

const port = 3377;

app.get('/', (req, res) => {
	res.send('<h1>Socket.io backend</h1>')
});

io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log('USER DISCONNECTED');
	});
});

httpServer.listen(port, () => {
	console.log(`listening on port http://localhost:${port}`);
});

