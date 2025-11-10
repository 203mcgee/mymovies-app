const connect = require('../../config/dbconfig')


const directorDaos = {
    table: 'director',
    findMovieByDirector : (res,table,id) => {
        let movies = []
        let sql = `SELECT movie_id,title,yr_released FROM movie WHERE director_id = ${id};`
        connect.query(
            sql,
            (error,rows)=> {
                if(!error){
                    Object.values(rows).forEach(obj => {
                        movies.push(obj)
                    })

                    connect.query(
                        `SELECT * FROM ${table} WHERE ${table}_id = ${id}`,
                        (error,rows) => {
                            rows.forEach(row => {
                                row.movies = movies
                            })

                            if(!error){
                                res.json(...rows)
                            }
                            else{
                                console.log('DAO ERROR: ', error)
                            }
                        }
                        
                    )

                }
                else {
                    res.json({
                        "message": 'error',
                        'table': `${table}`,
                        'error': error
                    })
                }
            }
        )
    },
    findByDirector: (res,table,id) => {
        let sql =`select * from movie_to_${table} join ${table} using (${table}_id) join movie using (movie_id) where movie_id = ${id};`
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

module.exports = directorDaos