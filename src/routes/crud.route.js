const express = require("express");
const { getMongoDBConnection } = require("../utils/db.util");
const Personne = require("../models/personne.model");
const router = express.Router();

router.post("/add", async (req, res) => {
    const db = await getMongoDBConnection();
    console.log(req.body);
    const personne = new Personne(req.body?.id, req.body?.nom, req.body?.prenom, req.body?.age);
    db.collection("personnes").insertOne(personne);
});

router.post("/delete", (req, res) => {

});

router.get("/get", (req, res) => {
    
});

router.post("/update", (req, res) => {
        
});

module.exports = router;