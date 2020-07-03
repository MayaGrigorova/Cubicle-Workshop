const fs = require('fs')
const path = require('path')
const databaseFile = path.join(__dirname, '..', 'config/database.json');

const saveCube = (cube) => {
    
    getCubes((cubes) =>{
        
        cubes.push(cube)
        fs.writeFile(databaseFile, JSON.stringify(cubes), error => {
            if(error) {
                throw error
            }
            console.log('New cube is successfully stored!')
        })
    })
}

const getCube = id => {
        
}

const getCubes = (callback) => {
    fs.readFile(databaseFile, (err, dbData)=>{
        if(err){
            throw err
        }
        const cubes = JSON.parse(dbData)
        callback(cubes) 
    })
}

module.exports = {
    getCube,
    getCubes,
    saveCube
}