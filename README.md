# iecodetest

#### 1. What is it about?
This is a simple CLI application built with Node.js simulating the movement of Pacman on a 5x5 grid.

For detailed problem description, please refer to: https://github.com/ie/Code-Challenge-1

#### 2. How to use this demo
1. Install Node.js if you don't have it in your system 
2. Clone this demo to your machine, inside the demo directory, type the following in terminal window: `npm i`  
3. Within the same directory, type the following to start the program: `node main.js`  
4. You will be prompted to give instructions to the Pacman. Sample input and output can be:
```
  a) 
  PLACE 0,0,NORTH
  MOVE
  REPORT
  Output: 0,1,NORTH

  b)
  PLACE 0,0,NORTH
  LEFT
  REPORT
  Output: 0,0,WEST

  c)
  PLACE 1,2,EAST
  MOVE
  MOVE
  LEFT
  MOVE
  REPORT
  Output: 3,3,NORTH 
```
5. Press `Ctrl + c` to quit the program
6. This demo is provided with test testing the `Pacman` class. To run the test, within the same directory, type: `npm test`

#### 3. Future development
1. If user enters an invalid command, the program simply ignores it for now. Implement an exception handling by showing user a message which says "command invalid, please enter a valid command".
2. Instead of requiring user to type in the actions, enable the use of arrow keys for Pacman's move, for example.
3. Cerate a more visable version of the game, let's say represent the game in a graphical way. 

     
