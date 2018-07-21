const get = require('simple-get')
exports.handler = function(event, context, callback) {
    let username = 'jtsg';
    if (event.queryStringParameters !== null && event.queryStringParameters !== undefined) {
        if (event.queryStringParameters.username !== undefined && 
            event.queryStringParameters.username !== null && 
            event.queryStringParameters.username !== "") {
            username = event.queryStringParameters.username;
        }
    }
    get.concat(`https://medium.com/@${username}?format=json`, function (err, res, data) {
        if (err) throw err

        let body =  data.toString('utf-8')
        body = body.split('])}while(1);</x>')[1]
        let response = {
            "isBase64Encoded": false,
            "statusCode": res.statusCode,
            "headers": { 'Access-Control-Allow-Origin': '*'},
            "body": body
        }
        callback(null,response)   
    })
}