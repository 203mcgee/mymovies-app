const express = require('express')
const router = express.Router()
const {movieDaos:dao} = require('../../daos/dao')

router.get('/',(req,res)=>{
    // console.log(dao.table)
    dao.findAll(req,res,dao.table)
})

router.get('/:id',(req,res)=>{
    dao.findById(res,dao.table,req.params.id)
})

router.get('/sort/:sorter',(req,res)=>{
    dao.sort(res,dao.table,req.params.sorter)
})
router.get('/begins/:l',(req,res)=>{
    dao.beginsWithLetter(res,dao.table,req.params.l)
})

//POST

router.post('/create',(req,res)=>{
    dao.create(req,res,dao.table)
})

// PATCH

router.patch('/update/:id',(req,res)=>{
    dao.update(req,res,dao.table)
})

module.exports = router