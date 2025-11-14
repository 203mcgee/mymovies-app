const connect = require('../../config/dbconfig')
const { table } = require('../api/movieDaos')
// const {error} = require('../../helpers/errorHandler')

const daoCommon = {
    findAll: (req,res,table) =>{
        connect.query(
            `SELECT * FROM ${table};`,
            (error,rows) => {
                if(!error)
                {
                    if(rows.length==1)
                    {
                        res.json(...rows)
                    }
                    else{ res.json(rows)}
                }
                else{
                    // error(res,error,table)
                    console.log(`DAO Error: ${error}`)
                    res.json({
                        "message": 'error',
                        'table': `${table}`,
                        'error': error
                    })
                }
            }
        )
    },
    findById: (res,table,id) => {
        connect.query(
            `SELECT * FROM ${table} WHERE ${table}_id = ${id};`,
            (error,rows) => {
                if(!error)
                {
                    res.json(...rows)
                }
                else
                {
                    console.log(`DAO Error: ${error}`)
                    res.json({
                        "message": 'error',
                        'table': `${table}`,
                        'error': error
                    })
                }
            }
        )

    },
    sort: (res,table,sorter) => {
        connect.query(
            `SELECT * FROM ${table} ORDER BY ${sorter}`,
            (error,rows) => {
                if(!error)
                {
                    if(rows.length == 1)
                    {
                        res.json(...rows)
                    }
                    else{
                        res.json(rows)
                    }
                }
                else {
                    console.log(`DAO Error: ${error}`)
                    res.json({
                        "message":'error',
                        'table': `${table}`,
                        'error': error
                    })
                }
            }
        )
    },
    beginsWithLetter: (res,table,letter) =>{
        connect.query(
            `SELECT * FROM ${table} WHERE title LIKE '${letter}%';`,
            (error,rows) => {
                if(!error){

                    while( rows != 0)
                    {
                        res.json(...rows)

                    }

                }
                else{
                    console.log(`DAO Error: ${error}`)
                    res.json({
                        "message":'error',
                        'table':`${table}`,
                        'error':error
                    })
                }
            }

        )
    },
    beginsWithLetter_director: (res,table,letter) => {
        connect.query(
            `select * from ${table} where first_name like '${letter}%';`,
            (error,rows) => {
                if(!error){
                    res.json(...rows)

                }
                else{
                    console.log(`DAO Error: ${error}`)
                    res.json({
                        "message":'error',
                        'table':`${table}`,
                        'error':error
                    })
                }
            }

        )
    },
    beginsWithLetter_genre: (res,table,letter) => {
        connect.query(
            `SELECT * FROM ${table} WHERE ${table} LIKE '${letter}%';`,
            (error,rows) => {
                if(!error){
                    res.json(...rows)

                }
                else{
                    console.log(`DAO Error: ${error}`)
                    res.json({
                        "message":'error',
                        'table':`${table}`,
                        'error':error
                    })
                }
            }

        )
    },
    beginsWithLetter_actor: (res,table,letter) => {
        connect.query(
            `select * from ${table} where first_name like '${letter}%';`,
            (error,rows) => {
                if(!error){

                    while (rows != 0)
                    {
                        res.json(...rows)

                    }

                }
                else{
                    console.log(`DAO Error: ${error}`)
                    res.json({
                        "message":'error',
                        'table':`${table}`,
                        'error':error
                    })
                }
            }

        )
    },
    beginsWithLetter_streaming_platform: (res,table,letter) => {
        connect.query(
            `SELECT * FROM streaming_platform WHERE streaming_platform LIKE '${letter}%'`,
            (error,rows) => {
                if(!error){
                    res.json(...rows)

                }
                else{
                    console.log(`DAO Error: ${error}`)
                    res.json({
                        "message":'error',
                        'table':`${table}`,
                        'error':error
                    })
                }
            }

        )
    },
    beginsWithLetter_production: (res,table,letter) => {
        connect.query(
            `SELECT * FROM production WHERE production LIKE '${letter}%'`,
            (error,rows) => {
                if(!error){
                    res.json(...rows)

                }
                else{
                    console.log(`DAO Error: ${error}`)
                    res.json({
                        "message":'error',
                        'table':`${table}`,
                        'error':error
                    })
                }
            }

        )
    },
    create: (req,res,table) => {
        if(Object.keys(req.body).length === 0)
        {
            res.json({
                "error":true,
                "message": "No fields to create"
            })
        }
        else
        {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            connect.execute(
                `INSERT INTO ${table} SET ${fields.join(' = ?, ')} = ?;`,
                values,
                (error,dbres)=>{
                    if(!error)
                    {
                        console.log(dbres)
                        res.render('pages/success',{
                            title:'success',
                            name:'success'
                        })

                    }
                    else
                    {
                        console.log(`${table} DAO error`,error)
                    }
                }
            )
        }

    },
    update: (req,res,table) =>{
        if(isNaN(req.params.id))
        {
            res.json({
                "error":true,
                "message": "Id must be a number"
            })
        }
        else if(Object.keys(req.body).length == 0)
        {
            res.json({
                "error":true,
                "message": "No fields to update"
            })
        }
        else
        {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            connect.execute(
                `UPDATE ${table}
                SET ${fields.join(' = ?, ')} = ? WHERE ${table}_id = ?;`,
                [...values,req.params.id],
                (error,dbres) =>{
                    if(!error)
                    {
                        res.json({
                            "status":"updated",
                            "changedRows": dbres.changedRows
                        })
                    }
                    else
                    {
                        res.json({
                            "error":true,
                            "message":"error"
                        })
                    }
                }
            )
        }
    }
    
}

/**
 * `select * from director where first_name like 'a%';`(directors)
 * `SELECT * FROM genre WHERE genre LIKE 'a%'`
 * `SELECT * FROM streaming_platform WHERE streaming_platform LIKE 'a%'`
 */

module.exports = daoCommon