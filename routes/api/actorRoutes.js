const express = require('express')
const router = express.Router()
const {actorDaos:dao} = require('../../daos/dao')


router.get('/',(req,res)=>{
    dao.findAll(req,res,dao.table)
})
router.get('/begins/:l',(req,res)=>{
    dao.beginsWithLetter_actor(res,dao.table,req.params.l)
})
router.get('/:id',(req,res)=>{
    dao.findById(res,dao.table,req.params.id)
})

router.get('/sort/:sorter',(req,res)=>{
    dao.sort(res,dao.table,req.params.sorter)
})

// POST
router.post('/create',(req,res)=>{
    dao.create(req,res,dao.table)
})

// PATCH
router.patch('/update/:id',(req,res)=>{
    dao.update(req,res,dao.table)
})




module.exports = router

