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

  it('is available', () => {
    expect(room.isAvailable()).toEqual(true);
  });

  describe('when someone enters a meeting room', () => {
    it('is unavailable', () => {
      room.enter();
      expect(room.isAvailable()).toEqual(false);
    });
  });
  
});