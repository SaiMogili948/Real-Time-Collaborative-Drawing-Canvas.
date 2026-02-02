const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const Rooms = require("./rooms");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("client"));

const rooms = new Rooms();

io.on("connection", socket => {
  socket.on("join", roomId => {
    socket.join(roomId);
    rooms.addUser(roomId, socket.id);
    socket.emit("init", rooms.getState(roomId));
    io.to(roomId).emit("users", rooms.getUsers(roomId));
  });

  socket.on("draw", ({ roomId, op }) => {
    rooms.addOperation(roomId, op);
    socket.to(roomId).emit("draw", op);
  });

  socket.on("undo", roomId => {
    const op = rooms.undo(roomId);
    if (op) io.to(roomId).emit("undo", op);
  });

  socket.on("redo", roomId => {
    const op = rooms.redo(roomId);
    if (op) io.to(roomId).emit("draw", op);
  });

  socket.on("cursor", ({ roomId, cursor }) => {
    socket.to(roomId).emit("cursor", { id: socket.id, cursor });
  });

  socket.on("disconnect", () => {
    rooms.removeUser(socket.id);
  });
});

server.listen(3000);
