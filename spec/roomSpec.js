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

  describe('room availability', () => {
    it('becomes unavailable when someone enters the room', () => {
      room.enter();
      expect(room.isAvailable()).toEqual(false);
    });

    it('becomes available again when someone leaves the room', () => {
      room.enter();
      expect(room.isAvailable()).toEqual(false);
      room.leave();
      expect(room.isAvailable()).toEqual(true);
    });

    it('throws and error if someone tries to enter an occupied room', () => {
      room.enter();
      expect(room.isAvailable()).toEqual(false);
      expect(() => { 
        room.enter(); }).toThrowError('Meeting room in use!');
    });
  });
  
});