const jwt = require("jsonwebtoken");
const { TableObject } = require("./tableobject.bean");
const { Date } = require("./date.bean.util");

class Token extends TableObject {
    constructor(value, secret, expirationDateString) { 
        super();
        this.value = value;
        this.secret = secret;
        this.expirationDate = expirationDateString;
    }

    getSanitizedObject(){
        const sanitizedObject = super.getSanitizedObject();
        delete sanitizedObject.secret;
        return sanitizedObject;
    }

    setToken() {
        if (!this.expirationDate) {
            this.value = jwt.sign({
                data: this.getSanitizedObject()
            }, this.secret);
        } else {
            this.value = jwt.sign({
                exp: new Date(this.expirationDate).toSeconds(),
                data: this.getSanitizedObject()
            }, this.secret);
        }

    }

    async verifyToken(db) {
        if (!this.value) {
            let data = await this.read(db);
            if (data) {
                data = data[0];
            }
            this.value = data.value;
            this.expirationDate = data.expirationDate;
        } 
        try {
            jwt.verify(this.value, this.secret);
            return true;
        } catch (error) {
            return false;
        }
    }

    async refreshToken(db) {
        this.setToken();
        const { value, expirationDate } = this;
        this.value = undefined;
        this.expirationDate = undefined;
        await this.update(db , { value: value, expirationDate: expirationDate });
        this.value = value;
        this.expirationDate = expirationDate;
        await new Token(this.value, undefined, this.expirationDate).#createSuper(db);
    }


    async #createSuper(db) {
        await super.create(db);
    }

    async create(db) {
        if (!this.value) {
            this.setToken();
        }
        await super.create(db);
        await new Token(this.value, undefined, this.expirationDate).#createSuper(db);
    }    
    
}

exports.TokenObject = Token;