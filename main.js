const readline = require('readline')
const Pacman = require("./pacman")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'Enter command for Pacman: '
})

const main = () => {
  let p = new Pacman()
  
  rl.prompt()
  
  rl.on('line', (line) => {
    let [command, coordinates] = line.trim().split(' ') // remove space in input and turn it into array
    
    switch(command) {
      case 'PLACE':    
        let [x, y, f] = coordinates.split(',')
        p.place(x, y, f)
        break
      case 'MOVE':
        p.move()
        break
      case 'LEFT':
        p.left()
        break
      case 'RIGHT':
        p.right()
        break
      case 'REPORT':
        let currentLocation = p.report()
        console.log(`Output: ${currentLocation}`)
        break
      default:
        console.log("Please enter a valid command.")
    }
    rl.prompt()
  }).on('close', () => {
    console.log('\nGame quit, goodbye!')
    process.exit(0)
  })

}

main()