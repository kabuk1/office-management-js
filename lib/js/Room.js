class Room {
  constructor(name) {
    this.name = name;
    this.available = true;
  }
  
  isAvailable() {
    return this.available;
  }

  enter() {
    this.available = false;
  }
}


module.exports = Room;
