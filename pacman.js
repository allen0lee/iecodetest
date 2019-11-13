class Pacman {
  constructor() {
    this.x = null
    this.y = null
    this.facing = null
    this.directions = ["NORTH", "EAST", "SOUTH", "WEST"]
  }

  isPositionValid(x, y, f) {
    return x >= 0 && x <= 5 && y >= 0 && y <= 5 && this.directions.includes(f.toUpperCase())
  }

  place(x, y, f) {
    if(this.isPositionValid(x, y, f)) {
      this.x = x
      this.y = y
      this.facing = f.toUpperCase()
    }
  }

  isPlaced() {
    return this.x !== null && this.y !== null && this.facing !== null
  }

  move() {
    if(this.isPlaced()) {
      if(this.facing === "NORTH" && this.y < 5) {
        this.y++
      } else if(this.facing === "EAST" && this.x < 5) {
        this.x++
      } else if(this.facing === "SOUTH" && this.y > 0) {
        this.y--
      } else if(this.facing === "WEST" && this.x > 0) {
        this.x--
      }
    }
  }

  left() { // change facing anticlockwisely
    if(this.isPlaced()) {
      if(this.facing === this.directions.slice(0).shift()) { // if currently facing NORTH
        this.facing = this.directions.slice(0).pop() // after left rotate 90 degrees, will face WEST
      } else {
        this.facing = this.directions[this.directions.indexOf(this.facing) - 1]
      }
    }
  }

  right() { // change facing clockwisely
    if(this.isPlaced()) {
      if(this.facing === this.directions.slice(0).pop()) { // if currently facing WEST
        this.facing = this.directions.slice(0).shift() // after left rotate 90 degrees, will face NORTH
      } else {
        this.facing = this.directions[this.directions.indexOf(this.facing) + 1]
      }
    }
  }

  report() {
    if (this.isPlaced()) {
      return `${this.x},${this.y},${this.facing}`
    }  
  }

}

module.exports = Pacman
