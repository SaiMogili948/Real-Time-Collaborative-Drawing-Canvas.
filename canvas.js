export class Canvas {
  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.ctx.lineCap = "round";
  }

  draw(op) {
    this.ctx.strokeStyle = op.color;
    this.ctx.lineWidth = op.size;
    this.ctx.beginPath();
    this.ctx.moveTo(op.from.x, op.from.y);
    this.ctx.lineTo(op.to.x, op.to.y);
    this.ctx.stroke();
  }
}
