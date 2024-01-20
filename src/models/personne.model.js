const { TableObject } = require("../bean/tableobject.bean");

class Personne extends TableObject {
    constructor(nom, prenom, age) { 
        super();
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
}

exports.Personne = Personne;