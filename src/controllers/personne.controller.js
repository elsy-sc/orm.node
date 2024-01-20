const { Personne } = require("../models/personne.model");
const { getMongoDBDatabase } = require("../utils/db.util");
const httpUtil = require("../utils/http.util");
const { Utilisateur } = require("../models/utilisateur.model");

async function createPersonne(req, res){
    const db = await getMongoDBDatabase();
    new Personne(req.body?.nom, req.body?.prenom, req.body?.age).create(db).then( () => {
        httpUtil.sendJson(res, null, 201, "Created");
    });
}

async function readPersonne(req, res){
    const db = await getMongoDBDatabase();
    new Personne().read(db).then( (result) => {
        httpUtil.sendJson(res, result, 200);
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