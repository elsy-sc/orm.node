const { TableObject } = require("./tableobject.model");

class Personne extends TableObject {
    constructor(nom, prenom, age) { 
        super();
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
}

exports.Personne = Personne;