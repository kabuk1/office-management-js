'use string';

const Room = require("../lib/js/Room");

describe('Room', () => {
  let room;

  beforeEach( () => {
    room = new Room('Inspiration Station');
  });

  it('has a name', () => {
    expect(room.name).toEqual('Inspiration Station');
  });
});