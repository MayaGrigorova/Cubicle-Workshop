const fs = require('fs')
const path = require('path')

const getCubes = () => {
    const databaseFile = path.join(__dirname, '..', 'config/database.json');
    const cubes = fs.readFileSync(databaseFile)
    return JSON.parse(cubes)
}

module.exports = {
    getCubes
}