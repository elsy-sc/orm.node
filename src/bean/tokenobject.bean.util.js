const jwt = require("jsonwebtoken");
const { TableObject } = require("./tableobject.bean");
const { Date } = require("./date.bean.util");

class Token extends TableObject {
    constructor(tokenValue, expirationDateString) { 
        super();
        this.tokenValue = tokenValue;
        this.creationDate = undefined;
        this.expirationDate = expirationDateString;
    }

    setToken() {
        let secret = process.env.SECRET_TOKEN_KEY|| "secret";
        if (!this.expirationDate) {
            this.tokenValue = jwt.sign({
                data: this.getSanitizedObject()
            }, secret);
        } else {
            this.tokenValue = jwt.sign({
                exp: new Date(this.expirationDate).toSeconds(),
                data: this.getSanitizedObject()
            }, secret);
        }

    }

    async verifyToken(db) {
        if (!this.tokenValue) {
            let data = await this.read(db);
            if (data) {
                data = data[0];
            }
            this.tokenValue = data.tokenValue;
            this.expirationDate = data.expirationDate;
        } 
        try {
            jwt.verify(this.tokenValue, process.env.SECRET_TOKEN_KEY|| "secret");
            return true;
        } catch (error) {
            return false;
        }
    }

    async refreshToken(db) {
        this.setToken();
        const { tokenValue, expirationDate } = this;
        this.tokenValue = undefined;
        this.expirationDate = undefined;
        await this.update(db , { tokenValue: tokenValue, expirationDate: expirationDate });
        this.tokenValue = tokenValue;
        this.expirationDate = expirationDate;
    }

    async create(db) {
        if (!this.tokenValue) {
            this.setToken();
        }
        this.creationDate = new Date().date;
        await super.create(db);
    }    
}

exports.TokenObject = Token;