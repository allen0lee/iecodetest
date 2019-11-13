const Pacman = require('./pacman')

test('can make a Pacman instance', () => {
  let p = new Pacman()
  expect(p.x).toBe(null)
  expect(p.y).toBe(null)
  expect(p.facing).toBe(null)
})

test('a position is a valid one to place', () => {
  let p = new Pacman()
  expect(p.isPositionValid(0, 0, 'north')).toBe(true)
})

test('a position is invalid', () => {
  let p = new Pacman()
  expect(p.isPositionValid(-1, -1, 'northeast')).toBe(false)
})

test('given a valid position, Pacman can be placed', () => {
  let p = new Pacman()
  p.place(0, 0, 'north')
  expect(p.x).toBe(0)
  expect(p.y).toBe(0)
  expect(p.facing).toBe('NORTH')
  expect(p.isPlaced()).toBe(true)
})

test('given an invalid position, Pacman cannot be placed', () => {
  let p = new Pacman()
  p.place(6, 0, 'northwest')
  expect(p.x).toBe(null)
  expect(p.y).toBe(null)
  expect(p.facing).toBe(null)
  expect(p.isPlaced()).toBe(false)
})

test('can report Pacman current location after a valid placement', () => {
  let p = new Pacman()
  p.place(5, 5, 'west')
  expect(p.report()).toBe('5,5,WEST')
})

test('report Pacman location to be undefined if a placement is invalid', () => {
  let p = new Pacman()
  p.place(6, -1, 'east')
  expect(p.report()).toBe(undefined)
})

test('can left rotate from north to west', () => {
  let p = new Pacman()
  p.place(0, 0, 'north')
  p.left()
  expect(p.facing).toBe('WEST')
})

test('can left rotate from west to south', () => {
  let p = new Pacman()
  p.place(0, 0, 'west')
  p.left()
  expect(p.facing).toBe('SOUTH')
})

test('can left rotate from south to east', () => {
  let p = new Pacman()
  p.place(0, 0, 'south')
  p.left()
  expect(p.facing).toBe('EAST')
})

test('can left rotate from east to north', () => {
  let p = new Pacman()
  p.place(0, 0, 'east')
  p.left()
  expect(p.facing).toBe('NORTH')
})

test('can right rotate from north to east', () => {
  let p = new Pacman()
  p.place(0, 0, 'north')
  p.right()
  expect(p.facing).toBe('EAST')
})

test('can right rotate from east to south', () => {
  let p = new Pacman()
  p.place(0, 0, 'east')
  p.right()
  expect(p.facing).toBe('SOUTH')
})

test('can right rotate from south to west', () => {
  let p = new Pacman()
  p.place(0, 0, 'south')
  p.right()
  expect(p.facing).toBe('WEST')
})

test('can right rotate from west to north', () => {
  let p = new Pacman()
  p.place(0, 0, 'west')
  p.right()
  expect(p.facing).toBe('NORTH')
})

test('can move north', () => {
  let p = new Pacman()
  p.place(0, 0, 'north')
  p.move()
  expect(p.report()).toBe('0,1,NORTH')
})

test('can move south', () => {
  let p = new Pacman()
  p.place(0, 1, 'south')
  p.move()
  expect(p.report()).toBe('0,0,SOUTH')
})

test('can move west', () => {
  let p = new Pacman()
  p.place(1, 0, 'west')
  p.move()
  expect(p.report()).toBe('0,0,WEST')
})

test('can move east', () => {
  let p = new Pacman()
  p.place(0, 0, 'east')
  p.move()
  expect(p.report()).toBe('1,0,EAST')
})

test('cannot move north outside of grid', () => {
  let p = new Pacman()
  p.place(0, 5, 'north')
  p.move()
  expect(p.report()).toBe('0,5,NORTH')
})

test('cannot move east outside of grid', () => {
  let p = new Pacman()
  p.place(5, 2, 'east')
  p.move()
  expect(p.report()).toBe('5,2,EAST')
})

test('cannot move south outside of grid', () => {
  let p = new Pacman()
  p.place(3, 0, 'south')
  p.move()
  expect(p.report()).toBe('3,0,SOUTH')
})

test('cannot move west outside of grid', () => {
  let p = new Pacman()
  p.place(0, 3, 'west')
  p.move()
  expect(p.report()).toBe('0,3,WEST')
})

test('can take new commands after an invalid command', () => {
  let p = new Pacman()
  p.place(0, 0, 'north')
  p.move()
  p.left()
  p.move() // invalid command that will move outside of grid
  p.right()
  p.move()
  expect(p.report()).toBe('0,2,NORTH')
})