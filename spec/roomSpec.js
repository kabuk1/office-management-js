'use string';

const Room = require("../lib/js/room");

describe('Room', () => {
  let room;

  beforeEach( () => {
    room = new Room('Inspiration Station');
  });

  it('has a name', () => {
    expect(room.name).toEqual('Inspiration Station');
  });
});