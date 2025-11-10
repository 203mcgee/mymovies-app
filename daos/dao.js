const daoCommon = require('./common/daoCommon')


const movieDaos = {
    ...daoCommon,
    ...require('./api/movieDaos')
}

const directorDaos = {
    ...daoCommon,
    ...require('./api/directorDaos')
}

const actorDaos = {
    ...daoCommon,
    ...require('./api/actorDaos')
}

const genreDaos = {
    ...daoCommon,
    ...require('./api/genreDaos')
}

const streamingPlatformDaos ={
    ...daoCommon,
    ...require('./api/streamingPlatformDaos')
}

const productionDaos = {
    ...daoCommon,
    ...require('./api/productionDaos')
}


module.exports = {
    movieDaos,
    directorDaos,
    actorDaos,
    genreDaos,
    streamingPlatformDaos,
    productionDaos
}