const { Router } = require('express')
const { getAllCubes } = require('../controllers/cubes')
const { getCube, saveCube } = require('../controllers/database')
const Cube = require('../models/cube')

const router = Router()

router.get('/', (req, res) =>{
        getAllCubes((cubes) => {
            res.render('index', {
            title: 'Cube Workshop',
            cubes
        })
    }) 
})

router.get('/about', (req, res) =>{
    res.render('about', {
        title: 'Cube Workshop | About'
    })
})

router.get('/create', (req, res) =>{
    res.render('create', {
        title: 'Cube Workshop | Create'
    })
})

router.post('/create', (req, res) =>{
   const {
       name,
       description,
       imageUrl,
       difficultyLevel
   } = req.body

   const cube = new Cube(name, description, imageUrl, difficultyLevel)
   cube.save(() => {
       res.redirect('/')
   })
})

router.get('/details/:id', (req, res) =>{
    getCube(req.params.id, (cube) => {
            res.render('details', {
            title: 'Cube Workshop | Details',
            ...cube
        })
    })
})

router.get('/*', (req, res) =>{
    res.render('404', {
        title: 'Cube Workshop | Error'
    })
})



module.exports = router
