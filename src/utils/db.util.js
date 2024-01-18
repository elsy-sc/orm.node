const MongoClient = require('mongodb').MongoClient

async function getMongoDBConnection() {
    const client = await MongoClient.connect(process.env.MONGODB_URL)
    return client.db(process.env.MONGODB_NAME);
}

exports.getMongoDBConnection = getMongoDBConnection;