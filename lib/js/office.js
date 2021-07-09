'use strict';

class Office {
  constructor() {
    this._rooms = [];
  }

  roomList() {
    return this._rooms;
  }

  addRoom(room) {
    this.roomList().push(room);
  }
}

module.exports = Office;