const express = require('express')
const router = express.Router()
const {genreDaos:dao} = require('../../daos/dao')


router.get('/',(req,res)=>{
    dao.findAll(req,res,dao.table)
})

router.get('/begins/:l',(req,res)=>{
    dao.beginsWithLetter_genre(res,dao.table,req.params.l)
})
router.get('/:id',(req,res)=>{
    dao.findById(res,dao.table,req.params.id)
})

router.get('/sort/:sorter',(req,res)=>{
    dao.sort(res,dao.table,req.params.sorter)
})


module.exports = router