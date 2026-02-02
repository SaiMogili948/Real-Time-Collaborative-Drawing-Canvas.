class DrawingState {
  constructor() {
    this.history = [];
    this.redoStack = [];
  }

  add(op) {
    this.history.push(op);
    this.redoStack = [];
  }

  undo() {
    const op = this.history.pop();
    if (op) this.redoStack.push(op);
    return op;
  }

  redo() {
    const op = this.redoStack.pop();
    if (op) this.history.push(op);
    return op;
  }

  getAll() {
    return this.history;
  }
}

module.exports = DrawingState;
