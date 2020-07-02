const Cube = require('../models/cube')

const newCube = new Cube('Default', 'This is a default cube', 'https://google.com', 1)
const newCube1 = new Cube('Default1', 'This is a default cube1', 'https://google.com', 3)
const newCube2 = new Cube('Default2', 'This is a default cube2', 'https://google.com', 6)
const newCube3 = new Cube('Default3', 'This is a default cube3', 'https://google.com', 10)


newCube.save()
// newCube1.save()
// newCube2.save()
// newCube3.save()