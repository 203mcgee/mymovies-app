const connect = require('../../config/dbconfig')

const genreDaos = {
    table: 'genre',
    findByGenre: (res,table,id) => {
        let sql = `select * from movie_to_${table} join movie using (movie_id) join ${table} using (${table}_id) where ${table}_id = ${id};`
        connect.execute(
          sql,
          
            
        )

    } 
}

module.exports = genreDaos