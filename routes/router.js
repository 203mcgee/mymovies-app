//const express = require('express').Router()
const express = require('express')
const { genreDaos } = require('../daos/dao')
const router = express.Router()
const PORT = process.env.PORT || 3000


router.get('/api',(req,res)=>{
    // res.send('HELLO!!') (TESTING IF IT WILL SHOW)
    res.json({
        'All Movies': `http://localhost:${PORT}/api/movie`,
        'All Directors': `http://localhost:${PORT}/api/director`,
        'All Actors': `http://localhost:${PORT}/api/actor`,
        'All Genres': `http://localhost:${PORT}/api/genre`,
        'All Streaming Platforms': `http://localhost:${PORT}/api/streamingPlatform`,
        'All Productions' : `http://localhost:${PORT}/api/production`
    })
})



const endpoints = ['movie','director','actor','genre','streamingPlatform','production']

endpoints.forEach(endpoint =>{
    router.use(`/api/${endpoint}`,require(`./api/${endpoint}Routes`))
})

router.use((req,res,next)=>{
    res.status(404)
    .send('404 PAGE NOT FOUND!')
})

module.exports = router