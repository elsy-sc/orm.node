const MongoClient = require("mongodb").MongoClient;

let db;

async function setMongoDBConnection() {
  db = (await MongoClient.connect(process.env.MONGODB_URL)).db(process.env.MONGODB_NAME);
}

async function getMongoDBConnection() {
  if (!db) {
    await setMongoDBConnection();
  }
  return db;
}
exports.startMongoDB = setMongoDBConnection;
exports.getMongoDBConnection = getMongoDBConnection;
