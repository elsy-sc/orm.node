const express = require("express");
const { getMongoDBConnection } = require("../utils/db.util");
const { Personne } = require("../models/personne.model");
const router = express.Router();

router.post("/add", async (req, res) => {
    // const db = await getMongoDBConnection();
    /*let personne1 = new Personne();
    personne1.nom = 'Jean';
    personne1.prenom = 'Claude Vandam';
    personne1.age = 40;

    let personne2 = new Personne();
    personne2.nom = 'Rakoto';
    personne2.prenom = 'Be Andry';
    personne2.age = 30;

    let personne3 = new Personne();
    personne3.nom = 'Rabe';
    personne3.prenom = 'Rehavana';
    personne3.age = 20;

    await personne1.create(db).then(() => {
        console.log('Personne ajoutée');
    });

    await personne2.create(db).then(() => {
        console.log('Personne ajoutée');
    });

    await personne3.create(db).then(() => {
        res.send('Personne ajoutée');
    });*/

    // let personne = new Personne();

    // let personnes = await personne.read(db, personne, { _id: 'PERS1' }).then((personnes) => {
    //     return personnes;
    // });

    // res.send(personnes);

});

router.post("/delete", (req, res) => {

});

router.get("/get", (req, res) => {
    
});

router.post("/update", (req, res) => {
        
});

module.exports = router;