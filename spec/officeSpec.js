'use strict';

const Office = require("../lib/js/office");
const Room = require("../lib/js/room");

describe('Office', () => {
  let office;
  let roomA;
  let roomB;
  let roomC;

  beforeEach( () => {
    office = new Office();
    roomA = new Room('Noggin Chamber');
    roomB = new Room('Mind Mansion');
    roomC = new Room('Harmony Studio');
  });

  it('has no meeting rooms', () => {
    expect(office.roomList()).toEqual([]);
  });

  it('can add a meeting room', () => {
    office.addRoom(roomA);
    expect(office.roomList()).toEqual([roomA]);
  });

  it('can list all meeting rooms', () => {
    office.addRoom(roomA);
    office.addRoom(roomB);
    office.addRoom(roomC);
    expect(office.roomList()).toEqual([roomA, roomB, roomC]);
  });

  // it('can list the available meeting rooms', () => {
  //   office.addRoom(roomA);
  //   office.addRoom(roomB);
  //   office.addRoom(roomC);
  //   roomC.enter();
  //   expect(office.roomList()).toEqual([roomA, roomB]);
  // });
});