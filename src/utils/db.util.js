const MongoClient = require("mongodb").MongoClient;

let connection;

async function setMongoDBConnection() {
  await MongoClient.connect(process.env.MONGODB_URL).then((client) => {
    connection = client.db(process.env.MONGODB_NAME);
  });
}

async function getMongoDBConnection() {
  if (!connection) await setMongoDBConnection();
  return connection;
}


exports.startMongoDBConnection = setMongoDBConnection;
exports.getMongoDBConnection = getMongoDBConnection; 
