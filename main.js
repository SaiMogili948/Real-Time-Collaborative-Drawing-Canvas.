import { Canvas } from "./canvas.js";
import { socket, join } from "./websocket.js";

const canvasEl = document.getElementById("canvas");
canvasEl.width = window.innerWidth;
canvasEl.height = window.innerHeight;

const canvas = new Canvas(canvasEl);
const roomId = "global";
join(roomId);

let drawing = false;
let last = null;

canvasEl.addEventListener("mousedown", e => {
  drawing = true;
  last = { x: e.clientX, y: e.clientY };
});

canvasEl.addEventListener("mousemove", e => {
  if (!drawing) return;
  const current = { x: e.clientX, y: e.clientY };
  const op = {
    from: last,
    to: current,
    color: document.getElementById("color").value,
    size: document.getElementById("size").value
  };
  canvas.draw(op);
  socket.emit("draw", { roomId, op });
  last = current;
});

window.addEventListener("mouseup", () => drawing = false);

socket.on("draw", op => canvas.draw(op));

socket.on("init", ops => ops.forEach(op => canvas.draw(op)));

document.getElementById("undo").onclick = () =>
  socket.emit("undo", roomId);

document.getElementById("redo").onclick = () =>
  socket.emit("redo", roomId);

socket.on("undo", () => location.reload());
