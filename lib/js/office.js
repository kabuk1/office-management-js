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

  availableRooms() {
    return this._rooms.filter(room => room.isAvailable() === true);
  }
}

module.exports = Office;