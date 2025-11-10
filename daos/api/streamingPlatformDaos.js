const connect = require('../../config/dbconfig')

const streamingPlatformDaos ={
    table: 'streaming_platform',
    movieOnStreamingPlatform: (res,table,id) => {
      const sql = `select * from movie m join ${table}`  
    }
}

module.exports = streamingPlatformDaos