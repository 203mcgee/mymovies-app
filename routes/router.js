//const express = require('express').Router()
const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3000




router.get('/',(req,res)=>{
    res.render('pages/home',{
        title: "WELCOME TO THE HOMEPAGE",
        name: "WELCOME TO THE HOMEPAGE"
    })
})

router.get('/movie-form',(req,res)=>{
    res.render('pages/movie-form',{
        title: "Enter a movie",
        name: "Enter a movie"
    })
})

router.get('/genre-form',(req,res)=>{
    res.render('pages/genre-form',{
        title: "Enter a genre",
        name:"Enter a genre"
    })
})

router.get('/production-form',(req,res)=>{
    res.render('pages/production-form',{
        title: "Enter a Movie Production",
        name:"Enter a Movie Production"
    })
})

router.get('/director-form',(req,res)=>{
    res.render('pages/director-form',{
        title: "Enter a Director",
        name:"Enter a Director"
    })
})

router.get('/actor-form',(req,res)=>{
    res.render('pages/actor-form',{
        title: "Enter an Actor",
        name: "Enter an actor"
    })
})

router.get('/streaming-form',(req,res)=>{
    res.render('pages/streaming-form',{
        title: "Enter a Streaming Platform",
        name: "Enter a Streaming Platform"
    })
})


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
    // .send('404 PAGE NOT FOUND!')
    res.render('pages/error',{
        title: "Error",
        name: "Error"
    })
})

module.exports = router