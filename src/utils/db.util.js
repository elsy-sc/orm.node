const MongoClient = require('mongodb').MongoClient

async function getMongoDBConnection() {
    return await MongoClient.connect(process.env.MONGODB_URL).db(process.env.MONGODB_NAME);
}

exports.getMongoDBConnection = getMongoDBConnection;