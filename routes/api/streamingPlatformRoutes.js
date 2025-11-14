const express = require('express')
const router = express.Router()
const {streamingPlatformDaos:dao} = require('../../daos/dao')

router.get('/',(req,res)=>{
    // console.log(dao.table)
    dao.findAll(req,res,dao.table)
})
router.get('/begins/:l',(req,res)=>{
    dao.beginsWithLetter_streaming_platform(res,dao.table,req.params.l)
})
router.get('/:id',(req,res)=>{
    dao.findById(res,dao.table,req.params.id)
})

router.get('/sort/:sorter',(req,res)=>{
    dao.sort(res,dao.table,req.params.sorter)
})
router.get('/streamingMovie/:s',(req,res)=>{
    dao.findByStreaming(res,dao.table,req.params.s)
})

router.post('/create',(req,res)=>{
    dao.create(req,res,dao.table)
})

router.patch('/update/:id',(req,res)=>{
    dao.update(req,res,dao.table)
})

module.exports = router