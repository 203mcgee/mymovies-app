const error = (obj,e,t) => {
    console.log(`DAO Error: ${e}`)
    obj.json({
        "message":'error',
        'table':`${t}`,
        'error': e
    })

}
module.exports = {error}