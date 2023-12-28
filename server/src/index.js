const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const rootRoute = require('./routes/root');

const { PORT } = require('./config');

const app = express();

app.use(cors({ origin: 'http://localhost' }));
app.use('/', rootRoute);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

const io = new Server(server, {
  cors: {
    origin: 'http://localhost',
    methods: ['GET', 'POST', 'PUT', 'PATCH'],
  },
});

io.on('connection', (socket) => {
  console.log(`socket ${socket.id} connected`);

  socket.emit('foo', 'bar');
  socket.on('foobar', () => {
  });

  socket.on('disconnect', (reason) => {
    console.log(`socket ${socket.id} disconnected due to ${reason}`);
  });
});
