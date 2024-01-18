const { Voiture } = require("../models/voiture.model");
const { getMongoDBConnection } = require("../utils/db.util");

async function createVoiture(req, res) {
    const db = await getMongoDBConnection();
    new Voiture(req.body?.marque, req.body?.modele, req.body?.couleur, req.body?.annee, req.body?.prix).create(db).then(() => {
        res.status(201).send("Created");
    });
}

async function readVoiture(req, res) {
    const db = await getMongoDBConnection();
    new Voiture().read(db).then((result) => {
        res.status(200).send(result);
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