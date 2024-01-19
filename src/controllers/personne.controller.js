const { Personne } = require("../models/personne.model");
const { getMongoDBConnection } = require("../utils/db.util");
const { Http } = require("../utils/http.util");


async function createPersonne(req, res){
    const db = await getMongoDBConnection();
    new Personne(req.body?.nom, req.body?.prenom, req.body?.age).create(db).then( () => {
        res.status(201).send("Created");
    });
}

async function readPersonne(req, res){
    const db = await getMongoDBConnection();
    new Personne(req.body?.nom).read(db).then( (result) => {
        Http.sendJson(res, result, 200);
    });
}

async function updatePersonne(req, res){
    res.send("update Personne");
}

async function deletePersonne(req, res){
    res.send("delete Personne");
}

exports.createPersonne = createPersonne;
exports.readPersonne = readPersonne;
exports.updatePersonne = updatePersonne;
exports.deletePersonne = deletePersonne;