const { Voiture } = require("../models/voiture.model");
const { getMongoDBDatabase } = require("../utils/db.util");
const httpUtil = require("../utils/http.util");

async function createVoiture(req, res) {
    const db = await getMongoDBDatabase();
    new Voiture(req.body?.marque, req.body?.modele, req.body?.couleur, req.body?.annee, req.body?.prix).create(db).then(() => {
        httpUtil.sendJson(res, null, 201, "Created");
    });
}

async function readVoiture(req, res) {
    const db = await getMongoDBDatabase();
    new Voiture().read(db).then((result) => {
        httpUtil.sendJson(res, result, 200);
    });
}

async function updateVoiture(req, res) {
    res.send("update voiture");
}

async function deleteVoiture(req, res) {
    res.send("delete voiture");
}

exports.createVoiture = createVoiture;
exports.readVoiture = readVoiture;
exports.updateVoiture = updateVoiture;
exports.deleteVoiture = deleteVoiture;