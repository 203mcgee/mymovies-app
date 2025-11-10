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
    }
}

module.exports = directorDaos