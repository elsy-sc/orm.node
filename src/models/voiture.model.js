const { TableObject } = require("./tableobject.model");

class Voiture extends TableObject{
    constructor(id, marque, modele, couleur, annee, prix) {
        super();
        this.id = id;
        this.marque = marque;
        this.modele = modele;
        this.couleur = couleur;
        this.annee = annee;
        this.prix = prix;
    }
}

exports.Voiture = Voiture;