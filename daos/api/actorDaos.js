const connect = require('../../config/dbconfig')

const actorDaos = {
    table: 'actor',
    findByActor : (res,table,id) => {
       let sql  = ` select * from movie_to_${table} join ${table} using (${table}_id) join movie using (movie_id) where movie_id = ${id};`
       connect.execute(
        sql,
        (error,rows) => {
            if(!error)
            {
                if(rows.length==1)
                    {
                        res.json(...rows)
                    }
                    else{ res.json(rows)}
            }
            else
            {
                console.log(`DAO Error: ${error}`)
                    res.json({
                        "message":'error',
                        'table':`${table}`,
                        'error': error

                    })
            }
          }
            
       )
    }
}
module.exports = actorDaos