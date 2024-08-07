const { TableObject } = require("../bean/tableobject.bean");

class Voiture extends TableObject{
    constructor(marque, modele, couleur, annee, prix) {
        super();
        this.marque = marque;
        this.modele = modele;
        this.couleur = couleur;
        this.annee = annee;
        this.prix = prix;
    }
}

exports.Voiture = Voiture;