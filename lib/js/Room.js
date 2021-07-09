class Room {
  constructor(name) {
    this.name = name;
    this.available = true;
  }
  
  isAvailable() {
    return this.available;
  }

  enter() {
    if(this.isAvailable() === false) {
      throw new Error('Meeting room in use!');
    }
    this.available = false;
  }

  leave() {
    this.available = true;
  }
}


module.exports = Room;
