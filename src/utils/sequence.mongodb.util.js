const { getMongoDBConnection } = require("./db.util");

async function getCurrVal(name){
    const db = await getMongoDBConnection();
    const sequence = await db.collection("sequence").findOne({ _id: name });
    return sequence.value;
}

async function getNextVal(name) {
  const db = await getMongoDBConnection();
  await db.collection("sequence").updateOne({ _id: name }, { $inc: { value: 1 } });
  const sequence = await db.collection("sequence").findOne({ _id: name });
  return sequence.value;
}

async function createSeq(name) {
    const db = await getMongoDBConnection();
    const sequence = await db.collection("sequence").findOne({ _id: name });
    if(!sequence) await db.collection("sequence").insertOne({ _id: name, value: 0 });
}

exports.getCurrVal = getCurrVal;
exports.getNextVal = getNextVal;
exports.createSeq = createSeq;
