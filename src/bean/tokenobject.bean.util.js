const jwt = require("jsonwebtoken");
const { TableObject } = require("./tableobject.bean");
const { Date } = require("./date.bean.util");

class TokenObject extends TableObject {
    constructor(token, secret, expirationDateString) { 
        super();
        this.token = token;
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
            this.token = jwt.sign({
                data: this.getSanitizedObject()
            }, this.secret);
        } else {
            this.token = jwt.sign({
                exp: new Date(this.expirationDate).toSeconds(),
                data: this.getSanitizedObject()
            }, this.secret);
        }

    }

    async verifyToken(db) {
        if (!this.token) {
            let data = await this.read(db);
            if (data) {
                data = data[0];
            }
            this.token = data.token;
            this.expirationDate = data.expirationDate;
        } 
        try {
            jwt.verify(this.token, this.secret);
            return true;
        } catch (error) {
            return false;
        }
    }

    async refreshToken(db) {
        this.setToken();
        const { token, expirationDate } = this;
        this.token = undefined;
        this.expirationDate = undefined;
        await this.update(db , { token: token, expirationDate: expirationDate });
        this.token = token;
        this.expirationDate = expirationDate;
    }

    create(db) {
        if (!this.token) {
            this.setToken();
        }
        return super.create(db);
    }    
    
}

exports.TokenObject = TokenObject;