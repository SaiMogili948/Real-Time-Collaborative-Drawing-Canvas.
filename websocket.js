export const socket = io();

export function join(room) {
  socket.emit("join", room);
}
