const DrawingState = require("./drawing-state");

class Rooms {
  constructor() {
    this.rooms = {};
  }

  addUser(roomId, userId) {
    if (!this.rooms[roomId]) {
      this.rooms[roomId] = {
        users: new Set(),
        state: new DrawingState()
      };
    }
    this.rooms[roomId].users.add(userId);
  }

  removeUser(userId) {
    for (const r of Object.values(this.rooms)) {
      r.users.delete(userId);
    }
  }

  getUsers(roomId) {
    return [...this.rooms[roomId].users];
  }

  getState(roomId) {
    return this.rooms[roomId].state.getAll();
  }

  addOperation(roomId, op) {
    this.rooms[roomId].state.add(op);
  }

  undo(roomId) {
    return this.rooms[roomId].state.undo();
  }

  redo(roomId) {
    return this.rooms[roomId].state.redo();
  }
}

module.exports = Rooms;
