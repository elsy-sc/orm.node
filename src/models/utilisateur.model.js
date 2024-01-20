const { TokenObject } = require("../bean/tokenobject.bean.util");

class Utilisateur extends TokenObject {
    constructor(email, password) {
        super();
        this.email = email;
        this.password = password;
        this.secret = password;
    }
}

exports.Utilisateur = Utilisateur;