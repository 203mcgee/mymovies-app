const connect = require('../../config/dbconfig')

const movieDaos = {
    table: 'movie',
    
    findMovieInfo: (res,table) => {
        const sql = `SELECT m.movie_id , m.title,m.rating,m.runtime,m.nationality,m.yr_released,m.budget,m.gross,m.production_id, m.showing
        FROM movie m;`
        connect.query(
            sql,
            (error,rows)=>{
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
        // CASE 
        //     WHEN a.first_name IS NULL THEN ''
        //     ELSE a.first_name
        //     END first_name,
        // CASE 
        //     WHEN a.last_name IS NULL THEN ''
        //     ELSE a.last_name
        //     END last_name,
        // CASE 
        //     WHEN d.first_name IS NULL THEN ''
        //     ELSE d.first_name
        //     END first_name,
        // CASE 
        //     WHEN d.last_name IS NULL THEN ''
        //     ELSE d.last_name
        //     END last_name,
        // g.genre
        // FROM movie m
        // LEFT OUTER JOIN actor a USING (actor_id)
        // LEFT OUTER JOIN director d USING (director_id)
        // JOIN genre g USING (genre_id)
        // ORDER BY m.movie_id;
        
    }
}

module.exports = movieDaos
